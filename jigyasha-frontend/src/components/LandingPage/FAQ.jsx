const FAQ = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-600">
            Find answers to common questions about our live classes and learning experience.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {[
              {
                question: "How are Jigyasha classes different from pre-recorded courses?",
                answer: "Jigyasha offers live, interactive classes where you can engage directly with instructors in real-time. You can ask questions, participate in discussions, and receive personalized feedback, creating a more engaging and effective learning experience."
              },
              {
                question: "What happens if I miss a live class?",
                answer: "While we encourage attending live for the best experience, we understand schedules can be challenging. All registered students receive access to class recordings for a limited time. However, the interactive Q&A and personalized attention are only available during live sessions."
              },
              {
                question: "Who are the instructors at Jigyasha?",
                answer: "Our instructors are industry professionals with proven expertise in their fields. We carefully select tutors who not only have deep knowledge but also excellent teaching abilities and a passion for helping others learn practical skills."
              },
              {
                question: "Do I need any special equipment to attend classes?",
                answer: "You only need a reliable internet connection and a device (computer, tablet, or smartphone) with audio and video capabilities. Some specialized courses might require specific software, which will be clearly mentioned in the course description."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold mb-3 text-gray-900">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}
export default FAQ;