
export default function CivicBridgeLandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-4 sm:p-6 md:p-8">
      <header className="text-center mb-8 sm:mb-10 px-2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-800">CivicBridge</h1>
        <p className="text-base sm:text-lg text-gray-600 mt-2 max-w-3xl mx-auto">
          A unified digital ecosystem for citizen grievance redressal and governance insights
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
        {/* Citizen Portal */}
        <div className="bg-white rounded-2xl shadow p-5 sm:p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl sm:text-2xl font-semibold text-green-700 mb-2">Citizen Portal</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            Empower citizens to submit, track, and follow up on grievances seamlessly.
          </p>
          <a
            href="https://voice-citizen-connect.lovable.app/"
            className="inline-block bg-green-600 text-white px-5 py-3 rounded-xl hover:bg-green-700 transition-colors w-full sm:w-auto text-center font-medium"
          >
            Launch CivicBridge
          </a>
        </div>

        {/* GRO Portal */}
        <div className="bg-white rounded-2xl shadow p-5 sm:p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">GRO Portal</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            Interface for Grievance Redressal Officers to manage, respond, and resolve complaints.
          </p>
          <a
            href="https://gro-dashboard.vercel.app/dashboard"
            target="_blank"
            className="inline-block bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition-colors w-full sm:w-auto text-center font-medium"
          >
            Go to GRO Portal
          </a>
        </div>

        {/* GRM Insight */}
        <div className="bg-white rounded-2xl shadow p-5 sm:p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl sm:text-2xl font-semibold text-purple-700 mb-2">GRM Insight</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            AI-powered dashboard providing system-wide analysis and actionable insights for governance.
          </p>
          <a
            href="https://v0-cpgrams.vercel.app/dashboard"
            target="_blank"
            className="inline-block bg-purple-600 text-white px-5 py-3 rounded-xl hover:bg-purple-700 transition-colors w-full sm:w-auto text-center font-medium"
          >
            View GRM Insight
          </a>
        </div>
      </section>

      <footer className="mt-12 sm:mt-16 text-center text-gray-500 text-xs sm:text-sm px-4">
        © {new Date().getFullYear()} CivicBridge • Built for inclusive governance
      </footer>
    </div>
  );
}
