import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What makes UNIQ different from other training institutes?",
    answer:
      "UNIQ offers 100% placement assurance within 100 days, led by expert trainers with real-world industry experience. Our focus is on outcomes—skills, confidence, and jobs—not just teaching.",
  },
  {
    question: "What is the “Pay After Placement” model?",
    answer:
      "You only pay your placement fee after you secure a job. We remove the pressure of upfront fees so you can focus on learning and growing.",
  },
  {
    question: "Can I join your training program if I have a career or academic gap?",
    answer:
      "Absolutely. Many of our students have career gaps for various reasons. We provide personalized mentorship and project-based training to help you rebuild your confidence and prepare for industry roles.",
  },
  {
    question: "Is 100% placement really guaranteed within 100 days?",
    answer:
      "Yes. With our structured training, 180+ hiring partners, and expert mentorship, we guarantee placement within 100 days after course completion.",
  },
  {
    question: "Who are your hiring partners?",
    answer:
      "Our top hiring partners include MNCs like TCS, Accenture, Infosys, and more than 180+ companies across India.",
  },
  {
    question: "What kind of training formats do you offer?",
    answer:
      "We offer: Classroom Training (offline), Online Training (live & recorded), and Direct Placement for skilled candidates without training.",
  },
  {
    question: "How does the Direct Placement process work?",
    answer:
      "1. Submit your resume and skill portfolio\n2. Take a personal assessment\n3. Get shortlisted by companies\n4. Attend direct interviews",
  },
  {
    question: "What if I’m a complete fresher with no experience?",
    answer:
      "Our programs are designed for freshers. We start from the basics and help you become industry-ready with real-time projects, mock interviews, and mentoring.",
  },
  {
    question: "How many students have been placed so far?",
    answer:
      "Over 25,000 students have successfully launched their careers through UNIQ’s training and placement programs.",
  },
  {
    question: "Is UNIQ certified or recognized?",
    answer:
      "Yes. UNIQ is ISO 9001:2015 certified, a NASSCOM member, and is backed by industry experts from TCS with 180+ hiring partners.",
  },
  {
    question: "What types of courses are offered?",
    answer:
      "We offer full stack development, Spring Boot, Java, DevOps, Cloud, and Microservices courses—all designed to be practical and placement-oriented.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold font-primary mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-md overflow-hidden">
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`px-6 text-gray-700 transition-all duration-300 overflow-hidden ${
                openIndex === index ? "max-h-96 py-4" : "max-h-0"
              }`}
            >
              <p className="whitespace-pre-line">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
