import React from "react"

export default () => (
  <section className="py-32 flex flex-col items-center">
    <h1 className="text-center text-3xl heading-font mb-8">Stay In Touch</h1>

    <div className="flex relative">
      <input
        type="text"
        className="py-3 px-5 rounded"
        style={{ border: "1px solid", width: "65vw", height: "55px" }}
        placeholder="Email Address"
      />

      <button
        className="absolute px-10 rounded font-medium"
        style={{
          backgroundColor: "#00FFC5",
          height: "40px",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        Subscribe
      </button>
    </div>
  </section>
)
