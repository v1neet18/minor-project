import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      {/* <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box text-2xl">
      <legend className="fieldset-legend">Login</legend>
    </fieldset> */}
      <div className="min-h-screen w-full ">
        <div className="bg-base-200 max-w-114 w-9/10 shadow-md rounded-2xl flex mx-auto justify-center border border-black/10 mt-20">
          <div className="mx-auto w-full  px-4 py-8 lg:px-6 lg:py-10 border-black/10">
            <h2 className="text-center text-2xl font-bold leading-tight">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-base text-black/60 ">
              Don&apos;t have any account? &nbsp;
              <Link
                to="/signup"
                className="font-medium text-primary transition-all duration-200 hover:underline"
              >
                Sign Up
              </Link>
            </p>
            <form
              action=""
              className="flex flex-col  px-4 py-6 gap-2  max-w-7xl text-xl"
            >
              <label className="fieldset-label">Email</label>
              <input
                type="email"
                className="border rounded-md px-2 py-1 bg-white text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Email"
              />

              <label className="fieldset-label">Password</label>
              <input
                type="password"
                className="border rounded-md px-2 py-1 bg-white text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Password"
              />

              <button className="btn btn-neutral mt-4">Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
