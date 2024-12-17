import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { BentoGrid } from '@/components/BentoGrid'

import { Projects } from '@/components/Projects'
import { Contact } from '@/components/Contact'
import { Skills } from '@/components/Skills'

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Hero />
      <BentoGrid />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}