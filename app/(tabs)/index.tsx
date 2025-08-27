// index.tsx
import Header from "@/components/Header";
import { colors } from "@/constants/Colors";
import { uri } from "@/utils/uri";
import { Button } from "@react-navigation/elements";
import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function Tutor() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I'm your Bisaya tutor. Ask me anything to start learning!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<ScrollView>(null);

  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const showSub = Keyboard.addListener("keyboardWillShow", () => {
      setKeyboardVisible(true);
    });
    const hideSub = Keyboard.addListener("keyboardWillHide", () => {
      setKeyboardVisible(false);
    });

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch(`${uri}/openaitutor`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      const data = await res.json();
      const fullMessage = data.text || "Sorry, I couldn't generate a response.";

      // Add a placeholder assistant message
      const assistantMessage: Message = { role: "assistant", content: "" };
      setMessages((prev) => [...prev, assistantMessage]);

      // Animate letter by letter
      let idx = 0;
      const interval = setInterval(() => {
        idx++;
        setMessages((prev) => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1] = {
            ...newMessages[newMessages.length - 1],
            content: fullMessage.slice(0, idx),
          };
          return newMessages;
        });
        if (idx >= fullMessage.length) clearInterval(interval);
      }, 25); // adjust speed (ms per character)
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Error: Could not get a response." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{
        flex: 1,
        backgroundColor: colors.cream["500"],
      }}
    >
      <Header />

      <ScrollView
        ref={scrollRef}
        contentContainerStyle={{ padding: 20, paddingBottom: 40 }}
      >
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            paddingVertical: 20,
            backgroundColor: colors.cream["500"],
          }}
        >
          <Image
            source={require("@/assets/images/logo-transparent.png")}
            style={{
              width: 100,
              height: 100,
              borderRadius: 20,
              marginBottom: 10,
            }}
          />
          <Text
            style={{
              fontSize: 28,
              fontWeight: "700",
              color: colors.orange["500"],
            }}
          >
            My Bisaya Tutor
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: colors.green["500"],
              marginTop: 4,
            }}
          >
            Learn Bisaya the smart way!
          </Text>
        </View>

        {messages.map((msg, idx) => (
          <View
            key={idx}
            style={{
              flexDirection: msg.role === "user" ? "row-reverse" : "row",
              alignItems: "flex-start",
              marginBottom: 10,
              paddingHorizontal: 10,
            }}
          >
            {msg.role === "assistant" && (
              <Image
                source={require("@/assets/images/logo-transparent.png")}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 20,
                  marginRight: 8,
                  marginTop: 15,
                }}
              />
            )}

            <View
              style={{
                backgroundColor:
                  msg.role === "user"
                    ? colors.green["500"]
                    : colors.cream["100"],
                paddingVertical: 10,
                paddingHorizontal: 14,
                borderRadius: 16,
                maxWidth: "75%",
              }}
            >
              <Text
                style={{
                  color:
                    msg.role === "user"
                      ? colors.white["500"]
                      : colors.green["900"],
                  fontSize: 16,
                }}
              >
                {msg.content}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View
        style={{
          flexDirection: "row",
          padding: 20,
          gap: 10,
          marginBottom: keyboardVisible || Platform.OS !== "ios" ? 0 : 75,
        }}
      >
        <TextInput
          style={{
            flex: 1,
            backgroundColor: colors.white["500"],
            borderWidth: 1,
            borderColor: colors.green["500"],
            borderRadius: 12,
            paddingHorizontal: 12,
            paddingVertical: 10,
            fontSize: 16,
          }}
          placeholder="Type a message..."
          placeholderTextColor={colors.green["500"]}
          value={input}
          onChangeText={setInput}
          onSubmitEditing={sendMessage}
        />
        <Button
          style={{
            backgroundColor: colors.green["500"],
            borderRadius: 12,
            paddingHorizontal: 14,
            paddingVertical: 10,
            opacity: isLoading ? 0.6 : 1,
          }}
          onPress={sendMessage}
          disabled={isLoading || !input.trim()}
          color={colors.white["500"]}
        >
          {isLoading ? "..." : "Send"}
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}
