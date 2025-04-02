"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([])
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"))
            if (!visibleProjects.includes(index)) {
              setVisibleProjects((prev) => [...prev, index])
            }
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    )

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [visibleProjects])

  const projects = [
    {
      title: "Compile",
      description:
        "A predictive model trained to analyze historical data and forecast cancer progression, designed to aid in-home hospice care by easing the caregiving process and improving patient support.",
      image: "/compile.png",
      technologies: ["Python", "Flask", "React", "Typescript", "Numpy", "Pandas", "Scikit-learn", "Docker"],
      liveUrl: "https://github.com/emmaashi/compile",
      githubUrl: "https://github.com/emmaashi/compile",
    },
    {
      title: "DAG",
      description:
        "A decentralized data aggregation platform for machine learning, built using Next.js, MongoDB, Cohere, Tailwind CSS, Flow, React, Syro, and Solana. This project won 'Best use of Solana' and 'Best use of Flow' at Hack the North 2023.",
      image: "/dag.png",
      technologies: ["Next.js", "MongoDB", "Cohere", "Tailwind CSS", "Flow", "React", "Syro", "Solana"],
      liveUrl: "https://devpost.com/software/dag.com",
      githubUrl: "https://devpost.com/software/dag.com",
    },
    {
      title: "Optimed",
      description:
        "Aimed at mitigating patient wait times and extending healthcare support to marginalized communities in remote areas.",
      image: "/optimed.png",
      technologies: ["HTML", "Tailwind CSS", "JavaScript"],
      liveUrl: "https://optimed.falsebrb.repl.co/",
      githubUrl: "https://optimed.falsebrb.repl.co/",
    },
    {
      title: "Nightlight",
      description:
        "A safety-focused app addressing the security of women+ when taking public transport at night, inspired by fears of using systems like the TTC alone.",
      image: "/nightlight.png",
      technologies: ["HTML", "Tailwind CSS", "JavaScript", "Figma"],
      liveUrl: "https://devpost.com/software/nightlight-64g8wc",
      githubUrl: "https://devpost.com/software/nightlight-64g8wc",
    },
    {
      title: "FireCAST",
      description:
        "An AI-powered tool to forecast fire risks in geographical regions, empowering communities with actionable insights for wildfire prevention.",
      image: "/firecast.png",
      technologies: ["HTML", "Tailwind CSS", "JavaScript", "Figma"],
      liveUrl: "https://devpost.com/software/firecast",
      githubUrl: "https://devpost.com/software/firecast",
    },
    {
      title: "Amazing Labyrinth",
      description:
        "A strategic maze game where players navigate through shifting pathways to find treasures, featuring shortest path calculations and animations.",
      image: "/labyrinth.png",
      technologies: ["Java", "Figma"],
      liveUrl: "https://github.com/emmaashi/amazing-labyrinth",
      githubUrl: "https://github.com/emmaashi/amazing-labyrinth",
    },
    {
      title: "Settlemize",
      description:
        "A platform designed to optimize the settlement process for immigrants coming to Canada through various user-friendly tools.",
      image: "/settlemize.png",
      technologies: ["Figma"],
      liveUrl: "https://devpost.com/software/settlemize-byg3pn",
      githubUrl: "https://devpost.com/software/settlemize-byg3pn",
    },
    {
      title: "Divvy",
      description:
        "A project management tool for streamlining task distribution within a team, particularly for school group projects. Features include task management, performance tracking, and project planning.",
      image: "/divvy.png",
      technologies: ["Java", "SQL", "Figma"],
      liveUrl: "https://github.com/emmaashi/divvy",
      githubUrl: "https://github.com/emmaashi/divvy",
    },
    {
      title: "Newsflix",
      description:
        "A platform designed to remove bias from media, ensuring young readers have access to holistic and reliable information on world issues.",
      image: "/Newsflix.png",
      technologies: ["React", "Python", "Tailwind CSS", "Postman", "Figma"],
      liveUrl: "https://devpost.com/software/newsflix",
      githubUrl: "https://devpost.com/software/newsflix",
    },
    {
      title: "Crime Map Canada",
      description:
        "A data-mining project leveraging Ontario provincial website data to evaluate crime severity across various Canadian cities and provinces.",
      image: "/crime.png",
      technologies: ["Java", "Figma"],
      liveUrl: "https://github.com/emmaashi/crime-map-canada",
      githubUrl: "https://github.com/emmaashi/crime-map-canada",
    },
    {
      title: "Traura.Ai",
      description:
        "An AI-powered tool that gamifies conversations using speech recognition and semantic similarity models to produce an 'aura' score.",
      image: "/traura.png",
      technologies: ["React", "Python", "Tailwind CSS", "Figma"],
      liveUrl: "https://devpost.com/software/traura",
      githubUrl: "https://devpost.com/software/traura",
    },
  ]

  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>

      <div className="space-y-6">
        {projects.map((project, index) => {
          const setProjectRef = (el: HTMLDivElement | null) => {
            projectRefs.current[index] = el
          }

          return (
            <div key={index} ref={setProjectRef} data-index={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={visibleProjects.includes(index) ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                  ease: "easeOut",
                }}
              >
                <Card className="overflow-hidden flex flex-col md:flex-row h-full bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-sm hover:shadow-md group">
                  <div className="w-full md:w-1/3 h-48 md:h-auto bg-zinc-100 dark:bg-zinc-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-purple-400/0 group-hover:bg-purple-400/10 dark:group-hover:bg-purple-500/20 transition-colors duration-300 z-10"></div>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={300}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                    />
                  </div>
                  <div className="flex flex-col w-full md:w-2/3">
                    <CardHeader>
                      <CardTitle className="text-black dark:text-white">{project.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription className="text-base text-zinc-600 dark:text-zinc-400">
                        {project.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="flex gap-4">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-zinc-300 text-zinc-700 hover:bg-zinc-100 hover:text-black dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    </CardFooter>
                  </div>
                </Card>
              </motion.div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

