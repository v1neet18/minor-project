import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container/Container";

function Login() {
  return (
    <>
      {/* <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box text-2xl">
      <legend className="fieldset-legend">Login</legend>
    </fieldset> */}
      <Container>

      
      <div className="bg-base-200 shadow-md rounded-2xl flex mx-auto justify-center border border-black/10 mt-20">
        <div className="mx-auto w-full max-w-lg  rounded-xl p-10 border-black/10">
          <h2 className="text-center text-2xl font-bold leading-tight">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-base text-black/60 ">
            Don&apos;t have any account? &ntsp;
            <Link
              to="/signup"
              className="font-medium text-primary transition-all duration-200 hover:underline"
            >
              Sign Up
            </Link>
          </p>
          <form
            action=""
            className="flex flex-col  px-4 py-6 gap-2  max-w-7xl text-2xl"
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
      </Container>
    </>
  );
}

export default Login;
