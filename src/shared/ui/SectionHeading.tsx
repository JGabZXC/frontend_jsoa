import { motion } from 'framer-motion'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  light?: boolean
}

export function SectionHeading({ title, subtitle, light = false }: SectionHeadingProps) {
  return (
    <div className='text-center mb-16 px-4'>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter ${
          light ? 'text-[#F2F2F2]' : 'text-[#B30000]'
        }`}
      >
        {title}
      </motion.h2>
      {subtitle ? (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`max-w-2xl mx-auto text-lg font-medium ${
            light ? 'text-[#A6A6A6]' : 'text-[#1A1A1A]/70'
          }`}
        >
          {subtitle}
        </motion.p>
      ) : null}
      <div className='w-24 h-2 bg-[#C9A46A] mx-auto mt-6 rounded-full' />
    </div>
  )
}

