import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/Breadcrumb";

const Login = () => {
  return (
    <>
      <BreadCrumb />
      <section className=" flex flex-col gap-4 Register max-w-[500px] sm:w-[70%] mx-auto">
        <form class="w-[100%] grid rounded gap-4 shadow-lg p-8">
          <div className="registerTop w-[100%] flex flex-row justify-between">
            <div>
              <h1 className="text-sky-500 text-5xl mb-3">Welcome</h1>
              <p className="text-amber-700">Log in using your Dukia ID</p>
            </div>

            <div className="w-14">
              <img
                src="https://app.dukiagold.com/img/icons/wallet.svg"
                alt=""
              />
            </div>
          </div>

          {/* Email & Password */}
          <label className="text-cyan-700 flex flex-col gap-2 p-1">
            Email
            <input
              name="email"
              placeholder="Enter your email"
              required
              className="focus:shadow outline-none  border rounded caret-black text-start p-2 text-md"
              type="email"
            />
          </label>

          <label className="text-cyan-700 flex flex-col gap-2 p-1">
            Password
            <input
              name="password"
              placeholder="Password"
              required
              className="focus:shadow outline-none  border rounded caret-black text-start p-2 text-md"
              type="password"
            />
          </label>

          <button
            type="submit"
            className="text-center p-4 w-[100%] rounded text-800 bg-blue text-white">
            Log in
          </button>

          <Link to="Forgot-password">
            <p className="text-blue-700 text-center hover:underline">
              Forgotten password?
            </p>
          </Link>
        </form>

        <Link to="/Register">
          <p className="text-center text-amber-700 hover:underline">
            Don't have an account? Register now
          </p>
        </Link>
      </section>
    </>
  );
};

export default Login;
