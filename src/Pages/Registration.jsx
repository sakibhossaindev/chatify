import React from 'react'
import { Link } from 'react-router-dom'

const Registration = () => {
    return (
        <main className="min-h-screen bg-slate-100 px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-2">
                <section className="hidden bg-indigo-600 p-12 text-white lg:flex lg:flex-col lg:justify-center">
                    <span className="mb-8 text-2xl font-bold tracking-tight">Chatify</span>
                    <h1 className="text-4xl font-bold leading-tight">Connect, chat, and share moments.</h1>
                    <p className="mt-5 max-w-md text-lg text-indigo-100">
                        Create your account and start meaningful conversations with the people who matter.
                    </p>
                </section>

                <section className="p-6 sm:p-10 lg:p-12">
                    <div className="mx-auto max-w-md">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-slate-900">Create an account</h2>
                            <p className="mt-2 text-sm text-slate-500">Join Chatify today. It only takes a minute.</p>
                        </div>

                        <form className="space-y-5">
                            <div>
                                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">Full name</label>
                                <input id="name" name="name" type="text" required placeholder="Alex Johnson" className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
                            </div>

                            <div>
                                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">Email address</label>
                                <input id="email" name="email" type="email" required placeholder="you@example.com" className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
                            </div>

                            <div>
                                <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">Password</label>
                                <input id="password" name="password" type="password" required placeholder="At least 8 characters" className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
                            </div>

                            <label className="flex items-start gap-3 text-sm text-slate-600">
                                <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                                <span>I agree to the <a href="#terms" className="font-medium text-indigo-600 hover:text-indigo-500">Terms of Service</a> and Privacy Policy.</span>
                            </label>

                            <button type="submit" className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                Create account
                            </button>
                        </form>

                        <p className="mt-8 text-center text-sm text-slate-500">
                            Already have an account? 
                            
                            <Link  className="font-semibold text-indigo-600 hover:text-indigo-500" to="/">Sign in</Link>
                        </p>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Registration