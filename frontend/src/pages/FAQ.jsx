import React, { useState, useEffect } from 'react'
import TitleTextHome from '../components/TitleTextHome'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredFaqs, setFilteredFaqs] = useState([])

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

  useEffect(() => {
    setFilteredFaqs(
      faqData.filter(faq =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
  }, [searchTerm])

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gray-50  px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <TitleTextHome>Frequently Asked Questions</TitleTextHome>

        <div className="mb-10">

          <p className="text-gray-500 text-lg text-center mt-6 font-medium">
            Find answers to common questions about our healthcare platform and services.
          </p>
        </div>

        <div className="space-y-6">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md border border-primary-dull overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center   transition-colors duration-300 focus:outline-none  "
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-xl font-semibold text-primary pr-6">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-6 h-6 transform transition-transform duration-300 text-primary hover:text-white ${
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
                id={`faq-answer-${index}`}
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-6 pb-5 pt-3">
                  <div className="bg-indigo-50/50 rounded-lg p-5">
                    <p className="text-gray-600 leading-relaxed text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {filteredFaqs.length === 0 && (
            <div className="text-center text-gray-500 py-10 font-medium">
              No FAQs found matching your search.
            </div>
          )}
        </div>
{/* 
        <div className="mt-12 text-center bg-white rounded-2xl p-10 shadow-md border border-gray-100">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-500 mb-6 text-base">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-medium hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2">
              Contact Support
            </button>
            <button className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-full font-medium hover:bg-indigo-600 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2">
              Live Chat
            </button>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default FAQ