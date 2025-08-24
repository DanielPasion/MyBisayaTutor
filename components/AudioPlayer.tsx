import React, { useEffect, useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Svg, { Rect } from "react-native-svg";

interface AudioPlayerProps {
  uri: string; // audio file URL or local path
}

export default function AudioPlayer({ uri }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const audio = new Audio(uri);
    audioRef.current = audio;

    const updateProgress = () => {
      if (audio.duration > 0) {
        setProgress(audio.currentTime / audio.duration);
      }
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", () => setIsPlaying(false));

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", updateProgress);
      audioRef.current = null;
    };
  }, [uri]);

  const togglePlay = async () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      await audioRef.current.pause();
      setIsPlaying(false);
    } else {
      await audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 12,
        padding: 16,
        margin: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 6,
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
      }}
    >
      {/* Play / Pause Button */}
      <TouchableOpacity
        onPress={togglePlay}
        style={{
          backgroundColor: "#f97316",
          paddingVertical: 8,
          paddingHorizontal: 16,
          borderRadius: 8,
          alignSelf: "flex-start",
          marginTop: 10,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          {isPlaying ? "Pause" : "Play"}
        </Text>
      </TouchableOpacity>

      {/* Progress Bar */}
      <Svg height="40" width="100%" style={{ marginTop: 10 }}>
        <Rect x="0" y="15" width="100%" height="10" rx="5" fill="#ddd" />
        <Rect
          x="0"
          y="15"
          width={`${progress * 100}%`}
          height="10"
          rx="5"
          fill="#f97316"
        />
      </Svg>
    </View>
  );
}
