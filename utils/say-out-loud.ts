import { createAudioPlayer } from "expo-audio";
import * as FileSystem from "expo-file-system";
import { Platform } from "react-native";
import { uri } from "./uri";

export const sayOutLoud = async (text: string) => {
  try {
    const response = await fetch(`${uri}/tts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    if (Platform.OS === "web") {
      const arrayBuffer = await response.arrayBuffer();
      const blob = new Blob([arrayBuffer], { type: "audio/mpeg" });
      const url = URL.createObjectURL(blob);
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

        const player = createAudioPlayer(fileUri);
        player.play();
      };

      reader.readAsDataURL(blob);
    }
  } catch (err) {
    console.error("TTS failed:", err);
  }
};
