import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="get-started" className="relative py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(236,72,153,0.2),transparent_70%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-white p-8 sm:p-12 shadow-sm">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/20 to-amber-400/20 blur-3xl" />
          </div>

          <div className="relative z-10 grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900"
              >
                Ready to experience effortless planning?
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="mt-3 text-slate-600"
              >
                Start your free trial and chat with your AI advisor in seconds. No credit card required.
              </motion.p>
            </div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-slate-900 placeholder:text-slate-400 shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-white shadow hover:shadow-md transition-shadow"
              >
                Get early access
              </button>
            </motion.form>
          </div>

          <div className="relative z-10 mt-8 text-center text-xs text-slate-500">
            By continuing you agree to our Terms and Privacy Policy.
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Aura Advisor. All rights reserved.
        </p>
      </div>
    </section>
  );
}
