import React from "react"

export default () => (
  <footer className="flex flex-col px-20 pt-10 pb-6 bg-primary-lite">
    <div className="flex">
      <div className="flex flex-col">
        <h3 className="font-bold mb-3">Contact us</h3>
        <a href="#" className="mb-1">
          +23480XXXXXXXX
        </a>
        <a href="#" className="mb-1">
          info@telaviv.coes
        </a>
        <a href="#">5, Olodumare Street</a>
      </div>

      <div className="flex flex-col ml-20">
        <h3 className="font-bold mb-1">Privacy</h3>
        <a href="#" className="mb-1">
          Terms and conditions
        </a>
        <a href="#">Privacy Policy</a>
      </div>
    </div>

    <small className="mt-16 text-center">
      Charis investment all rights reserved &copy; 2021
    </small>
  </footer>
)
