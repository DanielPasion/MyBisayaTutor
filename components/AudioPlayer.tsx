import { Audio } from "expo-av";
import React, { useEffect, useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Svg, { Rect } from "react-native-svg";

interface AudioPlayerProps {
  uri: string; // audio file URL or local path
}

export default function AudioPlayer({ uri }: AudioPlayerProps) {
  const sound = useRef<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  // const [duration, setDuration] = useState(1);

  useEffect(() => {
    const loadSound = async () => {
      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri },
        { shouldPlay: false },
        onPlaybackStatusUpdate
      );
      sound.current = newSound;
    };
    loadSound();
    return () => {
      if (sound.current) {
        sound.current.unloadAsync();
      }
    };
  }, [uri]);

  const onPlaybackStatusUpdate = (status: any) => {
    if (status.isLoaded) {
      // setDuration(status.durationMillis || 1);
      setProgress(status.positionMillis / (status.durationMillis || 1));
      setIsPlaying(status.isPlaying);
    }
  };

  const togglePlay = async () => {
    if (!sound.current) return;
    if (isPlaying) {
      await sound.current.pauseAsync();
    } else {
      await sound.current.playAsync();
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

      {/* Waveform / Progress Bar */}
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

      {/* Time Display */}
      {/* <Text style={{ marginTop: 6, color: "#555" }}>
        {Math.floor((progress * duration) / 1000)}s /{" "}
        {Math.floor(duration / 1000)}s
      </Text> */}
    </View>
  );
}
