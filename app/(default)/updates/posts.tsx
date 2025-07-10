"use client";

import { useState } from "react";

import PostsSidebar from "./posts-sidebar";
import PostsList from "./posts-list";
import { Categories } from "@/lib/getAllPosts";

export default function Posts({ posts }: { posts: Post[] }) {
  const [selectedCategory, setSelectedCategory] = useState<typeof Categories[number]>(
    Categories[0],
  );

  return (
    <section>
      <div className="pb-12 md:pb-20">
        <div className="px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="md:flex md:justify-between">
              {/* Sidebar */}
              <PostsSidebar
                categories={Categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />

              {/* Posts */}
              <PostsList posts={posts} selectedCategory={selectedCategory} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
