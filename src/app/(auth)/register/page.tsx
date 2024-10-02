"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RegisterPage() {
  const { push } = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: any) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    const res = await fetch("api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        fullname: e.currentTarget.fullname.value,
        email: e.currentTarget.email.value,
        password: e.currentTarget.password.value,
      }),
    });
    if (res.status === 200) {
      setLoading(false);
      push("/login");
    } else {
      setLoading(false);
      const errorMessage = "Email already exists!"; // Contoh pesan error
      toast.error(errorMessage); // Menampilkan pesan error menggunakan toast
      console.log(res);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900">
        {/* Toast Container for displaying error messages */}
        <ToastContainer position="top-right" />
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-10 sm:p-12 lg:w-1/3 w-full mx-4">
          {error !== "" && <div>{error}</div>}
          <h3 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-8">
            Create an Account
          </h3>
          <form className="space-y-6" onSubmit={(e) => handleRegister(e)}>
            <div>
              <label
                htmlFor="fullname"
                className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
              >
                Full Name
              </label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 dark:bg-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500 dark:border-gray-600"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 dark:bg-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500 dark:border-gray-600"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 dark:bg-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500 dark:border-gray-600"
                placeholder="••••••••"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg shadow-lg transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800"
            >
              Sign Up
            </button>
            <div className="text-center text-sm text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-indigo-600 hover:underline dark:text-indigo-400"
              >
                Sign in here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
