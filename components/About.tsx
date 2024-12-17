"use client"
"react/no-unescaped-entities"
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Github, Linkedin } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <p className="text-muted-foreground">
              Turning ideas into reality through code
            </p>
          </div>

          <Card>
            <CardContent className="pt-6 space-y-6">
              <p className="text-lg leading-relaxed">
                I&apos;m a passionate Full Stack Developer with expertise in the MERN stack.
                With a strong foundation in JavaScript and TypeScript, I create modern
                web applications that are both beautiful and functional.
              </p>
              <p className="text-lg leading-relaxed">
                My experience spans across web and mobile development, with a focus on
                React, React Native, Node.js, and MongoDB. I&apos;m dedicated to writing
                clean, maintainable code and creating exceptional user experiences.
              </p>

              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <Button variant="outline" asChild>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <FileText className="h-4 w-4" />
                    Resume
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}