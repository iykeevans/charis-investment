import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import AboutUs from "../components/AboutUs"
import InvestmentOfferings from "../components/InvestmentOfferings"
import Testimonials from "../components/Testimonials"
import Visionary from "../components/Visionary"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import FAQ from "../components/FAQ"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <InvestmentOfferings />
      <Testimonials />
      <Visionary />
      <FAQ />
      <Newsletter />
      <Footer />
    </>
  )
}
