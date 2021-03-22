import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

export default () => (
  <header
    className="flex justify-between items-center px-16 absolute w-full"
    style={{ height: "80px", zIndex: 2 }}
  >
    <div>Logo</div>

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
