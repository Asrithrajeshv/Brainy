"use client"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/brainy/bg.jpg')" }}>
      <div className="bg-black bg-opacity-70 rounded-lg p-8 text-white w-96">
        <h1 className="text-3xl font-bold mb-4 text-center">Login</h1>
        <form method="POST">
          <div className="mb-4">
            <input type="text" name="username" placeholder="Username" required className="w-full px-4 py-2 bg-transparent border-b-2 border-white text-white focus:outline-none"/>
          </div>
          <div className="mb-4">
            <input type="password" name="password" placeholder="Password" required className="w-full px-4 py-2 bg-transparent border-b-2 border-white text-white focus:outline-none"/>
          </div>
          <div className="flex justify-between text-sm mb-4">
            <label>
              <input type="checkbox" className="mr-1"/> Remember Me
            </label>
            <Link href="#" className="text-primary-400 hover:underline">Forgot Password?</Link>
          </div>
          <button type="submit" className="w-full py-2 bg-white text-black font-bold rounded hover:bg-gray-200 transition">Login</button>
        </form>
        <div className="mt-4 text-center">
          <p>Dont have an account? <Link href="/register" className="text-primary-400 hover:underline">Register</Link></p>
        </div>
      </div>
    </div>
  )
}
