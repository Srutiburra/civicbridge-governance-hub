export default function CivicBridgeLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      {/* Phone Frame Container */}
      <div className="relative w-full max-w-[380px] h-[780px] bg-black rounded-[50px] shadow-2xl p-3 border-8 border-slate-800">
        {/* Phone Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-10"></div>
        
        {/* Phone Screen */}
        <div className="relative w-full h-full bg-white rounded-[42px] overflow-hidden">
          {/* Status Bar */}
          <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-blue-800 to-blue-700 flex items-center justify-between px-6 text-white text-xs z-10">
            <span className="font-semibold">9:41</span>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              <div className="w-6 h-3 border-2 border-white rounded-sm relative">
                <div className="absolute inset-0.5 bg-white rounded-sm"></div>
              </div>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="h-full overflow-y-auto pt-12 pb-6 px-5 bg-gradient-to-b from-slate-50 to-white">
            <header className="text-center mb-6 pt-4">
              <h1 className="text-3xl font-bold text-blue-800 mb-2">Citizen Grievance System</h1>
              <p className="text-sm text-gray-600 leading-relaxed">
                A unified digital platform for seamless grievance submission, tracking, and resolution
              </p>
            </header>

            <section className="space-y-4">
              {/* Citizen Portal */}
              <div className="bg-white rounded-2xl shadow-lg p-5 border border-green-100 active:scale-95 transition-transform">
                <h2 className="text-xl font-semibold text-green-700 mb-2">Citizen Portal</h2>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Empower citizens to submit, track, and follow up on grievances seamlessly.
                </p>
                <a
                  href="https://voice-citizen-connect.lovable.app/"
                  className="block bg-green-600 text-white px-5 py-3 rounded-xl hover:bg-green-700 transition-colors text-center font-medium active:scale-95"
                >
                  Launch Citizen Portal
                </a>
              </div>

              {/* GRO Portal */}
              <div className="bg-white rounded-2xl shadow-lg p-5 border border-blue-100 active:scale-95 transition-transform">
                <h2 className="text-xl font-semibold text-blue-700 mb-2">GRO Portal</h2>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Interface for Grievance Redressal Officers to manage, respond, and resolve complaints.
                </p>
                <a
                  href="https://gro-dashboard.vercel.app/dashboard"
                  target="_blank"
                  className="block bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition-colors text-center font-medium active:scale-95"
                >
                  Go to GRO Portal
                </a>
              </div>

              {/* GRM Insight */}
              <div className="bg-white rounded-2xl shadow-lg p-5 border border-purple-100 active:scale-95 transition-transform">
                <h2 className="text-xl font-semibold text-purple-700 mb-2">GRM Insight</h2>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  AI-powered dashboard providing system-wide analysis and actionable insights for governance.
                </p>
                <a
                  href="https://v0-cpgrams.vercel.app/dashboard"
                  target="_blank"
                  className="block bg-purple-600 text-white px-5 py-3 rounded-xl hover:bg-purple-700 transition-colors text-center font-medium active:scale-95"
                >
                  View GRM Insight
                </a>
              </div>
            </section>

            <footer className="mt-8 text-center text-gray-500 text-xs">
              © {new Date().getFullYear()} Citizen Grievance System • Built for inclusive governance
            </footer>
          </div>
        </div>

        {/* Phone Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-slate-700 rounded-full"></div>
      </div>
    </div>
  );
}
