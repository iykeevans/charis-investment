import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

import image_logo from "../assets/images/home/logo.png"

export default () => (
  <header
    className="flex justify-between items-center px-16 absolute w-full"
    style={{ height: "80px", zIndex: 2 }}
  >
    <div className="flex">
      <img src={image_logo} alt="logo" style={{ height: 100 }} />
    </div>

    <nav className="flex">
      <button className="p-6 text-sm" onClick={() => scrollTo("#home")}>
        Home
      </button>

      <button className="p-6 text-sm" onClick={() => scrollTo("#about-us")}>
        About us
      </button>

      <button className="p-6 text-sm" onClick={() => scrollTo("#investment")}>
        Investment Offerings
      </button>

      <button className="p-6 text-sm" onClick={() => scrollTo("#testimonials")}>
        Testimonials
      </button>

      <button className="p-6 text-sm" onClick={() => scrollTo("#faq")}>
        FAQ
      </button>
    </nav>
  </header>
)
