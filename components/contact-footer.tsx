import { Mail, Linkedin, Github } from "lucide-react"
import Link from "next/link"

export default function ContactFooter() {
  return (
    <footer className="py-6 mt-8 border-t border-zinc-200 dark:border-zinc-800">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center justify-center space-x-8">
            <Link
              href="mailto:emma.shi@uwaterloo.ca"
              className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
              <span className="hidden sm:inline">emma.shi@uwaterloo.ca</span>
            </Link>

            <Link
              href="https://www.linkedin.com/in/emma-shi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
              <span className="hidden sm:inline">LinkedIn</span>
            </Link>

            <Link
              href="https://github.com/emmaashi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
              <span className="hidden sm:inline">GitHub</span>
            </Link>
          </div>

          <p className="text-xs text-zinc-500 dark:text-zinc-500 text-center">© {new Date().getFullYear()} Emma Shi</p>
        </div>
      </div>
    </footer>
  )
}

