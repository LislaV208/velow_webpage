import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with Velow"
        image="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-gray-900 p-3 rounded-full">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-400">contact@velow.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-gray-900 p-3 rounded-full">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-400">+48 123 456 789</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-gray-900 p-3 rounded-full">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-gray-400">Warsaw, Poland</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4">For Business Inquiries</h3>
              <p className="text-gray-400">
                For booking, press, or any other business inquiries, please use the contact
                form or email us directly at business@velow.com
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;