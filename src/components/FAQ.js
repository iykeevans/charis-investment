import React, { useEffect, useState } from "react"

export default () => {
  const [testimonials, setTestimonials] = useState([
    {
      question: "IS CHARIS REGISTERED? ",
      answer: "YES,  Charis is registered with Corporate Affair Commission.",
      hide: false,
    },
    {
      question: "WHAT ARE THE RISK INVOLVE IN CHARIS INVESTMENT ?",
      answer:
        "There is NO risk involve on Charis investment, your investment is secured because we have good risk Management System and incase of any unforseen circumstances  (which has never Happened,  your investment Capital is secured)",
      hide: false,
    },
    {
      question: "How long has Charis been Existing",
      answer: "About 2 years ",
      hide: false,
    },
    {
      question: "CAN I HAVE MULTIPLE INVESTMENT",
      answer:
        "YES , YOU CAN BUT YOU CAN NOT ADD TO YOUR CURRENT INVESTMENT UNTIL MATURE DATE ",
      hide: false,
    },
    {
      question: "IS THERE ANY FORMAL OR LEGAL AGREEMENT BINDING BOTH PARTIES ",
      answer:
        "Yes , The MOU that would be sent to you is a legal agreement that will be binding both Parties ",
      hide: false,
    },
    {
      question: "HOW DO INVEST ",
      answer:
        "YOU CAN CONTACT OUR CUSTOMER CARE OR CLICK ON INVEST now button to start your investment portfolio  ",
      hide: false,
    },
    {
      question: "HOW DO I CASH OUT MY FUNDS ",
      answer:
        "A FORM  will be sent to you on or before your cash out date requesting how you Want to cash out either by cashing out both the CAPITAL AND ROI, OR THE ROI ONLY OR REINVESTING BOTH THE ROI AND CAPITAL .",
      hide: false,
    },
  ])

  const handleToggle = index => {
    console.log("-----.", index)
    // item.hide = false
    console.log(testimonials[index].hide)
    testimonials[index].hide = !testimonials[index].hide
    console.log(testimonials)
    setTestimonials(testimonials)
  }

  return (
    <section className="py-20 flex flex-col items-center" id="faq">
      <h1 className="text-center text-3xl heading-font mb-5">
        Frequently Asked Questions And Answers
      </h1>

      {testimonials.map((item, index) => (
        <div
          className={`w-8/12 px-6 py-4 cursor-pointer mt-4 ${
            !item.hide ? "bg-primary-lite" : "bg-primary-lite-alt"
          } `}
          onClick={() => handleToggle(index)}
        >
          <h3 className="font-medium text-lg">{item.question}</h3>

          {item.hide ? null : <p className="mt-3 text-sm">{item.answer}</p>}
        </div>
      ))}
    </section>
  )
}
