"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Experiences from "@/components/experiences"
import Projects from "@/components/projects"
import CursorGlow from "@/components/cursor-glow"
import ContactFooter from "@/components/contact-footer"

export default function Home() {
  const [activeTab, setActiveTab] = useState("about")

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-gradient-to-br from-purple-200/30 via-purple-100/20 to-transparent dark:from-purple-500/10 dark:via-purple-300/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-gradient-to-tl from-blue-200/30 via-blue-100/20 to-transparent dark:from-blue-500/10 dark:via-blue-300/5 rounded-full blur-3xl"></div>
        <div className="absolute top-[30%] right-[20%] w-[40%] h-[30%] bg-gradient-to-l from-purple-100/0 via-purple-100/10 to-transparent dark:from-purple-100/0 dark:via-purple-200/10 rounded-full blur-2xl transform rotate-12"></div>
        <div className="absolute top-[60%] left-[10%] w-[30%] h-[20%] bg-gradient-to-r from-blue-100/0 via-blue-100/10 to-transparent dark:from-blue-100/0 dark:via-white/5 rounded-full blur-2xl transform -rotate-12"></div>
      </div>

      <CursorGlow />

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="container mx-auto px-6 py-8 max-w-4xl">
        {activeTab === "about" && (
          <>
            <Hero/>
            <Experiences />
          </>
        )}

        {activeTab === "projects" && <Projects />}
      </main>

      <ContactFooter />
    </div>
  )
}

