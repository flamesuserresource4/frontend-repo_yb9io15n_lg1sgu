import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient aura */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,0.35),transparent_70%)] blur-2xl" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,rgba(236,72,153,0.25),transparent_70%)] blur-2xl" />
        <div className="absolute -bottom-10 right-1/4 h-96 w-96 rounded-full bg-[radial-gradient(closest-side,rgba(251,191,36,0.2),transparent_70%)] blur-2xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/60 px-3 py-1 text-xs text-slate-700 shadow-sm backdrop-blur"
            >
              <Sparkles className="h-4 w-4 text-indigo-500" />
              Meet your AI-powered travel & lifestyle advisor
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7, ease: 'easeOut' }}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900"
            >
              Plan smarter with an intelligent voice-first assistant
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
              className="mt-5 text-lg leading-relaxed text-slate-600"
            >
              Get instant recommendations, book with confidence, and explore ideas through a beautiful, interactive experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#get-started"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-white shadow hover:shadow-md transition-shadow"
              >
                Try the demo
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-slate-900 hover:bg-slate-50"
              >
                Explore features
              </a>
            </motion.div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] rounded-2xl border border-black/5 bg-white/60 shadow-inner backdrop-blur">
            <Spline
              scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
