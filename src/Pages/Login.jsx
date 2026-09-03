import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  let [showPassword, setShowPassword] = useState(false);
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")

  let handlesubmit = () => {
console.log(cccc);

  }


  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-12">
      <section className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl sm:p-10">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-2xl font-bold text-white">
            C
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Welcome back</h1>
          <p className="mt-2 text-sm text-slate-500">Sign in to continue to Chatify</p>
        </div>

        <form className="space-y-5">
          <div>
            <label

              htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
              Email address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="email"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                Password
              </label>
              <a href="#forgot-password" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                placeholder="Enter your password"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 pr-11 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
              <button
                type="button"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-3 flex items-center text-slate-500 transition hover:text-slate-700"
              >
                {showPassword ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-5 w-5">
                    <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-5 w-5">
                    <path d="M3 3l18 18" />
                    <path d="M10.58 10.58A2 2 0 0 0 13.4 13.4" />
                    <path d="M9.88 5.08A10.94 10.94 0 0 1 12 5c6.5 0 10 7 10 7a16.76 16.76 0 0 1-3.14 4.6" />
                    <path d="M14.12 18.92A10.94 10.94 0 0 1 12 19c-6.5 0-10-7-10-7a16.76 16.76 0 0 1 4.05-5.39" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <button
            onClick={handlesubmit}
            type="submit"
            className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Sign in
          </button>
        </form>
        <p className="mt-8 text-center text-sm text-slate-600">
          Don&apos;t have an account?{' '}
          <Link className="font-semibold text-indigo-600 hover:text-indigo-500" to="/registration">
            Create one
          </Link>
        </p>



      </section>
    </main>
  );
}
