"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function ThankYou() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Thank You for Contacting Us
          </motion.h1>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-gray-50 p-8 rounded-lg shadow-sm mb-8"
          >
            <p className="text-xl text-gray-700 font-primary mb-6">
              We appreciate you reaching out to The Visual Merchandiser. Your
              message has been received, and one of our team members will be in
              touch with you shortly.
            </p>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-start justify-center mb-6"
            >
              <span className="text-green-500 mr-2 text-xl">✔</span>
              <p className="text-gray-700 font-primary text-left">
                Your form has been successfully submitted
              </p>
            </motion.div>

            <p className="text-gray-600 font-primary">
              If you have any urgent inquiries, please don&apos;t hesitate to
              call us directly - <a href="tel:08000223237">0800 0223237</a>.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col md:flex-row justify-center gap-4"
          >
            <Link
              href="/"
              className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-colors"
            >
              Return to Homepage
            </Link>

            <Link
              href="/#contact"
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-medium hover:bg-gray-300 transition-colors"
            >
              Send Another Message
            </Link>
            <Link
              href="https://theretailfactory.co.uk"
              className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-colors"
            >
              Visit The Retail Factory
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
