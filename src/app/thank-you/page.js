"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

export default function ThankYou() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <Image
              src="https://theretailfactory.co.uk/wp-content/themes/theretailfactory/assets/images/Logo1.svg"
              alt="The Retail Factory"
              width={200}
              height={80}
              className="mx-auto bg-gray-900 rounded-lg p-2"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Thank You for Contacting Us
          </h1>

          <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-8">
            <p className="text-xl text-gray-700 font-primary mb-6">
              We appreciate you reaching out to The Retail Factory. Your message
              has been received, and one of our team members will be in touch
              with you shortly.
            </p>

            <div className="flex items-start justify-center mb-6">
              <span className="text-green-500 mr-2 text-xl">✔</span>
              <p className="text-gray-700 font-primary text-left">
                Your form has been successfully submitted
              </p>
            </div>

            <p className="text-gray-600 font-primary">
              If you have any urgent inquiries, please don&apos;t hesitate to
              call us directly.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-4">
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
          </div>
        </div>
      </div>
    </div>
  );
}
