"use client";

import { useState, useEffect } from "react";
import { 
  OpenAIIcon, 
  AnthropicIcon, 
  GeminiIcon, 
  GrokIcon, 
  OllamaIcon, 
  AzureIcon 
} from "@/components/icons/ai-icons";

const AI_LOGOS = [
  { name: "OpenAI", component: OpenAIIcon },
  { name: "Anthropic", component: AnthropicIcon },
  { name: "Gemini", component: GeminiIcon },
  { name: "Grok", component: GrokIcon },
  { name: "Ollama", component: OllamaIcon },
  { name: "Azure", component: AzureIcon },
];

export default function SwappingAIIcons() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % AI_LOGOS.length);
    }, 2000); // Change icon every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-12 h-12 flex items-center justify-center">
      {AI_LOGOS.map((logo, index) => {
        const IconComponent = logo.component;
        return (
          <div
            key={logo.name}
            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
              index === currentIndex
                ? "opacity-100 transform scale-100"
                : "opacity-0 transform scale-95"
            }`}
          >
            <IconComponent className="w-12 h-12" />
          </div>
        );
      })}
    </div>
  );
} 