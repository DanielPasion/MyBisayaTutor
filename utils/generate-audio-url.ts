import * as FileSystem from "expo-file-system";
import { Platform } from "react-native";
import { uri } from "./uri";

export const generateAudioUrl = async (text: string) => {
  try {
    const response = await fetch(`${uri}/tts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    if (Platform.OS === "web") {
      const arrayBuffer = await response.arrayBuffer();
      const blob = new Blob([arrayBuffer], { type: "audio/mpeg" });
      return URL.createObjectURL(blob);
    } else {
      const blob = await response.blob();

      const fileUri = FileSystem.cacheDirectory + "tts.mp3";
      const base64String = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64 = (reader.result as string).split(",")[1];
          resolve(base64);
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });

      await FileSystem.writeAsStringAsync(fileUri, base64String, {
        encoding: FileSystem.EncodingType.Base64,
      });

      return fileUri;
    }
  } catch (err) {
    console.error("TTS failed:", err);
    return null;
  }
};
