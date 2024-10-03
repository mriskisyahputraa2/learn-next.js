"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginPage({ searchParams }) {
  const { push } = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const callbackUrl = searchParams.callbackUrl || "/";

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: e.target.email.value,
        password: e.target.password.value,
        callbackUrl,
      });

      if (!res?.error) {
        setIsLoading(false);
        push(callbackUrl);
      } else {
        if (res.status === 401) {
          // setIsError("Email or Password Incorrect");
          const errorMessage = "Email or Password is Incorret";
          toast.error(errorMessage);
        }
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900">
        <ToastContainer position="top-right" />

        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-10 sm:p-12 lg:w-1/3 w-full mx-4">
          {error !== "" && <div>{error}</div>}

          <h3 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-8">
            Sign in Account
          </h3>
          <form className="space-y-6" onSubmit={(e) => handleLogin(e)}>
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
              disabled={isLoading}
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg shadow-lg transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800"
            >
              {isLoading ? "Loading..." : "Sign In"}
            </button>
            <button
              type="button"
              onClick={() => signIn("google", { callbackUrl, redirect: false })}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg shadow-lg transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800"
            >
              Login With Google
            </button>
            <div className="text-center text-sm text-gray-500 dark:text-gray-400">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="text-indigo-600 hover:underline dark:text-indigo-400"
              >
                Sign up here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
