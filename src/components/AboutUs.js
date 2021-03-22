import React from "react"

export default () => (
  <section className="flex flex-col items-center py-32 relative" id="about-us">
    <div
      className="absolute bg-primary-lite rounded-full"
      style={{
        width: "300px",
        height: "300px",
        zIndex: -1,
        top: -50,
        left: 50,
      }}
    ></div>

    <h1 className="text-center text-3xl heading-font mb-5">About us</h1>

    <div className="w-8/12">
      <p className="text-center mb-6 leading-8">
        Charis investment and Construction Consult is solely into Foreign
        Exchange Trading, Construction, Real Estate , logistic , education and
        Agriculture. Some are currently in running why some are the company
        future plans. Charis investment is incorporated with Corporate Affairs
        Commission (CAC).
      </p>

      <p className="text-center leading-8">
        Charis investment provide an opportunity for Investors to scale their
        Capital beyond what is obtainable from any financial Institutions. We
        manage both individual and Companies funds with integrity and
        accountability Savings is putting your money to rest , Investing is
        putting your money to work , Charis provides a platform where you could
        put your money to work with full fidelity.
      </p>
    </div>
  </section>
)
