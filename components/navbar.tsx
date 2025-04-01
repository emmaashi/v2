"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sun, Moon, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"

interface NavbarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // after mounting, we can safely show the UI that depends on the theme
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="py-6 backdrop-blur-sm bg-white/70 dark:bg-black/70 sticky top-0 z-40">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex items-center justify-between md:justify-start">
          <div className="md:w-1/4">
            <button onClick={() => handleTabClick("about")} className="text-xl font-bold transition-colors">
              ES
            </button>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex justify-center w-2/4">
            <div className="inline-flex space-x-2 bg-zinc-100/30 dark:bg-zinc-800/30 rounded-lg p-1">
              <button
                onClick={() => handleTabClick("about")}
                className={`px-4 py-1.5 rounded-md transition-all ${
                  activeTab === "about"
                    ? "text-black dark:text-white font-medium bg-white dark:bg-zinc-700 shadow-sm border border-zinc-200 dark:border-zinc-600"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-white/50 dark:hover:bg-zinc-800/50"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleTabClick("projects")}
                className={`px-4 py-1.5 rounded-md transition-all ${
                  activeTab === "projects"
                    ? "text-black dark:text-white font-medium bg-white dark:bg-zinc-700 shadow-sm border border-zinc-200 dark:border-zinc-600"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-white/50 dark:hover:bg-zinc-800/50"
                }`}
              >
                Projects
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 md:w-1/4 md:justify-end">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              onClick={toggleTheme}
            >
              {mounted &&
                (resolvedTheme === "dark" ? (
                  <Sun className="h-5 w-5 text-zinc-400" />
                ) : (
                  <Moon className="h-5 w-5 text-zinc-600" />
                ))}
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-zinc-100 dark:hover:bg-zinc-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md mt-2">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col space-y-2 bg-zinc-100/30 dark:bg-zinc-800/30 rounded-lg p-1">
              <button
                onClick={() => handleTabClick("about")}
                className={`text-center py-2 px-3 rounded-md transition-all ${
                  activeTab === "about"
                    ? "text-black dark:text-white font-medium bg-white dark:bg-zinc-700 shadow-sm border border-zinc-200 dark:border-zinc-600"
                    : "text-zinc-600 dark:text-zinc-400 hover:bg-white/50 dark:hover:bg-zinc-800/50"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleTabClick("projects")}
                className={`text-center py-2 px-3 rounded-md transition-all ${
                  activeTab === "projects"
                    ? "text-black dark:text-white font-medium bg-white dark:bg-zinc-700 shadow-sm border border-zinc-200 dark:border-zinc-600"
                    : "text-zinc-600 dark:text-zinc-400 hover:bg-white/50 dark:hover:bg-zinc-800/50"
                }`}
              >
                Projects
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
