import React from "react";

export default function AboutCheckworthyAI() {
  return (
    <section
      className="relative bg-gradient-to-br from-black via-zinc-900 to-purple-900 py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 min-h-screen overflow-hidden"
      aria-labelledby="about-section-title"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        {/* Section Title & Mission */}
        <div className="text-center md:text-left">
          <h2
            id="about-section-title"
            className="text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-[0_2px_16px_rgba(168,85,247,0.5)]"
          >
            About CheckworthyAI
          </h2>
          <p className="text-3xl text-gray-200 font-semibold mb-3 max-w-2xl mx-auto md:mx-0">
            Monitoring, evaluating, and building trust in AI.
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mb-8 mx-auto md:mx-0">
            At CheckworthyAI, we believe trust is the foundation of responsible
            AI. Our platform empowers businesses, researchers, and developers to
            confidently build and deploy AI agents that are not just
            powerful—but also safe, ethical, and transparent.
            <br className="hidden md:block" />
            We understand the risks and unpredictability that come with large
            language models. That’s why we built CheckworthyAI: a real-time
            observability and evaluation system purpose-built for LLM-based
            products.
          </p>
        </div>

        {/* Our Story & Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
              Our Story
            </h3>
            <p className="text-lg text-gray-300 mb-3">
              The rise of AI brought breakthrough potential—but also
              uncertainty, hallucinations, bias, and a lack of transparency. As
              AI rapidly enters mission-critical systems, we saw a missing
              piece: continuous, automated oversight of how these models behave
              in the real world.
            </p>
            <p className="text-lg text-gray-400">
              Founded by engineers and researchers from the AI, security, and
              infrastructure worlds, CheckworthyAI was born to bring visibility,
              accountability, and trust to LLM operations.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
              alt="Team working together in a modern office"
              className="rounded-3xl shadow-2xl w-full max-w-md object-cover aspect-square lg:aspect-auto lg:max-h-[340px] transition-transform duration-500 hover:scale-105 ring-2 ring-purple-500/30"
              loading="lazy"
            />
          </div>
        </div>

        {/* What We Do */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 tracking-tight">
            What We Do
          </h3>
          <ul className="space-y-8">
            <li className="flex items-start gap-4 group transition-all duration-300 hover:scale-[1.02]">
              <span className="flex-shrink-0 mt-1 text-3xl text-purple-400">
                🟢
              </span>
              <div>
                <h4 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                  Live Monitoring Dashboards
                </h4>
                <p className="text-gray-300 mt-1 text-lg">
                  Track real-time performance, detect anomalies, and receive
                  intelligent alerts—before small issues become major incidents.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4 group transition-all duration-300 hover:scale-[1.02]">
              <span className="flex-shrink-0 mt-1 text-3xl text-purple-400">
                🧠
              </span>
              <div>
                <h4 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                  Automated Evaluation & Scoring
                </h4>
                <p className="text-gray-300 mt-1 text-lg">
                  Instantly assess accuracy, detect hallucinations, and
                  benchmark your agents against industry standards.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4 group transition-all duration-300 hover:scale-[1.02]">
              <span className="flex-shrink-0 mt-1 text-3xl text-purple-400">
                🔒
              </span>
              <div>
                <h4 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                  Transparent Audit Trails
                </h4>
                <p className="text-gray-300 mt-1 text-lg">
                  Every agent action is fully logged for easy audits. Ensure
                  compliance and build trust with clear, reviewable records.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Why Different */}
        <div>
          <h3 className="text-4xl font-extrabold text-white mb-12 tracking-tight text-center md:text-left drop-shadow-[0_2px_16px_rgba(168,85,247,0.3)]">
            Why CheckworthyAI is Different
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-2 text-slate-700">
            <li className="flex items-center gap-2">
              <span className="text-green-500 text-lg">✅</span>Real-time
              Observability
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500 text-lg">✅</span>Agent-Aware
              Evaluation
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500 text-lg">✅</span>Designed for
              Developers, Auditors, and Product Teams
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500 text-lg">✅</span>Secure &
              Scalable Infrastructure
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500 text-lg">✅</span>Fine-grained
              Scoring for Credibility, Risk, and Safety
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500 text-lg">✅</span>Not just a red
              flag system—we explain why
            </li>
          </ul>
        </div>

        {/* Values Grid */}
        <div>
          <h3 className="text-4xl font-extrabold text-white mb-12 tracking-tight text-center md:text-left drop-shadow-[0_2px_16px_rgba(168,85,247,0.3)]">
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Ownership */}
            <div
              className="bg-black/70 rounded-3xl shadow-2xl ring-1 ring-white/10 p-8 hover:ring-2 hover:ring-purple-400/40 hover:scale-[1.02] transition-all duration-300 flex flex-col gap-2 motion-safe:animate-fadeInUp"
              tabIndex={0}
              aria-label="Ownership: We take full responsibility for what we build. Quality, impact, and integrity matter."
            >
              <h4 className="text-2xl font-bold mb-2 text-white tracking-tight">
                Ownership
              </h4>
              <p className="text-lg text-gray-200">
                We take full responsibility for what we build.{" "}
                <span className="font-semibold text-white">
                  Quality, impact, and integrity matter.
                </span>
              </p>
            </div>
            {/* Craft */}
            <div
              className="bg-black/70 rounded-3xl shadow-2xl ring-1 ring-white/10 p-8 hover:ring-2 hover:ring-purple-400/40 hover:scale-[1.02] transition-all duration-300 flex flex-col gap-2 motion-safe:animate-fadeInUp"
              tabIndex={0}
              aria-label="Craft: We obsess over detail and design with purpose. Simplicity and elegance are non-negotiable."
            >
              <h4 className="text-2xl font-bold mb-2 text-white tracking-tight">
                Craft
              </h4>
              <p className="text-lg text-gray-200">
                We obsess over detail and design with purpose.{" "}
                <span className="font-semibold text-white">
                  Simplicity and elegance are non-negotiable.
                </span>
              </p>
            </div>
            {/* Clarity */}
            <div
              className="bg-black/70 rounded-3xl shadow-2xl ring-1 ring-white/10 p-8 hover:ring-2 hover:ring-purple-400/40 hover:scale-[1.02] transition-all duration-300 flex flex-col gap-2 motion-safe:animate-fadeInUp"
              tabIndex={0}
              aria-label="Clarity: We communicate openly and honestly. Listening fuels better decisions and deeper trust."
            >
              <h4 className="text-2xl font-bold mb-2 text-white tracking-tight">
                Clarity
              </h4>
              <p className="text-lg text-gray-200">
                We communicate openly and honestly.{" "}
                <span className="font-semibold text-white">
                  Listening fuels better decisions and deeper trust.
                </span>
              </p>
            </div>
            {/* Velocity */}
            <div
              className="bg-black/70 rounded-3xl shadow-2xl ring-1 ring-white/10 p-8 hover:ring-2 hover:ring-purple-400/40 hover:scale-[1.02] transition-all duration-300 flex flex-col gap-2 motion-safe:animate-fadeInUp"
              tabIndex={0}
              aria-label="Velocity: We act fast, test boldly, and improve relentlessly. Momentum drives innovation."
            >
              <h4 className="text-2xl font-bold mb-2 text-white tracking-tight">
                Velocity
              </h4>
              <p className="text-lg text-gray-200">
                We act fast, test boldly, and improve relentlessly.{" "}
                <span className="font-semibold text-white">
                  Momentum drives innovation.
                </span>
              </p>
            </div>
            {/* Vision */}
            <div
              className="bg-black/70 rounded-3xl shadow-2xl ring-1 ring-white/10 p-8 hover:ring-2 hover:ring-purple-400/40 hover:scale-[1.02] transition-all duration-300 flex flex-col gap-2 motion-safe:animate-fadeInUp"
              tabIndex={0}
              aria-label="Vision: We don’t follow trends—we shape them. Every decision is rooted in long-term thinking."
            >
              <h4 className="text-2xl font-bold mb-2 text-white tracking-tight">
                Vision
              </h4>
              <p className="text-lg text-gray-200">
                We don’t follow trends—we shape them.{" "}
                <span className="font-semibold text-white">
                  Every decision is rooted in long-term thinking.
                </span>
              </p>
            </div>
            {/* Humility */}
            <div
              className="bg-black/70 rounded-3xl shadow-2xl ring-1 ring-white/10 p-8 hover:ring-2 hover:ring-purple-400/40 hover:scale-[1.02] transition-all duration-300 flex flex-col gap-2 motion-safe:animate-fadeInUp"
              tabIndex={0}
              aria-label="Humility: We stay learners. We’re never done improving, and we never stop asking how to be better."
            >
              <h4 className="text-2xl font-bold mb-2 text-white tracking-tight">
                Humility
              </h4>
              <p className="text-lg text-gray-200">
                We stay learners. We’re never done improving, and we never stop
                asking how to be better.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center mt-12 gap-4">
          <h3 className="text-2xl font-bold text-white mb-2">
            Want to See It in Action?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#demo"
              className="inline-block px-6 py-3 rounded-lg bg-purple-600 text-white font-semibold shadow hover:bg-purple-700 transition-colors text-base text-center"
            >
              Request a demo
            </a>
            <a
              href="#platform"
              className="inline-block px-6 py-3 rounded-lg bg-white/10 text-purple-200 font-semibold shadow hover:bg-white/20 transition-colors text-base text-center border border-purple-300/10"
            >
              Explore the platform
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
