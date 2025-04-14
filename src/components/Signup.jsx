import React from "react";
import Container from "./Container/Container";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
    <div className="min-h-screen w-full">
        <div className="bg-base-200 max-w-lg w-9/10  shadow-md rounded-2xl flex mx-auto justify-center border border-black/10 mt-20">
          <div className="mx-auto w-full px-4 py-8 lg:px-10 lg:py-12 border-black/10">
            <h2 className="text-center text-2xl font-bold leading-tight">
            Sign up to create your account
            </h2>
            <p className="mt-2 text-center text-base text-black/60 ">
            Already have an account? &nbsp;
              <Link
                to="/login"
                className="font-medium text-primary transition-all duration-200 hover:underline"
              >
                Login
              </Link>
            </p>
            <form
              action=""
              className="flex flex-col  px-4 py-6 gap-2  max-w-7xl text-xl"
            >
              <label className="fieldset-label">Name</label>
              <input
                type="text"
                className="border rounded-md px-2 py-1 bg-white text-gray-700 placeholder-gray-500"
                placeholder="Full Name"
              />

              <label className="fieldset-label">Email</label>
              <input
                type="email"
                className="border rounded-md px-2 py-1 bg-white text-gray-700 placeholder-gray-500"
                placeholder="Email"
              />

              <label className="fieldset-label">Password</label>
              <input
                type="password"
                className="border rounded-md px-2 py-1 bg-white text-gray-700 placeholder-gray-500"
                placeholder="Password"
              />

              <button className="btn btn-neutral mt-4">Sign up</button>
            </form>
          </div>
        </div>
        </div>
    </>
  );
}

export default Signup;
