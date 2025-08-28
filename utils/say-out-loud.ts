import { createAudioPlayer, setAudioModeAsync } from "expo-audio";
import * as FileSystem from "expo-file-system";
import { Platform } from "react-native";
import { uri } from "./uri";

let lastText: string | null = null;
let lastFileUri: string | null = null;

export const sayOutLoud = async (text: string) => {
  try {
    if (text === lastText && lastFileUri) {
      if (Platform.OS === "web") {
        const audio = new Audio(lastFileUri);
        await audio.play();
      } else {
        const player = createAudioPlayer(lastFileUri);
        await setAudioModeAsync({
          playsInSilentMode: true,
          allowsRecording: false,
        });
        player.play();
      }
      return;
    }

    const response = await fetch(`${uri}/tts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    if (Platform.OS === "web") {
      const arrayBuffer = await response.arrayBuffer();
      const blob = new Blob([arrayBuffer], { type: "audio/mpeg" });
      const url = URL.createObjectURL(blob);
      lastText = text;
      lastFileUri = url;
      const audio = new Audio(url);
      await audio.play();
    } else {
      const blob = await response.blob();
      const reader = new FileReader();

      reader.onloadend = async () => {
        const base64String = (reader.result as string).split(",")[1]; // remove data:... prefix
        const fileUri = FileSystem.cacheDirectory + "tts.mp3";

        await FileSystem.writeAsStringAsync(fileUri, base64String, {
          encoding: FileSystem.EncodingType.Base64,
        });

        lastText = text;
        lastFileUri = fileUri;

        const player = createAudioPlayer(fileUri);
        player.play();
      };

      reader.readAsDataURL(blob);
    }
  } catch (err) {
    console.error("TTS failed:", err);
  }
};
