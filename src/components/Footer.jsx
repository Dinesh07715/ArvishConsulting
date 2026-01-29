export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-10 text-sm">

          {/* About */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              About Fint
            </h4>
            <p className="leading-relaxed">
              Fint delivers digital transformation solutions that
              enable enterprises to innovate, scale, and stay
              competitive in a rapidly evolving digital world.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              <li>Artificial Intelligence</li>
              <li>Digital Experience</li>
              <li>Data Analytics</li>
              <li>Enterprise Applications</li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Solutions
            </h4>
            <ul className="space-y-2">
              <li>Microsoft Dynamics 365</li>
              <li>ServiceNow Platform</li>
              <li>Cloud & DevOps</li>
              <li>Quality Engineering</li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Certifications
            </h4>
            <ul className="space-y-2">
              <li>ISO 9001</li>
              <li>ISO 27001</li>
              <li>CMMI Level 3</li>
              <li>Microsoft Gold Partner</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 my-10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs gap-4">
          <p>
            © 2025 <span className="text-white font-medium">Fint Solutions</span>.
            All rights reserved.
          </p>

          <p className="text-slate-400">
            Privacy Policy · Terms of Service
          </p>
        </div>

      </div>
    </footer>
  )
}
