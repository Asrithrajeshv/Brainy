"use client"
import Link from "next/link"

export default function RegisterPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/brainy/bg.jpg')" }}>
      <div className="bg-black bg-opacity-70 rounded-lg p-8 text-white w-96">
        <h1 className="text-3xl font-bold mb-4 text-center">Register</h1>
        <form method="POST">
          <div className="mb-4">
            <input type="text" name="username" placeholder="Username" required className="w-full px-4 py-2 bg-transparent border-b-2 border-white text-white focus:outline-none"/>
          </div>
          <div className="mb-4">
            <input type="email" name="email" placeholder="Email" required className="w-full px-4 py-2 bg-transparent border-b-2 border-white text-white focus:outline-none"/>
          </div>
          <div className="mb-4">
            <input type="password" name="password" placeholder="Password" required className="w-full px-4 py-2 bg-transparent border-b-2 border-white text-white focus:outline-none"/>
          </div>
          <button type="submit" className="w-full py-2 bg-white text-black font-bold rounded hover:bg-gray-200 transition">Register</button>
        </form>
        <div className="mt-4 text-center">
          <p>Already have an account? <Link href="/login" className="text-primary-400 hover:underline">Login</Link></p>
        </div>
      </div>
    </div>
  )
}
