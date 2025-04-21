import {
    Users, Award, Video
} from "lucide-react"
const WhyJigyasha = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Why Choose Jigyasha?</h2>
                <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-600">
                    We're not just another online learning platform. We focus on live, interactive classes that deliver real
                    results.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-700">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-blue-100">
                        <Video className="text-blue-700" size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Live Interactive Classes</h3>
                    <p className="text-gray-600">
                        No pre-recorded content. Learn in real-time with instructors who answer your questions on the spot.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-600">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-green-100">
                        <Users className="text-green-600" size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Industry-Leading Experts</h3>
                    <p className="text-gray-600">
                        Learn from professionals with proven track records in their fields, not just theoretical knowledge.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-500">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-yellow-100">
                        <Award className="text-yellow-600" size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Practical Skills Focus</h3>
                    <p className="text-gray-600">
                        Our curriculum emphasizes real-world applications, not just concepts. Build skills you can use
                        immediately.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default WhyJigyasha;