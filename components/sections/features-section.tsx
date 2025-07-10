export default function FeaturesSection() {
  return (
    <section>
      <div className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="h2 text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-linear-to-b dark:from-teal-200 dark:to-gray-200 mb-4">
              Core Features
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-400">
              Everything you need to transform your learning experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Smart Document Interaction */}
            <div className="bg-white/70 dark:bg-gray-900/50 rounded-xl shadow-lg border border-teal-300/30 p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-teal-900 dark:text-teal-200 mb-2">📄 Smart Document Interaction</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Breathe life into your study materials with AI-powered processing</p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-500">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>State-of-the-art PDF processing with industry-leading accuracy</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Context-aware AI chat with your documents</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Handle complex academic papers with tables and images</span>
                </li>
              </ul>
            </div>

            {/* Intelligent Study Sessions */}
            <div className="bg-white/70 dark:bg-gray-900/50 rounded-xl shadow-lg border border-teal-300/30 p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-teal-900 dark:text-teal-200 mb-2">🧠 Intelligent Study Sessions</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Stay in the flow while Stellar handles the organization</p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-500">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Automatic session tracking and pattern detection</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Review your complete learning timeline</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Resume any session right where you left off</span>
                </li>
              </ul>
            </div>

            {/* Next-Generation Flashcards */}
            <div className="bg-white/70 dark:bg-gray-900/50 rounded-xl shadow-lg border border-teal-300/30 p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-teal-900 dark:text-teal-200 mb-2">🃏 Next-Generation Flashcards</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Master concepts and retain knowledge for the long term</p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-500">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>AI-powered flashcard creation from highlights</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Spaced Repetition System (SM-2 algorithm)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Optimal scheduling for maximum retention</span>
                </li>
              </ul>
            </div>

            {/* Personalized AI Assistant */}
            <div className="bg-white/70 dark:bg-gray-900/50 rounded-xl shadow-lg border border-teal-300/30 p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-teal-900 dark:text-teal-200 mb-2">🤖 Personalized AI Assistant</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Your personal tutor, available 24/7{" "}
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 ml-2">
                  Coming Soon
                </span>
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-500">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Smart recommendations based on study habits</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Identify knowledge gaps automatically</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Guided learning with personalized suggestions</span>
                </li>
              </ul>
            </div>

            {/* Modern Interface */}
            <div className="bg-white/70 dark:bg-gray-900/50 rounded-xl shadow-lg border border-teal-300/30 p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-teal-900 dark:text-teal-200 mb-2">✨ Modern, Focused Interface</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Beautiful workspace designed for deep work</p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-500">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Clean & modern UI built with React and Tailwind</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Customizable themes with light and dark modes</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Local-first & secure with SQLite database</span>
                </li>
              </ul>
            </div>

            {/* Security & Privacy */}
            <div className="bg-white/70 dark:bg-gray-900/50 rounded-xl shadow-lg border border-teal-300/30 p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-teal-900 dark:text-teal-200 mb-2">🔒 Privacy & Security</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Your data stays secure and under your control</p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-500">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>All data stored locally on your machine</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Robust SQLite database for reliability</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>You maintain full control of your information</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 