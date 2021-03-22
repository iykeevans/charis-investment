import React from "react"

import image_money_plant from "../assets/images/home/money-plant.svg"

const offerings = [
  { planType: "Monthly Plan", description: "17% R.O.I", minCapital: "50k" },
  {
    planType: "90 Working Days",
    description: "80% R.O.I over 90 days",
    minCapital: "500k",
  },
  {
    planType: "Salary Plan",
    description: "18% R.O.I over 5 months",
    minCapital: "50k",
  },
  {
    planType: "65 Working Days",
    description: "55% R.O.I over 65 days",
    minCapital: "300k",
  },
  {
    planType: "5 Months Plan",
    description: "100% R.O.I over 90 days",
    minCapital: "50k",
  },
  {
    planType: "9 Months Plan",
    description: "200% R.O.I over 9 months",
    minCapital: "1 Million",
  },
]

export default () => (
  <section className="grid grid-cols-12 gap-8 px-24 py-32" id="investment">
    <h1 className="col-span-12 text-center text-3xl heading-font">
      Investment Plans
    </h1>

    {offerings.map(item => (
      <div
        className="col-span-4 pt-6 pb-2 rounded"
        style={{ backgroundColor: "#FFE1C2" }}
      >
        <div
          className="p-6 flex flex-col rounded bg-white"
          style={{ border: "1px solid" }}
        >
          <img
            src={image_money_plant}
            alt="money-flower"
            className="self-end"
          />

          <h2 className="text-xl mb-2 font-bold">{item.planType}</h2>
          <p>{item.description}</p>
          <p className="alt-font">Min. Capital {item.minCapital}</p>
        </div>
      </div>
    ))}
  </section>
)
