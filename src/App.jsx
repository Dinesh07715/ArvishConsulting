

import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Hero from "./components/Hero"
import Services from "./components/Services"
import About from "./components/About"
import Blog from "./components/Blog"
import WhyChoose from "./components/WhyChoose"

import ServiceDetails from "./pages/ServiceDetails"
import ConnectWithUs from "./components/ConnectWithUs"


export default function App() {
  return (
    <>
      {/* Header - Visible on all pages */}
      <Navbar />

      {/* Page Content */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <WhyChoose />
              <About />
              <Blog />
            </>
          }
        />

        <Route
          path="/services/:serviceName"
          element={<ServiceDetails />}
        />
      </Routes>
          {/* Connect With Us Section */}
      <ConnectWithUs />

      {/* Footer - Visible on all pages */}
      <Footer />
    </>
  )
}
