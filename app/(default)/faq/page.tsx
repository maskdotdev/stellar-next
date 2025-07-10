export const metadata = {
  title: "Faq - Creative",
  description: "Page description",
};

import PageHeader from "@/components/page-header";
import Accordion from "@/components/accordion";
import Cta from "@/components/cta";

export default function Faq() {
  const faqs = [
    {
      "title": "What is Stellar and what does it do?",
      "text": "Stellar is a desktop application that combines document management, AI-powered features, and knowledge organization. It allows you to manage and chat with PDFs, create flashcards, use AI embedding for semantic search, and organize your documents in a comprehensive library system.",
      "active": true
    },
    {
      "title": "How do I set up AI providers in Stellar?",
      "text": "Stellar supports multiple AI providers including OpenAI, Ollama, and Anthropic. When you first launch the app, you'll be guided through a 3-step onboarding process that helps you configure your preferred AI provider.",
      "active": false
    },
    {
      "title": "What file formats does Stellar support?",
      "text": "Stellar primarily focuses on PDF document management and processing. You can add PDFs to your library, where they'll be processed for AI-powered features like semantic search and content extraction.",
      "active": false
    },
    {
      "title": "How does the flashcard system work?",
      "text": "Stellar includes a comprehensive flashcard system that allows you to create, organize, and review flashcards. You can create flashcard decks, add individual cards with questions and answers, and use the review interface for spaced repetition learning.",
      "active": false
    },
    {
      "title": "Does Stellar have a hotkeys or shortcuts?",
      "text": "Stellar features an extensive hotkey system that allows you to navigate and control the app efficiently. The app includes customizable keyboard shortcuts for common actions, a command palette for quick access to features, and context-sensitive hotkeys that adapt to your current workflow.",
      "active": false
    },
    {
      "title": "But does it have a dark mode?",
      "text": "Yes, Dark Mode, Light Mode, Nebula Theme, Stellar Theme, and more.",
      "active": false
    },
    {
      "title": "What is Focus Mode and how do I use it?",
      "text": "We are still working on this feature. But, Focus Mode is a distraction-free environment designed for deep work and concentrated study. It provides a clean interface minimal interface.",
      "active": false
    },
    {
      "title": "How do I manage my document library and categories?",
      "text": "Stellar's library system allows you to organize documents into categories, search through your collection, and manage your knowledge base efficiently. You can create custom categories, add documents to multiple categories, and use the search functionality to quickly find specific content.",
      "active": false
    }
  ] 

  return (
    <>
      <section>
        <div className="pt-32 pb-12 md:pt-44 md:pb-20">
          <div className="px-4 sm:px-6">
            <PageHeader
              className="mb-12 md:mb-20"
              title="Let's talk about software"
              description="Here we provide answers for the most common questions. From registering and accessing your account to payments and paid subscriptions."
            >
              Quick Answers
            </PageHeader>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-1">
                {faqs.map((faq, index) => (
                  <Accordion
                    key={index}
                    title={faq.title}
                    id={`faqs-${index}`}
                    active={faq.active}
                  >
                    {faq.text}
                  </Accordion>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Cta /> */}
    </>
  );
}
