"use client"

import { motion } from 'framer-motion'
import { 
  FaReact, FaNodeJs, FaDatabase, FaGitAlt,
  FaHtml5, FaCss3Alt, FaJs, FaDocker 
} from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiNextdotjs } from 'react-icons/si'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { TbBrandReactNative } from 'react-icons/tb'

const skills = [
  
  { name: 'React', icon: FaReact, color: 'text-blue-500' },
  { name: 'React Native', icon: TbBrandReactNative, color: 'text-blue-500' },

  { name: 'Next.js', icon: SiNextdotjs, color: 'text-slate-900 dark:text-slate-100' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600' },
  { name: 'HTML5', icon: FaHtml5, color: 'text-orange-600' },
  { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
  { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500' },
  { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-500' },
  { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
  { name: 'Docker', icon: FaDocker, color: 'text-blue-600' },
  { name: 'MongoDB', icon: FaDatabase, color: 'text-green-500' },
]

const upcomingProjects = [
  {
    name: "E-commerce Platform",
    description: "Full-stack e-commerce platform with real-time inventory management",
    status: "In Progress",
    completion: 60
  },
  {
    name: "AI Chat Application",
    description: "Real-time chat application with AI-powered responses",
    status: "Planning",
    completion: 20
  }
]


export function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Here are the technologies I work with on a daily basis to bring ideas to life
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <div className="relative space-y-4">
                <skill.icon className={`w-12 h-12 ${skill.color} mx-auto transition-transform group-hover:scale-110`} />
                <h3 className="text-center font-medium">{skill.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h3 className="text-2xl font-bold text-center text-slate-900 dark:text-slate-100">Upcoming Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-0 bg-white/20 dark:bg-slate-900/20 backdrop-blur-xl">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center text-lg">
                      <span className="text-slate-900 dark:text-slate-100">{project.name}</span>
                      <span className="text-sm font-normal text-slate-500 dark:text-slate-400">
                        {project.status}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {project.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-900 dark:text-slate-100">Progress</span>
                        <span className="text-slate-500 dark:text-slate-400">{project.completion}%</span>
                      </div>
                      <div className="h-2 relative bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${project.completion}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
