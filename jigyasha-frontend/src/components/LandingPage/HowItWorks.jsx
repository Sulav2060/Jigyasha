import {
    BookOpen, Award, Calendar, Video
} from "lucide-react"

const HowItWorks = () => {
    return (

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900">How Jigyasha Works</h2>
                <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-600">
                    Our simple process makes it easy to start learning with expert tutors in live, interactive sessions.
                </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
                {[
                    { icon: <BookOpen size={28} className="text-blue-700" />, title: "Browse Classes", desc: "Explore our catalog of live classes across various categories and topics." },
                    { icon: <Calendar size={28} className="text-blue-700" />, title: "Reserve Your Spot", desc: "Select a class and secure your place in upcoming live sessions." },
                    { icon: <Video size={28} className="text-blue-700" />, title: "Attend Live Classes", desc: "Join interactive sessions with real-time Q&A and personalized attention." },
                    { icon: <Award size={28} className="text-blue-700" />, title: "Master New Skills", desc: "Apply what you've learned with practical assignments and feedback." }
                ].map((step, index) => (
                    <div key={index} className="text-center">
                        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4 relative">
                            <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center font-bold bg-blue-700 text-white">
                                {index + 1}
                            </span>
                            {step.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                        <p className="text-gray-600">{step.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default HowItWorks