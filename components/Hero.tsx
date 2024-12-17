"use client"

"react/no-unescaped-entities"
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-slate-50/50 dark:bg-slate-950/50" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Blur Elements */}
      <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-40 -right-20 w-72 h-72 bg-purple-200 dark:bg-purple-900/30 rounded-full blur-3xl opacity-20" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left space-y-6"
          >
            <h1 className="text-4xl sm:text-2xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300">
              Hi, I&apos;m Marco
              <div className="h-[40px] md:h-[24px] lg:h-[48px]">
                <span className="block text-blue-600 dark:text-blue-400">
                  <TypeAnimation
                    sequence={[
                      'A Full Stack Developer',
                      1000,
                      'A Mobile App Developer',
                      1000,
                      'A Designer',
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    style={{ display: 'inline-block' }}
                  />
                </span>
              </div>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="pt-[2rem] text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0"
            >
              A passionate full-stack developer crafting beautiful and functional web experiences. 
              Let&apos;s build something amazing together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 font-medium transition-colors duration-200"
              >
                View Projects
              </a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative order-first lg:order-last"
          >
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 blur-2xl opacity-20 animate-pulse" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-100 dark:border-slate-800">
                <Image
                  src="/profile.png"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}