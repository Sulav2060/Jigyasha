import { useState, useEffect } from "react"
import {
  Calendar, ArrowRight, Menu, X, Star, Clock
} from "lucide-react"
import axios from "axios"
import Hero from "./components/LandingPage/Hero"
import HowItWorks from "./components/LandingPage/HowItWorks"
import WhyJigyasha from "./components/LandingPage/WhyJigyasha"
import Testimonials from "./components/LandingPage/Testimonials"
import FAQ from "./components/LandingPage/FAQ"
import Footer from "./components/LandingPage/Footer"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("all")
  const [featuredCourses, setFeaturedCourses] = useState([])

  const filteredCourses = activeCategory === "all"
    ? featuredCourses
    : featuredCourses.filter((course) => course.category === activeCategory)

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}posts`)
        const data = await response.json()
        setFeaturedCourses(data)
      } catch (error) {
        console.error("Failed to fetch courses:", error)
      }
    }

    fetchCourses()
  }, [])


  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    try {
      console.log(`${import.meta.env.VITE_API_URL}subscribe`, { email });
      const response = await axios.post(`${import.meta.env.VITE_API_URL}subscribe/`, { email });
      console.log("Server response:", response.data);
      setMessage(response.data.message);
      setEmail('');
    } catch (err) {
      console.log("Error object:", err);
      console.log("Error response data:", err.response?.data);
      setError(err.response?.data?.message || 'Subscription failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <img src="src/assets/logo.jpeg" alt="Jigyasha" className="h-10" />
                <span className="ml-1 text-2xl text-yellow-500">.</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#courses" className="text-gray-800 hover:text-blue-700 transition-colors">Courses</a>
              <a href="#how-it-works" className="text-gray-800 hover:text-blue-700 transition-colors">How It Works</a>
              <a href="#testimonials" className="text-gray-800 hover:text-blue-700 transition-colors">Testimonials</a>
              <a href="#faq" className="text-gray-800 hover:text-blue-700 transition-colors">FAQ</a>
            </nav>

            {/* Mobile menu button */}
            <button className="md:hidden text-gray-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4 space-y-3">
              <a href="#courses" className="block py-2 text-gray-800 hover:text-blue-700"
                onClick={() => setIsMenuOpen(false)}>Courses</a>
              <a href="#how-it-works" className="block py-2 text-gray-800 hover:text-blue-700"
                onClick={() => setIsMenuOpen(false)}>How It Works</a>
              <a href="#testimonials" className="block py-2 text-gray-800 hover:text-blue-700"
                onClick={() => setIsMenuOpen(false)}>Testimonials</a>
              <a href="#faq" className="block py-2 text-gray-800 hover:text-blue-700"
                onClick={() => setIsMenuOpen(false)}>FAQ</a>
              <div className="pt-4 border-t flex flex-col space-y-3">
                <a href="#" className="py-2 text-center rounded-md border border-blue-700 text-blue-700">Log in</a>
                <a href="#" className="py-2 text-center rounded-md bg-blue-700 text-white">Sign up</a>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
          <div className="absolute inset-0 opacity-10 pattern-dots bg-gray-900"></div>
          <Hero />
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <WhyJigyasha />
        </section>

        {/* Featured Courses Section */}
        <section id="courses" className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Featured Past Classes</h2>
              <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-600">
                Browse our upcoming live sessions and reserve your spot today.
              </p>
            </div>

            {/* Courses Grid */}

            <div className="flex flex-wrap justify-center gap-6">

              {filteredCourses.map((course) => (
                <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow flex flex-col h-full w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] max-w-xs mx-auto">
                  <div className="relative">
                    <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-48 object-cover" />
                    <div className="absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded bg-yellow-500 text-gray-900">
                      LIVE CLASS
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="text-center mb-2 text-gray-500">
                      {/* <span className="capitalize text-sm">{course.category}</span> */}
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900 text-center line-clamp-2 h-14 flex items-center justify-center">
                      {course.title}
                    </h3>
                    <div className="flex items-center justify-center mb-3">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0hA1XQ-BQxpGvqm-JrDRXhWDLqczIfze_3Q&s" alt={course.instructor} className="w-8 h-8 rounded-full mr-2" />
                      <span className="text-sm text-gray-700">{course.instructor}</span>
                    </div>
                    <div className="flex items-center justify-center mb-3">
                      <div className="flex items-center mr-4">
                        <Star size={16} className="text-amber-500 fill-amber-500" />
                        <span className="ml-1 text-sm font-medium">{course.rating}</span>
                        <span className="ml-1 text-xs text-gray-500">({course.students})</span>
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock size={14} className="mr-1" />
                        <span>5:00 AM</span>
                      </div>
                    </div>
                    <div className="mt-auto pt-3 border-t">
                      <div className="flex items-center justify-center text-sm mb-3 text-gray-600">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-center">Session on: {course.nextSession}</span>
                      </div>
                      <a href="https://magicwords.com.np/events"
                        className="block text-center py-2 rounded-md bg-blue-700 text-white"
                        target="_blank"
                        rel="noopener noreferrer">
                        Reserve Spot
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>


            <div className="text-center mt-10">
              <a
                href="https://magicwords.com.np/events"
                className="inline-flex items-center px-6 py-3 border border-blue-700 rounded-md font-medium text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Upcoming Classes <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 bg-gray-50">
          <HowItWorks />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-blue-50">
          <Testimonials />
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-blue-700 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "10,000+", label: "Happy Students" },
                { value: "100+", label: "Expert Tutors" },
                { value: "50+", label: "Live Courses" },
                { value: "95%", label: "Success Rate" }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <p className="text-white text-opacity-80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16">
          <FAQ />
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-green-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Master New Skills with Expert Guidance?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of students learning practical skills through our live, interactive classes.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="#courses" className="px-8 py-3 font-medium rounded-md bg-white text-green-600">
                  Explore Classes
                </a>
                <a href="#" className="px-8 py-3 font-medium rounded-md bg-green-700 text-white">
                  Sign Up Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Stay Updated with New Classes</h2>
              <p className="mb-6 text-gray-600">
                Subscribe to our newsletter to get notified about upcoming live classes and special offers.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-md border border-gray-300 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  className="px-6 py-3 rounded-md bg-blue-700 text-white"
                  onClick={handleSubscribe}
                  disabled={loading}
                >
                  {loading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
              {message && <p className="text-green-600 mt-2">{message}</p>}
              {error && <p className="text-red-600 mt-2">{error}</p>}
              <p className="text-xs mt-3 text-gray-500">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}