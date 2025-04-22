import { ChevronRight, Video } from "lucide-react"

const Hero = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-yellow-500 text-gray-900">
                        Live Interactive Classes
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Master Life Skills with Expert-Led <span className="text-yellow-500">Live Classes</span>
                    </h1>
                    <p className="text-lg md:text-xl opacity-90">
                        Join interactive live sessions with industry experts and learn practical skills in stock market,
                        digital marketing, freelancing, and more.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#courses" className="px-6 py-3 font-medium rounded-md text-center bg-yellow-500 text-gray-900">
                            Explore Courses
                        </a>
                        <a href="#how-it-works" className="px-6 py-3 font-medium rounded-md flex items-center justify-center bg-white bg-opacity-10 text-black">
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
                    <div className="absolute -top-6 -left-6 w-24 h-24 rounded-lg bg-yellow-500 opacity-20"></div>
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-lg bg-green-500 opacity-20"></div>
                    <div className="relative bg-white p-2 rounded-lg shadow-xl">
                        <img src="https://i.ibb.co/ZpzgJfwS/j.jpg" alt="Live class in session" className="rounded w-full" />
                       {/* <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg shadow-lg bg-white bg-opacity-90 backdrop-blur-sm">
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-700 text-white">
                                    <Video size={20} />
                                </div>
                                <div className="ml-3">
                                    <p className="font-medium text-gray-900">Live Class in Progress</p>
                                    <p className="text-sm text-gray-600">Stock Market Fundamentals</p>
                                </div>
                                <div className="ml-auto">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                        <span className="w-2 h-2 mr-1.5 rounded-full bg-red-600 animate-pulse"></span>
                                        LIVE
                                    </span>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Hero;