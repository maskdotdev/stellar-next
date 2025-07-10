import SwappingAIIcons from "@/components/swapping-ai-icons";
import ReactIcon from "@/components/icons/react-icon";
import TauriIcon from "@/components/icons/tauri-icon";
import SQLiteIcon from "@/components/icons/sqlite-icon";

export default function TechnologySection() {
  return (
    <section>
      <div className="py-20 px-4 sm:px-6 bg-white/30 dark:bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="h2 text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-linear-to-b dark:from-teal-200 dark:to-gray-200 mb-4">
            Built on Modern Technology
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-400 mb-12">
            Stellar is powered by a cutting-edge tech stack for performance, security, and reliability
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ReactIcon className="w-12 h-12" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Frontend</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">React & TypeScript</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TauriIcon className="w-12 h-12" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Backend</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Tauri & Rust</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <SQLiteIcon className="w-12 h-12" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Database</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">SQLite Vec</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <SwappingAIIcons />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">AI Integration</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">OpenAI, Anthropic, Ollama</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 