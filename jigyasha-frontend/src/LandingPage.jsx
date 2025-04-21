"use client"

import { useState, useEffect } from "react"
import { BookOpen, Users, Award, Calendar, ArrowRight, Menu, X, ChevronRight, Star, Video, Clock } from "lucide-react"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("all")
  const [featuredCourses, setFeaturedCourses] = useState([])

  // const categories = [
  //   { id: "all", name: "All Categories" },
  //   { id: "finance", name: "Finance & Investing" },
  //   { id: "marketing", name: "Digital Marketing" },
  //   { id: "freelancing", name: "Freelancing" },
  //   { id: "skills", name: "Life Skills" },
  // ]

  const testimonials = [
    {
      id: 1,
      name: "Arjun Singh",
      role: "Marketing Professional",
      content:
        "The digital marketing class completely transformed my career. The live interaction with the instructor made all the difference compared to pre-recorded courses I've tried before.",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      id: 2,
      name: "Neha Gupta",
      role: "Entrepreneur",
      content:
        "I was skeptical about online learning until I found Jigyasha. The stock market course was incredibly practical, and I could ask questions in real-time. Now I'm confidently managing my investments!",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      id: 3,
      name: "Rohan Kapoor",
      role: "Freelance Designer",
      content:
        "The freelancing course helped me transition from a 9-5 job to a successful freelance career. The instructor shared real-world strategies that you won't find in books.",
      image: "/placeholder.svg?height=80&width=80",
      rating: 4,
    },
  ]

  const filteredCourses =
    activeCategory === "all" ? featuredCourses : featuredCourses.filter((course) => course.category === activeCategory)

  // Fetch upcoming classes from the Django backend
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}posts`)
        const data = await response.json()
        console.log("Response:", data)
        setFeaturedCourses(data)
      } catch (error) {
        console.error("Failed to fetch courses:", error)
      }
    }

    fetchCourses()
  }, [])


  // Define colors directly instead of using CSS variables
  const colors = {
    primary: "#0066CC",
    primaryDark: "#004C99",
    secondary: "#00A651",
    secondaryDark: "#008542",
    accent: "#FFD700",
    accentDark: "#E6C200",
    dark: "#111111",
    white: "#FFFFFF",
    gray50: "#F9FAFB",
    gray100: "#F3F4F6",
    gray200: "#E5E7EB",
    gray300: "#D1D5DB",
    gray400: "#9CA3AF",
    gray500: "#6B7280",
    gray600: "#4B5563",
    gray700: "#374151",
    gray800: "#1F2937",
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <span className="text-2xl font-bold" style={{ color: colors.primary }}>
                  Jigyasha
                </span>
                <span className="ml-1 text-2xl" style={{ color: colors.accentDark }}>
                  .
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#courses"
                className="text-gray-800 hover:text-primary transition-colors"
                style={{ color: colors.dark, ":hover": { color: colors.primary } }}
              >
                Courses
              </a>
              <a
                href="#how-it-works"
                className="text-gray-800 hover:text-primary transition-colors"
                style={{ color: colors.dark, ":hover": { color: colors.primary } }}
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                className="text-gray-800 hover:text-primary transition-colors"
                style={{ color: colors.dark, ":hover": { color: colors.primary } }}
              >
                Testimonials
              </a>
              <a
                href="#faq"
                className="text-gray-800 hover:text-primary transition-colors"
                style={{ color: colors.dark, ":hover": { color: colors.primary } }}
              >
                FAQ
              </a>
            </nav>

            {/* <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="px-4 py-2 transition-colors" style={{ color: colors.primary }}>
                Log in
              </a>
              <a
                href="#"
                className="px-4 py-2 rounded-md transition-colors"
                style={{ backgroundColor: colors.primary, color: colors.white }}
              >
                Sign up
              </a>
            </div> */}

            {/* Mobile menu button */}
            <button className="md:hidden" style={{ color: colors.dark }} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4 space-y-3">
              <a
                href="#courses"
                className="block py-2 hover:text-primary"
                style={{ color: colors.dark }}
                onClick={() => setIsMenuOpen(false)}
              >
                Courses
              </a>
              <a
                href="#how-it-works"
                className="block py-2 hover:text-primary"
                style={{ color: colors.dark }}
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                className="block py-2 hover:text-primary"
                style={{ color: colors.dark }}
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#faq"
                className="block py-2 hover:text-primary"
                style={{ color: colors.dark }}
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <div className="pt-4 border-t flex flex-col space-y-3">
                <a
                  href="#"
                  className="py-2 text-center rounded-md border"
                  style={{ color: colors.primary, borderColor: colors.primary }}
                >
                  Log in
                </a>
                <a
                  href="#"
                  className="py-2 text-center rounded-md"
                  style={{ backgroundColor: colors.primary, color: colors.white }}
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section
          className="relative py-16 md:py-24"
          style={{
            background: `linear-gradient(to right, ${colors.primary}, ${colors.primaryDark})`,
            color: colors.white,
          }}
        >
          <div className="absolute inset-0 opacity-10 pattern-dots" style={{ backgroundColor: colors.dark }}></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div
                  className="inline-block px-3 py-1 rounded-full text-sm font-medium"
                  style={{ backgroundColor: colors.accent, color: colors.dark }}
                >
                  Live Interactive Classes
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Master Life Skills with Expert-Led <span style={{ color: colors.accent }}>Live Classes</span>
                </h1>
                <p className="text-lg md:text-xl opacity-90">
                  Join interactive live sessions with industry experts and learn practical skills in stock market,
                  digital marketing, freelancing, and more.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#courses"
                    className="px-6 py-3 font-medium rounded-md text-center transition-colors"
                    style={{ backgroundColor: colors.accent, color: colors.dark }}
                  >
                    Explore Courses
                  </a>
                  <a
                    href="#how-it-works"
                    className="px-6 py-3 font-medium rounded-md flex items-center justify-center transition-colors"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", color: colors.white }}
                  >
                    How It Works <ChevronRight size={18} className="ml-1" />
                  </a>
                </div>
                <div className="flex items-center space-x-6 pt-4">
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold">1,000+</span>
                    <span className="text-sm opacity-80">Happy Students</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold">10+</span>
                    <span className="text-sm opacity-80">Expert Tutors</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold">10+</span>
                    <span className="text-sm opacity-80">Live Courses</span>
                  </div>
                </div>
              </div>
              <div className="relative hidden md:block">
                <div
                  className="absolute -top-6 -left-6 w-24 h-24 rounded-lg opacity-20"
                  style={{ backgroundColor: colors.accent }}
                ></div>
                <div
                  className="absolute -bottom-6 -right-6 w-24 h-24 rounded-lg opacity-20"
                  style={{ backgroundColor: colors.secondary }}
                ></div>
                <div className="relative bg-white p-2 rounded-lg shadow-xl">
                  <img
                    src="/placeholder.svg?height=400&width=500"
                    alt="Live class in session"
                    className="rounded w-full"
                  />
                  <div
                    className="absolute bottom-6 left-6 right-6 p-4 rounded-lg shadow-lg"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.9)", backdropFilter: "blur(4px)" }}
                  >
                    <div className="flex items-center">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: colors.primary, color: colors.white }}
                      >
                        <Video size={20} />
                      </div>
                      <div className="ml-3">
                        <p className="font-medium" style={{ color: colors.dark }}>
                          Live Class in Progress
                        </p>
                        <p className="text-sm" style={{ color: colors.gray600 }}>
                          Stock Market Fundamentals
                        </p>
                      </div>
                      <div className="ml-auto">
                        <span
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                          style={{ backgroundColor: "rgba(239, 68, 68, 0.1)", color: "rgb(185, 28, 28)" }}
                        >
                          <span
                            className="w-2 h-2 mr-1.5 rounded-full animate-pulse"
                            style={{ backgroundColor: "rgb(239, 68, 68)" }}
                          ></span>
                          LIVE
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16" style={{ backgroundColor: colors.gray50 }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold" style={{ color: colors.dark }}>
                Why Choose Jigyasha?
              </h2>
              <p className="mt-4 text-lg max-w-3xl mx-auto" style={{ color: colors.gray600 }}>
                We're not just another online learning platform. We focus on live, interactive classes that deliver real
                results.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4" style={{ borderColor: colors.primary }}>
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(0, 102, 204, 0.1)" }}
                >
                  <Video style={{ color: colors.primary }} size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: colors.dark }}>
                  Live Interactive Classes
                </h3>
                <p style={{ color: colors.gray600 }}>
                  No pre-recorded content. Learn in real-time with instructors who answer your questions on the spot.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-t-4" style={{ borderColor: colors.secondary }}>
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(0, 166, 81, 0.1)" }}
                >
                  <Users style={{ color: colors.secondary }} size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: colors.dark }}>
                  Industry-Leading Experts
                </h3>
                <p style={{ color: colors.gray600 }}>
                  Learn from professionals with proven track records in their fields, not just theoretical knowledge.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-t-4" style={{ borderColor: colors.accent }}>
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(255, 215, 0, 0.1)" }}
                >
                  <Award style={{ color: colors.accentDark }} size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: colors.dark }}>
                  Practical Skills Focus
                </h3>
                <p style={{ color: colors.gray600 }}>
                  Our curriculum emphasizes real-world applications, not just concepts. Build skills you can use
                  immediately.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Courses Section */}
        <section id="courses" className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold" style={{ color: colors.dark }}>
                Featured Live Classes
              </h2>
              <p className="mt-4 text-lg max-w-3xl mx-auto" style={{ color: colors.gray600 }}>
                Browse our upcoming live sessions and reserve your spot today.
              </p>
            </div>

            {/* Category Filter */}
            {/* <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-colors"
                  style={
                    activeCategory === category.id
                      ? { backgroundColor: colors.primary, color: colors.white }
                      : { backgroundColor: colors.gray100, color: colors.gray700 }
                  }
                >
                  {category.name}
                </button>
              ))}
            </div> */}

            {/* Courses Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <div
                      className="absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded"
                      style={{ backgroundColor: colors.accent, color: colors.dark }}
                    >
                      LIVE CLASS
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center text-sm mb-2" style={{ color: colors.gray500 }}>
                      <span className="capitalize">{course.category}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: colors.dark }}>
                      {course.title}
                    </h3>
                    <div className="flex items-center mb-3">
                      <img
                        src="/placeholder.svg?height=32&width=32"
                        alt={course.instructor}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <span className="text-sm" style={{ color: colors.gray700 }}>
                        {course.instructor}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <Star size={16} style={{ color: "#F59E0B", fill: "#F59E0B" }} />
                        <span className="ml-1 text-sm font-medium">{course.rating}</span>
                        <span className="ml-1 text-xs" style={{ color: colors.gray500 }}>
                          ({course.students})
                        </span>
                      </div>
                      <div className="flex items-center text-xs" style={{ color: colors.gray500 }}>
                        <Clock size={14} className="mr-1" />
                        <span>8 Sessions</span>
                      </div>
                    </div>
                    <div className="pt-3 border-t">
                      <div className="flex items-center text-sm mb-3" style={{ color: colors.gray600 }}>
                        <Calendar size={16} className="mr-2" />
                        Next Session: {course.nextSession}
                      </div>
                      <a
                        href="#"
                        className="block text-center py-2 rounded-md transition-colors"
                        style={{ backgroundColor: colors.primary, color: colors.white }}
                      >
                        Reserve Spot
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 border rounded-md font-medium transition-colors"
                style={{ borderColor: colors.primary, color: colors.primary }}
              >
                View All Classes <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16" style={{ backgroundColor: colors.gray50 }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold" style={{ color: colors.dark }}>
                How Jigyasha Works
              </h2>
              <p className="mt-4 text-lg max-w-3xl mx-auto" style={{ color: colors.gray600 }}>
                Our simple process makes it easy to start learning with expert tutors in live, interactive sessions.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative"
                  style={{ backgroundColor: "rgba(0, 102, 204, 0.1)" }}
                >
                  <span
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center font-bold"
                    style={{ backgroundColor: colors.primary, color: colors.white }}
                  >
                    1
                  </span>
                  <BookOpen style={{ color: colors.primary }} size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: colors.dark }}>
                  Browse Classes
                </h3>
                <p style={{ color: colors.gray600 }}>
                  Explore our catalog of live classes across various categories and topics.
                </p>
              </div>

              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative"
                  style={{ backgroundColor: "rgba(0, 102, 204, 0.1)" }}
                >
                  <span
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center font-bold"
                    style={{ backgroundColor: colors.primary, color: colors.white }}
                  >
                    2
                  </span>
                  <Calendar style={{ color: colors.primary }} size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: colors.dark }}>
                  Reserve Your Spot
                </h3>
                <p style={{ color: colors.gray600 }}>Select a class and secure your place in upcoming live sessions.</p>
              </div>

              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative"
                  style={{ backgroundColor: "rgba(0, 102, 204, 0.1)" }}
                >
                  <span
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center font-bold"
                    style={{ backgroundColor: colors.primary, color: colors.white }}
                  >
                    3
                  </span>
                  <Video style={{ color: colors.primary }} size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: colors.dark }}>
                  Attend Live Classes
                </h3>
                <p style={{ color: colors.gray600 }}>
                  Join interactive sessions with real-time Q&A and personalized attention.
                </p>
              </div>

              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative"
                  style={{ backgroundColor: "rgba(0, 102, 204, 0.1)" }}
                >
                  <span
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center font-bold"
                    style={{ backgroundColor: colors.primary, color: colors.white }}
                  >
                    4
                  </span>
                  <Award style={{ color: colors.primary }} size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: colors.dark }}>
                  Master New Skills
                </h3>
                <p style={{ color: colors.gray600 }}>
                  Apply what you've learned with practical assignments and feedback.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16" style={{ backgroundColor: "rgba(0, 102, 204, 0.05)" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold" style={{ color: colors.dark }}>
                What Our Students Say
              </h2>
              <p className="mt-4 text-lg max-w-3xl mx-auto" style={{ color: colors.gray600 }}>
                Hear from people who have transformed their skills and careers with Jigyasha.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        style={{
                          color: i < testimonial.rating ? "#F59E0B" : colors.gray300,
                          fill: i < testimonial.rating ? "#F59E0B" : "none",
                        }}
                        className="mr-1"
                      />
                    ))}
                  </div>
                  <p className="mb-6" style={{ color: colors.gray700 }}>
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-bold" style={{ color: colors.dark }}>
                        {testimonial.name}
                      </h4>
                      <p className="text-sm" style={{ color: colors.gray600 }}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16" style={{ backgroundColor: colors.primary, color: colors.white }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">10,000+</div>
                <p style={{ color: "rgba(255, 255, 255, 0.8)" }}>Happy Students</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100+</div>
                <p style={{ color: "rgba(255, 255, 255, 0.8)" }}>Expert Tutors</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <p style={{ color: "rgba(255, 255, 255, 0.8)" }}>Live Courses</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">95%</div>
                <p style={{ color: "rgba(255, 255, 255, 0.8)" }}>Success Rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold" style={{ color: colors.dark }}>
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-lg max-w-3xl mx-auto" style={{ color: colors.gray600 }}>
                Find answers to common questions about our live classes and learning experience.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold mb-3" style={{ color: colors.dark }}>
                    How are Jigyasha classes different from pre-recorded courses?
                  </h3>
                  <p style={{ color: colors.gray600 }}>
                    Jigyasha offers live, interactive classes where you can engage directly with instructors in
                    real-time. You can ask questions, participate in discussions, and receive personalized feedback,
                    creating a more engaging and effective learning experience.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold mb-3" style={{ color: colors.dark }}>
                    What happens if I miss a live class?
                  </h3>
                  <p style={{ color: colors.gray600 }}>
                    While we encourage attending live for the best experience, we understand schedules can be
                    challenging. All registered students receive access to class recordings for a limited time. However,
                    the interactive Q&A and personalized attention are only available during live sessions.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold mb-3" style={{ color: colors.dark }}>
                    Who are the instructors at Jigyasha?
                  </h3>
                  <p style={{ color: colors.gray600 }}>
                    Our instructors are industry professionals with proven expertise in their fields. We carefully
                    select tutors who not only have deep knowledge but also excellent teaching abilities and a passion
                    for helping others learn practical skills.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold mb-3" style={{ color: colors.dark }}>
                    Do I need any special equipment to attend classes?
                  </h3>
                  <p style={{ color: colors.gray600 }}>
                    You only need a reliable internet connection and a device (computer, tablet, or smartphone) with
                    audio and video capabilities. Some specialized courses might require specific software, which will
                    be clearly mentioned in the course description.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16" style={{ backgroundColor: colors.secondary, color: colors.white }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Master New Skills with Expert Guidance?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of students learning practical skills through our live, interactive classes.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="#courses"
                  className="px-8 py-3 font-medium rounded-md transition-colors"
                  style={{ backgroundColor: colors.white, color: colors.secondary }}
                >
                  Explore Classes
                </a>
                <a
                  href="#"
                  className="px-8 py-3 font-medium rounded-md transition-colors"
                  style={{ backgroundColor: colors.secondaryDark, color: colors.white }}
                >
                  Sign Up Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-12" style={{ backgroundColor: colors.gray50 }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4" style={{ color: colors.dark }}>
                Stay Updated with New Classes
              </h2>
              <p className="mb-6" style={{ color: colors.gray600 }}>
                Subscribe to our newsletter to get notified about upcoming live classes and special offers.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-md border flex-grow focus:outline-none"
                  style={{ borderColor: colors.gray300 }}
                />
                <button
                  className="px-6 py-3 rounded-md transition-colors"
                  style={{ backgroundColor: colors.primary, color: colors.white }}
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs mt-3" style={{ color: colors.gray500 }}>
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="pt-12 pb-6" style={{ backgroundColor: colors.dark, color: colors.white }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <a href="/" className="flex items-center mb-4">
                <span className="text-2xl font-bold">Jigyasha</span>
                <span className="ml-1 text-2xl" style={{ color: colors.accentDark }}>
                  .
                </span>
              </a>
              <p className="mb-4" style={{ color: colors.gray400 }}>
                Empowering individuals with practical skills through live, interactive classes led by industry experts.
              </p>
              <div className="flex space-x-4">
                <a href="#" style={{ color: colors.gray400 }} className="hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a href="#" style={{ color: colors.gray400 }} className="hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" style={{ color: colors.gray400 }} className="hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a href="#" style={{ color: colors.gray400 }} className="hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" style={{ color: colors.gray400 }} className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#courses" style={{ color: colors.gray400 }} className="hover:text-white transition-colors">
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    style={{ color: colors.gray400 }}
                    className="hover:text-white transition-colors"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    style={{ color: colors.gray400 }}
                    className="hover:text-white transition-colors"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#faq" style={{ color: colors.gray400 }} className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" style={{ color: colors.gray400 }} className="hover:text-white transition-colors">
                    Finance & Investing
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: colors.gray400 }} className="hover:text-white transition-colors">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: colors.gray400 }} className="hover:text-white transition-colors">
                    Freelancing
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: colors.gray400 }} className="hover:text-white transition-colors">
                    Life Skills
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: colors.gray400 }} className="hover:text-white transition-colors">
                    View All
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span style={{ color: colors.gray400 }} className="mr-2">
                    <svg
                      className="w-5 h-5 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </span>
                  <span style={{ color: colors.gray400 }}>support@jigyasha.com</span>
                </li>
                <li className="flex items-start">
                  <span style={{ color: colors.gray400 }} className="mr-2">
                    <svg
                      className="w-5 h-5 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                  </span>
                  <span style={{ color: colors.gray400 }}>+91 9876543210</span>
                </li>
                <li className="flex items-start">
                  <span style={{ color: colors.gray400 }} className="mr-2">
                    <svg
                      className="w-5 h-5 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </span>
                  <span style={{ color: colors.gray400 }}>Mumbai, India</span>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="border-t pt-6 flex flex-col md:flex-row justify-between items-center"
            style={{ borderColor: colors.gray800 }}
          >
            <p className="text-sm" style={{ color: colors.gray400 }}>
              &copy; {new Date().getFullYear()} Jigyasha Learning. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm hover:text-white transition-colors" style={{ color: colors.gray400 }}>
                Privacy Policy
              </a>
              <a href="#" className="text-sm hover:text-white transition-colors" style={{ color: colors.gray400 }}>
                Terms of Service
              </a>
              <a href="#" className="text-sm hover:text-white transition-colors" style={{ color: colors.gray400 }}>
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
