import { NavBar } from "@/components/nav-bar"
/* eslint-disable react/no-unescaped-entities */

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <NavBar />
      <div className="pt-32 container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">About CulinaryDelight</h1>
          <p className="text-lg mb-6">
            Welcome to CulinaryDelight, your ultimate destination for discovering delicious recipes from around the
            world. Our platform is designed to make cooking accessible, enjoyable, and inspiring for everyone, from
            beginners to seasoned chefs.
          </p>
          <p className="text-lg mb-6">
            Every day, we feature a new recipe to help you expand your culinary horizons and try something new. Our
            extensive database includes recipes from various regions, cuisines, and difficulty levels.
          </p>
          <p className="text-lg">
            Whether you're looking for quick weekday dinners, impressive dishes for special occasions, or want to
            explore international cuisines, CulinaryDelight is here to guide you on your cooking journey.
          </p>
        </div>
      </div>
    </main>
  )
}

