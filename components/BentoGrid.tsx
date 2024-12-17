"use client"
"react/no-unescaped-entities"
import { motion } from 'framer-motion'
import { Code2, Briefcase, Star, Rocket, Zap, Users } from 'lucide-react'

const items = [
  {
    title: "Frontend Mastery",
    description: "Creating seamless user experiences with modern technologies",
    icon: <Code2 className="w-5 h-5" />,
    delay: 0.2,
    className: "md:col-span-2 md:row-span-2",
    gradient: "from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10"
  },
  {
    title: "Experience",
    description: "4+ years crafting digital solutions",
    icon: <Briefcase className="w-5 h-5" />,
    delay: 0.3,
    className: "md:col-span-1 md:row-span-1",
    gradient: "from-green-500/20 to-emerald-500/20 dark:from-green-500/10 dark:to-emerald-500/10"
  },
  {
    title: "Projects",
    description: "2+ successful projects delivered",
    icon: <Star className="w-5 h-5" />,
    delay: 0.4,
    className: "md:col-span-1 md:row-span-1",
    gradient: "from-orange-500/20 to-yellow-500/20 dark:from-orange-500/10 dark:to-yellow-500/10"
  },
  {
    title: "Innovation",
    description: "Pushing the boundaries of what's possible",
    icon: <Rocket className="w-5 h-5" />,
    delay: 0.5,
    className: "md:col-span-1 md:row-span-1",
    gradient: "from-pink-500/20 to-rose-500/20 dark:from-pink-500/10 dark:to-rose-500/10"
  },
  {
    title: "Performance",
    description: "Optimized for speed and efficiency",
    icon: <Zap className="w-5 h-5" />,
    delay: 0.6,
    className: "md:col-span-1 md:row-span-1",
    gradient: "from-violet-500/20 to-indigo-500/20 dark:from-violet-500/10 dark:to-indigo-500/10"
  },
  {
    title: "Collaboration",
    description: "Working together to achieve greatness",
    icon: <Users className="w-5 h-5" />,
    delay: 0.7,
    className: "md:col-span-2 md:row-span-1",
    gradient: "from-cyan-500/20 to-teal-500/20 dark:from-cyan-500/10 dark:to-teal-500/10"
  }
]

export function BentoGrid() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-950 dark:to-slate-900" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400/30 dark:bg-purple-900/30 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-[128px] animate-blob" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/30 dark:bg-yellow-900/30 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-[128px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-400/30 dark:bg-pink-900/30 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-[128px] animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white">
            What I Do
          </h2>
          <p className="mt-4 text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            Combining creativity with technical expertise to deliver exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.delay }}
              className={`group relative overflow-hidden rounded-3xl backdrop-blur-lg bg-white/30 dark:bg-slate-900/30 border border-white/30 dark:border-slate-700/30 p-8 hover:shadow-lg transition-shadow duration-500 ${item.className}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-20 ${item.gradient}" />
              
              <div className="relative z-10">
                <div className="mb-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl backdrop-blur-sm bg-white/50 dark:bg-slate-700/50 text-slate-900 dark:text-white border border-white/30 dark:border-slate-600/30 shadow-lg">
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  {item.description}
                </p>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent dark:via-slate-100/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}
