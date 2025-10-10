import React from 'react';

function About() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <header className="py-20 text-center">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-600 font-orbitron">
          WILD RACE
        </h1>
        <p className="mt-4 text-xl text-gray-400 font-space-mono">
          The ultimate intergalactic rocket racing experience.
        </p>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4 font-audiowide">
              Game Overview
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Step into the cockpit of a high-speed, customizable rocket and
              compete in the most intense races across the cosmos. Developed in
              Unity, <strong className="text-white">Wild Race </strong>
              pushes the boundaries of zero-gravity physics, giving you
              unparalleled control as you navigate asteroid fields, dodge
              celestial debris, and outpace rivals.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              With a dynamic camera that captures every drift and boost, you&aposll
              feel the adrenaline of deep-space racing like never before.
              Whether you&aposre battling for first place in a high-stakes
              championship or just free-flying through nebulae, the universe is
              your racetrack.
            </p>
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-8 font-audiowide">
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-cyan-400 transition-colors duration-300">
              <h3 className="text-2xl font-semibold text-white mb-2 font-kanit">
                Physics-Based Gameplay
              </h3>
              <p className="text-gray-400">
                Experience realistic zero-gravity physics, demanding precision
                and skill to master each turn, drift, and speed boost.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-cyan-400 transition-colors duration-300">
              <h3 className="text-2xl font-semibold text-white mb-2 font-kanit">
                Stunning Environments
              </h3>
              <p className="text-gray-400">
                Race through beautifully rendered planetary rings, glowing
                nebulae, and dangerous asteroid belts, all created in Unity.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-cyan-400 transition-colors duration-300">
              <h3 className="text-2xl font-semibold text-white mb-2 font-kanit">
                Multiplayer Mayhem
              </h3>
              <p className="text-gray-400">
                Challenge your friends or compete against players worldwide in
                high-octane multiplayer matches.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4 font-audiowide">
            Built with Unity
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our team utilized the power and versatility of the Unity engine to
            create this immersive interstellar world. From the responsive rocket
            controls to the breathtaking cosmic visuals, Unity allowed us to
            deliver a polished and seamless gaming experience.
          </p>
        </section>
      </main>
    </div>
  );
}

export default About;
