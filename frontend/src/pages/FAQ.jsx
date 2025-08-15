import React, { useState } from 'react'
import TitleTextHome from '../components/TitleTextHome'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqData = [
    {
      question: "How do I book an appointment with a doctor?",
      answer: "You can easily book an appointment by browsing through our list of doctors, selecting your preferred doctor, choosing an available time slot, and confirming your booking. You can also search for doctors by specialty or location to find the best match for your needs."
    },
    {
      question: "Can I cancel or reschedule my appointment?",
      answer: "Yes, you can cancel or reschedule your appointment up to 24 hours before the scheduled time. Simply go to 'My Appointments' section in your profile and select the appointment you want to modify. Please note that cancellations made less than 24 hours in advance may be subject to a cancellation fee."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit cards, debit cards, online banking, and digital wallets. You can pay online during the booking process or pay at the clinic during your visit. All online payments are secured with SSL encryption for your safety."
    },
    {
      question: "How do I find doctors by specialty?",
      answer: "You can filter doctors by specialty using our search feature on the 'All Doctors' page. We have specialists in cardiology, dermatology, pediatrics, orthopedics, gynecology, and many other medical fields. You can also use the location filter to find specialists near you."
    },
    {
      question: "Is my personal and medical information secure?",
      answer: "Absolutely. We take your privacy very seriously and use industry-standard security measures to protect your personal and medical information. All data is encrypted and stored securely. We comply with healthcare privacy regulations and never share your information without your consent."
    },
    {
      question: "Can I get a prescription online?",
      answer: "Online prescriptions can be provided for certain conditions after a proper consultation with our doctors. However, some medications may require an in-person examination. Our doctors will determine the best course of action during your consultation and provide prescriptions accordingly."
    },
    {
      question: "What should I do if I'm late for my appointment?",
      answer: "If you're running late, please call the clinic as soon as possible to inform them. Depending on the doctor's schedule, they may be able to accommodate you with a short delay. However, if you're significantly late, you may need to reschedule your appointment."
    },
    {
      question: "Do you offer telemedicine consultations?",
      answer: "Yes, we offer telemedicine consultations for suitable cases. This allows you to consult with doctors from the comfort of your home. During booking, you can choose between in-person visits or online consultations based on your preference and the doctor's availability."
    },
    {
      question: "How can I access my medical records?",
      answer: "You can access your medical records through your patient portal in the 'My Profile' section. This includes your consultation history, prescriptions, test results, and treatment plans. You can also request physical copies of your records if needed."
    },
    {
      question: "What if I need emergency medical care?",
      answer: "For medical emergencies, please call emergency services immediately or go to the nearest emergency room. Our platform is designed for scheduled consultations and non-emergency medical care. In case of urgent but non-emergency situations, some of our doctors offer same-day appointments."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div>
      <TitleTextHome>Frequently Asked Questions</TitleTextHome>
      
      <div className="mt-6 max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <p className="text-zinc-600 text-lg">
            Find answers to common questions about our healthcare platform and services.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-primary overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-primary hover:text-white cursor-pointer transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-neutral-800 hover:text-white pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-5 h-5 transform transition-all duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-6 pb-4 pt-2">
                  <div className="bg-primary/10 rounded-lg p-4">
                    <p className="text-zinc-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gray-50 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-neutral-800 mb-3">
            Still have questions?
          </h3>
          <p className="text-zinc-600 mb-4">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200">
              Contact Support
            </button>
            <button className="border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-all duration-200">
              Live Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ