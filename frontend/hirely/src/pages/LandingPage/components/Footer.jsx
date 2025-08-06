import { Briefcase } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gray-50 text-gray-900 overflow-hidden">
      <div className="relative z-10 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Mian Footer Content */}
          <div className="text-center space-y-8">
            {/* Logo/Brand */}
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2 mb-0">
                <img 
                src="../../public/hirely-logo.png" alt="hirely-logo"
                className="w-30" 
                />
              </div>

              <p className={`text-sm text-gray-600 max-w-md mx-auto`}>
                Connecting talented professionals with innovative companies worldwide. Your career success is our mission.
              </p>
            </div>

            {/* Copyright */}
            <div className="space-y-2">
              <p className={`text-sm text-gray-600`}>© {new Date().getFullYear()} Hirely by Karim Nassif.
              </p>
              <p className={`text-xs text-gray-500`}>
                One of many projects done, with the hope that an employer will give me a chance...
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer