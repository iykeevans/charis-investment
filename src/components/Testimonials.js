import React from "react"
import image_quote from "../assets/images/home/quote.svg"

export default () => (
  <section className="py-20" id="testimonials">
    <div className="px-16">
      <img src={image_quote} alt="quote" />

      <h1 className="text-center text-3xl heading-font mb-8">Testimonials</h1>

      <div className="text-center">
        <h3 className="font-medium text-xl mb-3">Tobby Ajayi</h3>
        <p className="mb-5">Wonderful experience would definitely try again.</p>
        <div>
          <button
            className="rounded-full"
            style={{
              height: "10px",
              width: "10px",
              "background-color": "#FFE1C2",
            }}
          ></button>
        </div>
      </div>
    </div>
  </section>
)
