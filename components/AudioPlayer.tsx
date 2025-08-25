import { AudioPlayer, createAudioPlayer } from "expo-audio";
import React, { useEffect, useRef, useState } from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import Svg, { Rect } from "react-native-svg";

interface AudioPlayerProps {
  uri: string; // audio file URL or local path
}

export default function AudioPlayerComponent({ uri }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | AudioPlayer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (Platform.OS === "web") {
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
    } else {
      const player = createAudioPlayer(uri);
      audioRef.current = player;

      const interval = setInterval(() => {
        if (player.duration > 0) {
          setProgress(player.currentTime / player.duration);
        }

        if (!player.playing && player.currentTime >= player.duration) {
          setIsPlaying(false);
        }
      }, 500);

      return () => {
        setIsPlaying(false);
        clearInterval(interval);
        player.pause();
        player.remove();
        audioRef.current = null;
      };
    }
  }, [uri]);

  const togglePlay = async () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
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
        gap: 10,
      }}
    >
      <TouchableOpacity
        onPress={togglePlay}
        style={{
          backgroundColor: "#f97316",
          paddingVertical: 8,
          paddingHorizontal: 16,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          {isPlaying ? "Pause" : "Play"}
        </Text>
      </TouchableOpacity>

      <View style={{ flex: 1 }}>
        <Svg height="20" width="100%">
          <Rect x="0" y="5" width="100%" height="10" rx="5" fill="#ddd" />
          <Rect
            x="0"
            y="5"
            width={`${progress * 100}%`}
            height="10"
            rx="5"
            fill="#f97316"
          />
        </Svg>
      </View>
    </View>
  );
}
