import React from 'react';
import { Snowflake, Sparkles, Thermometer } from 'lucide-react';

const steps = [
  {
    icon: Sparkles,
    title: 'Blend',
    desc: 'Start with a rich base and your favorite flavors, crafted to order.',
  },
  {
    icon: Thermometer,
    title: 'Freeze',
    desc: 'A burst of liquid nitrogen flash-freezes the mixture into ultra-fine crystals.',
  },
  {
    icon: Snowflake,
    title: 'Finish',
    desc: 'We fold in toppings and serve a perfectly smooth scoop—vapor and all.',
  },
];

export default function Process() {
  return (
    <section id="story" className="relative bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How It Works</h2>
          <p className="mt-4 text-white/70">
            From fresh base to frosty cloud in seconds—our method is as mesmerizing as it is delicious.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }, idx) => (
            <div key={title} className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/20 text-cyan-300">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-mono text-sm text-white/60">Step {idx + 1}</span>
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
