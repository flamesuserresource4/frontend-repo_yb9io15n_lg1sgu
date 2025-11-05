import { motion } from 'framer-motion';
import { Headphones, Wand2, Shield, MapPinned } from 'lucide-react';

const features = [
  {
    icon: Headphones,
    title: 'Conversational & Voice-First',
    desc: 'Talk naturally to your advisor. Get instant answers, refined suggestions, and seamless follow-ups.',
  },
  {
    icon: Wand2,
    title: 'Personalized Itineraries',
    desc: 'From weekend getaways to long adventures, receive curated routes that match your style and budget.',
  },
  {
    icon: MapPinned,
    title: 'Local Insights',
    desc: 'Discover hidden gems and trending spots powered by real-time data and community favorites.',
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    desc: 'Your preferences and history stay safe with enterprise-grade security and privacy by design.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(79,70,229,0.15),transparent_70%)] blur-2xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(244,63,94,0.12),transparent_70%)] blur-2xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Powerful features, delightful experience
          </h2>
          <p className="mt-4 text-slate-600">
            Everything you need to plan, decide and book — all in one place.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-tr from-indigo-500/10 via-fuchsia-500/10 to-amber-400/10 blur-2xl" />
              <div className="relative z-10">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 text-white shadow">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
