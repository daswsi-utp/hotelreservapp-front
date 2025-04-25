import React, { useState } from 'react';
import { 
  HelpCircle, 
  Book, 
  MessageCircle, 
  Phone,
  Mail,
  ChevronDown,
  ExternalLink,
  Search
} from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do I create a new reservation?",
    answer: "To create a new reservation, go to the Reservations page and click the 'New Reservation' button. Fill in the guest details, select the room, and specify the check-in/out dates.",
    category: "Reservations"
  },
  {
    question: "What should I do if a guest wants to extend their stay?",
    answer: "To extend a guest's stay, locate their reservation in the system, click 'Edit', and modify the check-out date. The system will automatically check room availability and update the billing.",
    category: "Reservations"
  },
  {
    question: "How do I mark a room as under maintenance?",
    answer: "Navigate to Room Management, find the specific room, click 'Edit', and change the status to 'Maintenance'. Add any relevant notes about the maintenance required.",
    category: "Rooms"
  },
  {
    question: "How can I generate reports?",
    answer: "Access the Reports section from the dashboard. Select the type of report (occupancy, revenue, etc.), specify the date range, and click 'Generate Report'.",
    category: "Reports"
  },
  {
    question: "How do I reset my password?",
    answer: "Click on your profile picture, select 'Settings', and choose 'Change Password'. Enter your current password and your new password twice to confirm.",
    category: "Account"
  }
];

const Help: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...new Set(faqs.map(faq => faq.category))];

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Help & Support</h1>
        <p className="mt-1 text-sm text-gray-600">Find answers to common questions and get support</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Search and Filters */}
          <div className="bg-white rounded-lg shadow-card p-6">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search help articles..."
                className="form-input pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary-100 text-primary-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div className="bg-white rounded-lg shadow-card overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900 flex items-center">
                <HelpCircle className="h-5 w-5 mr-2 text-primary-600" />
                Frequently Asked Questions
              </h2>
            </div>
            <div className="divide-y divide-gray-200">
              {filteredFAQs.map((faq) => (
                <div key={faq.question} className="p-6">
                  <button
                    onClick={() => setExpandedQuestion(
                      expandedQuestion === faq.question ? null : faq.question
                    )}
                    className="w-full text-left flex justify-between items-start"
                  >
                    <span className="text-gray-900 font-medium">{faq.question}</span>
                    <ChevronDown className={`h-5 w-5 text-gray-500 transform transition-transform ${
                      expandedQuestion === faq.question ? 'rotate-180' : ''
                    }`} />
                  </button>
                  {expandedQuestion === faq.question && (
                    <p className="mt-4 text-gray-600">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">

          {/* Contact Support */}
          <div className="bg-white rounded-lg shadow-card p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <MessageCircle className="h-5 w-5 mr-2 text-primary-600" />
              Contact Support
            </h2>
            <div className="space-y-4">
              <div className="flex items-center text-gray-700">
                <Phone className="h-5 w-5 mr-2 text-gray-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Mail className="h-5 w-5 mr-2 text-gray-400" />
                <span>support@hotel.com</span>
              </div>
              <button className="btn btn-primary w-full justify-center">
                Open Support Ticket
              </button>
            </div>
          </div>

          {/* Support Hours */}
          <div className="bg-white rounded-lg shadow-card p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Support Hours</h2>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Monday - Friday: 9:00 AM - 8:00 PM EST</p>
              <p>Saturday: 10:00 AM - 6:00 PM EST</p>
              <p>Sunday: 12:00 PM - 5:00 PM EST</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;