import React from 'react';

export default function FooterCTA() {
  return (
    <footer className="relative bg-gradient-to-t from-black to-gray-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold sm:text-3xl">
            Ready for a scoop from the future?
          </h3>
          <p className="mt-3 max-w-xl text-white/70">
            Visit us in-store for the full nitrogen show or order catering for your next event.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-black shadow-lg shadow-cyan-400/30 transition hover:translate-y-[-1px] hover:bg-cyan-300"
            >
              Book Catering
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition hover:border-white/30 hover:bg-white/10"
            >
              Store Locations
            </a>
          </div>
          <p className="mt-10 text-xs text-white/50">© {new Date().getFullYear()} Chromo Scoop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
