"use client"
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Image from 'next/image'

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
    title: 'AI-Powered Chat Application',
    description: 'A real-time chat platform with AI-driven features including sentiment analysis, language translation, and smart responses. Built with modern web technologies and WebSocket for real-time communication.',
    tech: ['Next.js', 'Socket.io', 'OpenAI API', 'MongoDB', 'TailwindCSS'],
    image: '/chat-app.jpg',
    github: 'https://github.com/Marco6792/chat-ai',
    demo: 'https://chat-ai-demo.vercel.app'
  },
  {
    title: 'Smart Home Dashboard',
    description: 'A comprehensive IoT dashboard for monitoring and controlling smart home devices. Features real-time data visualization, device management, and automated scheduling.',
    tech: ['React', 'TypeScript', 'Node.js', 'MQTT', 'Chart.js'],
    image: '/smart-home.jpg',
    github: 'https://github.com/Marco6792/smart-home',
    demo: 'https://smart-home-dashboard.vercel.app'
  },
  {
    title: 'Restaurant Management System',
    description: 'Full-stack application for restaurant management including order processing, inventory tracking, and analytics. Features real-time order updates and staff management.',
    tech: ['React', 'Express.js', 'PostgreSQL', 'Redis', 'Docker'],
    image: '/resturant-app.jpg',
    github: 'https://github.com/Marco6792/restaurant-system',
    demo: 'https://restaurant-system-demo.vercel.app'
  },
  {
    title: 'Financial Portfolio Tracker',
    description: 'A sophisticated investment portfolio tracking application with real-time market data, portfolio analysis, and predictive analytics using machine learning.',
    tech: ['Next.js', 'Python', 'FastAPI', 'TensorFlow', 'AWS'],
    image: '/finance-app.jpg',
    github: 'https://github.com/Marco6792/finance-tracker',
    demo: 'https://finance-portfolio-demo.vercel.app'
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
              <Card className="h-full flex flex-col overflow-hidden">
                <div className="relative w-full h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
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