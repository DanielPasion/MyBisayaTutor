import useThemeColors from "@/app/hooks/useThemeColor";
import { AudioPlayer, createAudioPlayer, setAudioModeAsync } from "expo-audio";
import React, { useEffect, useRef, useState } from "react";
import {
  Platform,
  TouchableOpacity,
  View,
  StyleSheet,
  Animated,
  useColorScheme,
} from "react-native";
import Svg, {
  Rect,
  Circle,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
import { Ionicons } from "@expo/vector-icons";

interface AudioPlayerProps {
  uri: string;
}

export default function AudioPlayerComponent({ uri }: AudioPlayerProps) {
  const { colors } = useThemeColors();
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  const audioRef = useRef<HTMLAudioElement | AudioPlayer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const pulseAnim = useRef(new Animated.Value(1)).current;
  const rippleAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;

  const visualizerAnims = useRef(
    Array.from({ length: 12 }, () => new Animated.Value(0.3))
  ).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 100,
        friction: 8,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, scaleAnim]);

  // Pulse animation for play button
  useEffect(() => {
    if (isPlaying) {
      const pulse = Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.08,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
        ])
      );
      pulse.start();

      // Ripple effect
      const ripple = Animated.loop(
        Animated.timing(rippleAnim, {
          toValue: 1,
          duration: 2500,
          useNativeDriver: true,
        })
      );
      ripple.start();

      return () => {
        pulse.stop();
        ripple.stop();
      };
    } else {
      pulseAnim.setValue(1);
      rippleAnim.setValue(0);
    }
  }, [isPlaying, pulseAnim, rippleAnim]);

  useEffect(() => {
    if (isPlaying) {
      const animateVisualizer = () => {
        const animations = visualizerAnims.map((anim, index) =>
          Animated.loop(
            Animated.sequence([
              Animated.timing(anim, {
                toValue: Math.random() * 0.8 + 0.4,
                duration: 250 + Math.random() * 300,
                useNativeDriver: false,
              }),
              Animated.timing(anim, {
                toValue: Math.random() * 0.5 + 0.2,
                duration: 250 + Math.random() * 300,
                useNativeDriver: false,
              }),
            ])
          )
        );

        Animated.stagger(40, animations).start();
      };

      animateVisualizer();
      const interval = setInterval(animateVisualizer, 1800);

      return () => {
        clearInterval(interval);
        visualizerAnims.forEach((anim) => anim.stopAnimation());
      };
    } else {
      visualizerAnims.forEach((anim, index) => {
        Animated.timing(anim, {
          toValue: 0.15 + (index % 4) * 0.08,
          duration: 600,
          useNativeDriver: false,
        }).start();
      });
    }
  }, [isPlaying, visualizerAnims]);

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
      if (Platform.OS === "web") {
        await audioRef.current.play();
      } else {
        const player = audioRef.current as AudioPlayer;
        await setAudioModeAsync({
          playsInSilentMode: true,
          allowsRecording: false,
        });
        if (player.currentTime >= player.duration) player.seekTo(0);
        player.play();
      }
      setIsPlaying(true);
    }
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: isDarkMode
        ? colors.cream[200] + "E6"
        : colors.white[200] + "F0",
      borderRadius: 20,
      padding: 16,
      marginVertical: 8,
      marginHorizontal: 0,
      shadowColor: isDarkMode ? "#000" : colors.orange["300"],
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: isDarkMode ? 0.15 : 0.08,
      shadowRadius: 8,
      elevation: 4,
      gap: 14,
      borderWidth: 1,
      borderColor: isDarkMode
        ? colors.orange[400] + "30"
        : colors.orange[300] + "40",
      backdropFilter: "blur(20px)",
    },
    playButtonContainer: {
      position: "relative",
      alignItems: "center",
      justifyContent: "center",
    },
    rippleEffect: {
      position: "absolute",
      width: 72,
      height: 72,
      borderRadius: 36,
      borderWidth: 2,
      borderColor: isPlaying
        ? colors.green["400"] + "60"
        : colors.orange["400"] + "60",
    },
    playButton: {
      width: 48,
      height: 48,
      borderRadius: 24,
      justifyContent: "center",
      alignItems: "center",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.2,
      shadowRadius: 6,
      elevation: 4,
      borderWidth: 2,
      borderColor: isPlaying
        ? colors.green["400"] + "40"
        : colors.orange["400"] + "40",
    },
    progressContainer: {
      flex: 1,
      justifyContent: "center",
      gap: 8,
    },
    progressWrapper: {
      position: "relative",
      height: 18,
    },
    progressGlow: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: 9,
      opacity: isPlaying ? 0.4 : 0,
    },
    visualizer: {
      flexDirection: "row",
      alignItems: "flex-end",
      height: 36,
      gap: 3,
      paddingHorizontal: 4,
    },
    visualizerContainer: {
      backgroundColor: isDarkMode
        ? colors.cream[300] + "CC"
        : colors.cream[200] + "E6",
      borderRadius: 18,
      padding: 10,
      borderWidth: 1,
      borderColor: isDarkMode
        ? colors.orange[400] + "30"
        : colors.orange[300] + "40",
      backdropFilter: "blur(10px)",
    },
  });

  // Enhanced gradient colors for progress bar
  const progressGradientColors = isPlaying
    ? [colors.green["400"], colors.green["500"], colors.green["600"]]
    : [colors.orange["400"], colors.orange["500"], colors.orange["600"]];

  const trackGradientColors = isDarkMode
    ? [colors.cream[400], colors.cream[500]]
    : [colors.cream[300], colors.cream[400]];

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }],
        },
      ]}
    >
      {/* Play/Pause Button with Enhanced Ripple Effect */}
      <View style={styles.playButtonContainer}>
        {/* Ripple Effect */}
        {isPlaying && (
          <Animated.View
            style={[
              styles.rippleEffect,
              {
                opacity: rippleAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.6, 0],
                }),
                transform: [
                  {
                    scale: rippleAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.7, 1.5],
                    }),
                  },
                ],
              },
            ]}
          />
        )}

        <Animated.View
          style={{
            transform: [{ scale: pulseAnim }],
          }}
        >
          <TouchableOpacity
            onPress={togglePlay}
            style={[
              styles.playButton,
              {
                backgroundColor: isPlaying
                  ? colors.green["500"]
                  : colors.orange["500"],
                shadowColor: isPlaying
                  ? colors.green["600"]
                  : colors.orange["600"],
              },
            ]}
            activeOpacity={0.8}
          >
            <Ionicons
              name={isPlaying ? "pause" : "play"}
              size={22}
              color={colors.white[100]}
              style={{ marginLeft: isPlaying ? 0 : 2 }}
            />
          </TouchableOpacity>
        </Animated.View>
      </View>

      {/* Enhanced Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={styles.progressWrapper}>
          {/* Enhanced glow effect */}
          <View
            style={[
              styles.progressGlow,
              {
                backgroundColor: isPlaying
                  ? colors.green["200"]
                  : colors.orange["200"],
                shadowColor: isPlaying
                  ? colors.green["400"]
                  : colors.orange["400"],
                shadowRadius: 12,
                shadowOpacity: isPlaying ? 0.6 : 0,
              },
            ]}
          />

          <Svg height="18" width="100%">
            <Defs>
              <LinearGradient
                id="progressGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <Stop offset="0%" stopColor={progressGradientColors[0]} />
                <Stop offset="50%" stopColor={progressGradientColors[1]} />
                <Stop offset="100%" stopColor={progressGradientColors[2]} />
              </LinearGradient>
              <LinearGradient
                id="trackGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <Stop offset="0%" stopColor={trackGradientColors[0]} />
                <Stop offset="100%" stopColor={trackGradientColors[1]} />
              </LinearGradient>
            </Defs>

            {/* Track */}
            <Rect
              x="0"
              y="4"
              width="100%"
              height="10"
              rx="5"
              fill="url(#trackGradient)"
            />

            {/* Progress */}
            <Rect
              x="0"
              y="4"
              width={`${progress * 100}%`}
              height="10"
              rx="5"
              fill="url(#progressGradient)"
            />

            {/* Enhanced progress indicator dot */}
            {progress > 0 && (
              <Circle
                cx={`${progress * 100}%`}
                cy="9"
                r="7"
                fill={isPlaying ? colors.green["500"] : colors.orange["500"]}
                stroke={colors.white[100]}
                strokeWidth="2"
              />
            )}
          </Svg>
        </View>
      </View>

      {/* Enhanced Animated Visualizer */}
      <View style={styles.visualizerContainer}>
        <View style={styles.visualizer}>
          {visualizerAnims.map((anim, index) => (
            <Animated.View
              key={index}
              style={{
                width: 3,
                borderRadius: 1.5,
                backgroundColor: isPlaying
                  ? index % 3 === 0
                    ? colors.green["500"]
                    : index % 3 === 1
                    ? colors.orange["500"]
                    : colors.green["400"]
                  : isDarkMode
                  ? colors.cream[500]
                  : colors.cream[400],
                height: anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [4, 36],
                }),
                opacity: isPlaying ? 0.9 : 0.3,
              }}
            />
          ))}
        </View>
      </View>
    </Animated.View>
  );
}
