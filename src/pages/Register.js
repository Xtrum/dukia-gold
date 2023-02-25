import React from "react";
import { useState } from "react";
import BreadCrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";

const Register = () => {
  const [value, setValue] = useState("");
  const [corporate, setCorporate] = useState(false);
  const [agree, setAgree] = useState(false);

  return (
    <>
      <BreadCrumb />
      {/* registration form */}
      <section className="Register max-w-[500px] sm:w-[70%] mx-auto">
        <form class="w-[100%] grid rounded gap-4 shadow-lg p-8">
          <div className="registerTop w-[100%] flex flex-row justify-between">
            <div>
              <h1 className="text-sky-500 text-5xl mb-3">Sign Up</h1>
              <p className="text-amber-700">Create your Dukia account now</p>
            </div>

            <div className="w-14">
              <img
                src="https://app.dukiagold.com/img/icons/wallet.svg"
                alt=""
              />
            </div>
          </div>
          {/* Account type */}
          <div className="flex flex-row w-[100%] flex-start">
            <label className="flex flex-row mr-[200px] content-center">
              <input
                name="ACC"
                onClick={() => setCorporate(false)}
                className="mx-1"
                value="Personal Account"
                type="radio"
              />
              Personal Account
            </label>

            <label className="flex flex-row content-center">
              <input
                name="ACC"
                className="mx-1"
                onClick={() => setCorporate(true)}
                value="Corporate Account"
                type="radio"
              />
              Corporate Account
            </label>
          </div>

          {corporate && (
            <label className="flex flex-col text-cyan-700 gap-2">
              Entity Name
              <input
                required
                type="text"
                autoCapitalize="true"
                className="focus:shadow outline-none  border rounded caret-black text-start p-2 text-md"
              />
            </label>
          )}
          {/* Names input */}
          <div className="text-cyan-700 w-[100%] flex flex-col justify-between md:flex-row">
            <label className="w-[100%] flex flex-col gap-2 p-1">
              <span className="text-blueGray-400">First Name</span>
              <input
                name="first name"
                type="text"
                required
                className="focus:shadow outline-none  border rounded caret-black text-center p-2 text-md"
              />
            </label>

            <label className="w-[100%] flex flex-col gap-2 p-1">
              <span className="text-blueGray-400">Last Name</span>
              <input
                name="last name"
                type="text"
                required
                className="focus:shadow outline-none  border rounded caret-black text-center p-2 text-md"
              />
            </label>
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

          <hr className="registration w-[100%] mx-auto  border-[3px] rounded accent-blue" />

          <p>This is required!</p>

          {/* Birthday & Nationality */}
          <div className="text-cyan-700 flex flex-col md:flex-row">
            <label className="flex w-[100%] text-blueGray-400 flex-col gap-2 p-1">
              Birthday
              <input
                name="date of birth"
                required
                type="datetime"
                className=" focus:shadow outline-none  border rounded caret-black text-start p-2 text-md"
              />
              <span className="text-sm mt-[-4px]">Format: dd/mm/yyyy</span>
            </label>

            <label className="w-[100%] flex text-blueGray-400 flex-col gap-2 p-1">
              Nationality
              <input
                name="nationality"
                list="nationality"
                className=" focus:shadow outline-none  border rounded caret-black text-start p-2 text-md"
              />
              <datalist id="nationality">
                {/* <option value={}/> */}
                <option value="template" />
                <option value="template-01" />
                <option value="template-02" />
                <option value="template-03" />
                <option value="template-04" />
              </datalist>
            </label>
          </div>

          <label className="w-[100%] text-cyan-700">
            Did someone refer you?
            <select
              value="No one referred me"
              onChange={(e) => setValue(e.target.value)}
              className="w-[100%] focus:shadow outline-none  border rounded caret-black text-black p-2 text-md">
              <option value="registration.relative-friend">
                registration.relative-friend
              </option>
              <option value="registration.business-contact">
                registration.business-contact
              </option>
              <option value="registration.corporative-service-provider">
                registration.corporative-service-provider
              </option>
              <option value="Authorized Partner of Dukia">
                Authorized Partner of Dukia
              </option>
              <option value="Other">Other</option>
            </select>
          </label>

          {/* Other referral option input */}
          <div>
            {value === "Other" && (
              <label>
                Please Specify
                <input
                  required
                  name="otherReferral"
                  type="text"
                  className="w-[100%] focus:shadow outline-none  border rounded caret-black text-start p-2 text-md"
                />
              </label>
            )}
          </div>

          <label className="flex content-center gap-x-2">
            <input
              onSelect={() => setAgree(true)}
              type="checkbox"
              className="border rounded-full"
            />
            I have read and accepted the{" "}
            <span className="text-cyan-700 hover:underline">
              Terms and Conditions
            </span>
          </label>

          <button
            disabled={!agree}
            type="submit"
            className="text-center p-4 w-[100%] rounded text-800 bg-blue text-white">
            Create Account
          </button>
        </form>
        <Link to="/Login">
          <p className="text-yellow-700 mt-4 text-center hover:underline">
            Already have an account? Log in
          </p>
        </Link>
      </section>
    </>
  );
};

export default Register;
