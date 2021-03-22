import React from "react"

import image_hero_vector_art from "../assets/images/home/hero-vector-art.svg"

export default () => (
  <section
    className="px-16 flex items-center relative"
    id="home"
    style={{ overflow: "hidden", height: "130vh" }}
  >
    <div
      className="absolute bg-primary-lite rounded-full"
      style={{
        width: "500px",
        height: "500px",
        zIndex: -1,
        top: -100,
        right: -100,
      }}
    ></div>
    <div className="flex">
      <div className="w-6/12">
        <h1 className="text-5xl heading-font mb-5 text-secondary">
          Why Keep Your Money In The Bank With Little Or No Interest
        </h1>

        <p className="mb-6 w-7/12" style={{ color: "#828282" }}>
          Save a month you don’t have to work but earn by investing with us.
          Your investments with us are safe an secure
        </p>

        <button
          className="px-10 py-4 rounded font-medium"
          style={{ "background-color": "#00FFC5" }}
        >
          Join us
        </button>
      </div>

      <div className="w-6/12 flex justify-end">
        <div>
          <img src={image_hero_vector_art} alt="hero vector art" />
        </div>
      </div>
    </div>
  </section>
)
