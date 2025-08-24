import { uri } from "./uri";

export const generateAudioUrl = async (text: string) => {
  try {
    const response = await fetch(`${uri}/tts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    const arrayBuffer = await response.arrayBuffer();
    const blob = new Blob([arrayBuffer], { type: "audio/mpeg" });
    const url = URL.createObjectURL(blob);

    return url;
  } catch (err) {
    console.error("TTS failed:", err);
  }
};
