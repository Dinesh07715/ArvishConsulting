export default function ConnectWithUs() {
  return (
    <section className="bg-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Connect With Us
          </h2>
         <div className="flex items-center justify-center gap-3 mb-6 relative">
  <span className="w-20 h-1 bg-green-200 rounded"></span>

  <span className="w-3 h-3 bg-red-600 rounded-full animate-moving-dot"></span>

  <span className="w-20 h-1 bg-green-200 rounded"></span>
</div>

        </div>

        {/* Locations */}
        <div className="grid md:grid-cols-4 gap-12 text-center">
          
          {/* Hyderabad 1 */}
          <div>
            <h3 className="font-semibold text-blue-900 mb-4">
              INDIA - Hyderabad
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              7Q3-A3, Cyber Towers, Madhapur,<br />
              Hyderabad 500 081
            </p>
          </div>

          {/* Hyderabad 2 */}
          <div className="md:border-l md:border-slate-300 md:pl-8">
            <h3 className="font-semibold text-blue-900 mb-4">
              INDIA - Hyderabad
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              #1, 83/1, 2nd Floor, Dallas Center,<br />
              Rai Durg, Hyderabad 500032
            </p>
          </div>

          {/* Chennai */}
          <div className="md:border-l md:border-slate-300 md:pl-8">
            <h3 className="font-semibold text-blue-900 mb-4">
              INDIA - Chennai
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              RMZ Millenia Business Park II, Campus-5,<br />
              5th Floor, 9/1, MGR Main Rd,<br />
              Perungudi, Chennai, Tamil Nadu - 600096
            </p>
          </div>

          {/* USA */}
          <div className="md:border-l md:border-slate-300 md:pl-8">
            <h3 className="font-semibold text-blue-900 mb-4">
              USA - Illinois
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              50 South Main Street Suite 200<br />
              Naperville IL 60540
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
