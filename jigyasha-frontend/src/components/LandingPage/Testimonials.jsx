import { Star } from "lucide-react"

const testimonials = [
    {
        id: 1,
        name: "Arjun Karki",
        role: "Marketing Professional",
        content: "The digital marketing class completely transformed my career. The live interaction with the instructor made all the difference compared to pre-recorded courses I've tried before.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0hA1XQ-BQxpGvqm-JrDRXhWDLqczIfze_3Q&s",
        rating: 5,
    },
    {
        id: 2,
        name: "Neha Poudel",
        role: "Entrepreneur",
        content: "I was skeptical about online learning until I found Jigyasha. The stock market course was incredibly practical, and I could ask questions in real-time. Now I'm confidently managing my investments!",
        image: "https://media.istockphoto.com/id/1177794485/vector/person-gray-photo-placeholder-woman.jpg?s=612x612&w=0&k=20&c=B41l9xgyu4bR63vPqt49mKZIRGh8ewpewN7zXnYPOsI=",
        rating: 5,
    },
    {
        id: 3,
        name: "Rohan Pun",
        role: "Freelance Designer",
        content: "The freelancing course helped me transition from a 9-5 job to a successful freelance career. The instructor shared real-world strategies that you won't find in books.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0hA1XQ-BQxpGvqm-JrDRXhWDLqczIfze_3Q&s",
        rating: 4,
    },
]

const Testimonials = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">What Our Students Say</h2>
                <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-600">
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
                                    className={`mr-1 ${i < testimonial.rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`}
                                />
                            ))}
                        </div>
                        <p className="mb-6 text-gray-700">"{testimonial.content}"</p>
                        <div className="flex items-center">
                            <img
                                src={testimonial.image || "/placeholder.svg"}
                                alt={testimonial.name}
                                className="w-12 h-12 rounded-full mr-4"
                            />
                            <div>
                                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                <p className="text-sm text-gray-600">{testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Testimonials