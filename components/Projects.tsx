"use client"
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack MERN application with authentication, payment integration, and real-time inventory management.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: '/project1.jpg',
    github: 'https://github.com/Marco6792/ecommerce',
    demo: 'https://demo.vercel.store'
  },
  {
    title: 'Mobile Fitness App',
    description: 'Cross-platform mobile app built with React Native, featuring workout tracking and social features.',
    tech: ['React Native', 'TypeScript', 'Redux'],
    image: '/project2.jpg',
    github: 'https://github.com/yourusername/project2',
    demo: 'https://project2-demo.com'
  },
  {
    title: 'AI Task Manager',
    description: 'Modern web application using Next.js, featuring AI-powered task prioritization and scheduling.',
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    image: '/project3.jpg',
    github: 'https://github.com/yourusername/project3',
    demo: 'https://project3-demo.com'
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}