import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/jdTN4VDCXmSY8utE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay for readability (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center sm:py-28 lg:py-32">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
          Made-to-order with liquid nitrogen
        </span>
        <h1 className="font-extrabold tracking-tight text-white">
          <span className="block text-4xl leading-tight sm:text-5xl md:text-6xl">
            Ultra-smooth ice cream,
          </span>
          <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-purple-300 bg-clip-text text-transparent text-4xl leading-tight sm:text-5xl md:text-6xl">
            flash-frozen at -196°C
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
          Watch the magic unfold as swirling vapor meets rich cream. A futuristic scoop with a
          classic soul—crafted fresh before your eyes.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#menu"
            className="inline-flex items-center justify-center rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-black shadow-lg shadow-cyan-400/30 transition hover:translate-y-[-1px] hover:bg-cyan-300"
          >
            Explore Flavors
          </a>
          <a
            href="#story"
            className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition hover:border-white/30 hover:bg-white/10"
          >
            Our Process
          </a>
        </div>
      </div>
    </section>
  );
}
