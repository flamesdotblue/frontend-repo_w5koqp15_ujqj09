import React from 'react';
import { Snowflake, Sparkles, Thermometer, Star } from 'lucide-react';

const features = [
  {
    icon: Snowflake,
    title: 'Flash Frozen Fresh',
    desc: 'Liquid nitrogen instantly freezes micro-crystals for a silky, dreamlike texture.',
  },
  {
    icon: Thermometer,
    title: 'Ultra-Cold Precision',
    desc: 'We chill to -196°C, preserving flavor while creating the smoothest possible scoop.',
  },
  {
    icon: Sparkles,
    title: 'Theater In Every Scoop',
    desc: 'Billowing vapor and a sprinkle of science—ice cream as an immersive experience.',
  },
  {
    icon: Star,
    title: 'Made For You',
    desc: 'Custom flavors, mix-ins, and finishes—crafted on the spot to your taste.',
  },
];

export default function Features() {
  return (
    <section id="menu" className="relative bg-gradient-to-b from-black to-gray-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Liquid Nitrogen?</h2>
          <p className="mt-4 text-white/70">
            Science meets dessert. Our method locks in flavor, elevates texture, and turns every order into a mini show.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/20 text-cyan-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-2xl transition duration-300 group-hover:scale-125" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
