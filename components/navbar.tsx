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
    <header className="py-4 backdrop-blur-sm bg-white/70 dark:bg-black/70 sticky top-0 z-40">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center justify-between md:justify-start">
          <div className="md:w-1/4">
            <button onClick={() => handleTabClick("about")} className="text-xl font-bold transition-colors">
              ES
            </button>
          </div>

          {/* desktop nav - centered */}
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

          <div className="flex items-center gap-2 md:w-1/4 md:justify-end">
            {/* mobile nav - inline */}
            {isMobileMenuOpen && (
              <div className="md:hidden flex space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleTabClick("about")}
                  className={`py-1 px-3 rounded-md text-sm ${
                    activeTab === "about"
                      ? "bg-zinc-800/80 text-white dark:bg-zinc-700 dark:text-white"
                      : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50"
                  }`}
                >
                  Home
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleTabClick("projects")}
                  className={`py-1 px-3 rounded-md text-sm ${
                    activeTab === "projects"
                      ? "bg-zinc-800/80 text-white dark:bg-zinc-700 dark:text-white"
                      : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50"
                  }`}
                >
                  Projects
                </Button>
              </div>
            )}

            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 h-9 w-9"
              onClick={toggleTheme}
            >
              {mounted &&
                (resolvedTheme === "dark" ? (
                  <Sun className="h-4 w-4 text-zinc-400" />
                ) : (
                  <Moon className="h-4 w-4 text-zinc-600" />
                ))}
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-zinc-100 dark:hover:bg-zinc-800 h-9 w-9"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
