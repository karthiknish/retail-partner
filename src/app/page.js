"use client"
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [source, setSource] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = () => {
    // Validate required fields
    // Check each field individually and show specific validation messages
    if (!firstName) {
      setError("Please enter your first name");
      return;
    }
    if (!lastName) {
      setError("Please enter your last name");
      return;
    }
    if (!email) {
      setError("Please enter your email address");
      return;
    }
    if (!phone) {
      setError("Please enter your phone number");
      return;
    }
    if (!message) {
      setError("Please enter your message");
      return;
    }

    // Prepare data for API
    const formData = {
      form_id: 1,
      form_data: {
        1.3: {
          field_name: "Name (First)",
          field_value: firstName,
          field_type: "name",
        },
        1.6: {
          field_name: "Name (Last)",
          field_value: lastName,
          field_type: "name",
        },
        7: {
          field_name: "Phone",
          field_value: phone,
          field_type: "phone",
        },
        3: {
          field_name: "Email",
          field_value: email,
          field_type: "email",
        },
        4: {
          field_name: "Message",
          field_value: message,
          field_type: "textarea",
        },
        6: {
          field_name: "How Did You Hear About Us?",
          field_value: source,
          field_type: "select",
        },
      },
    };

    // Send data to API
    fetch("https://theretailfactory.co.uk/wp-json/weboforms/v1/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        window.location.href = "/thank-you";
        // Reset form fields
        setFirstName("");
        setLastName("");
        setPhone("");
        setEmail("");
        setMessage("");
        setSource("");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert(
          "There was a problem submitting your form. Please try again later."
        );
      });
  };
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gray-50 py-20 relative h-screen">
          <video
            autoPlay
            muted
            style={{ filter: "brightness(0.5)" }}
            className="absolute inset-0 w-full h-full object-cover z-0"
            loop
            playsInline
            src="https://theretailfactory.co.uk/wp-content/uploads/2025/03/hero-landing.mp4"
          ></video>

          <div className="container relative z-10 mx-auto px-4 py-6 flex flex-col items-center justify-center h-full">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl font-bold text-white text-center mb-8"
            >
              Source Store Deliver
            </motion.h1>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              href="#contact"
              className="bg-primary font-primary text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-colors text-center mx-auto"
            >
              Partner with us
            </motion.a>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="md:hidden text-white mt-4 mx-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </motion.button>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 relative">
          <div
            className="absolute inset-0 bg-cover w-full h-full bg-center"
            style={{
              filter: "brightness(0.5)",
              backgroundImage:
                "url('https://theretailfactory.co.uk/wp-content/uploads/2025/03/section-back.png')",
            }}
          ></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-white mb-12 text-center"
            >
              Our Solutions
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Source Box */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md relative flex flex-col h-full"
              >
                <h3 className="text-2xl font-semibold mb-4 text-center text-black">
                  Source
                </h3>
                <ul className="space-y-2 mb-6 flex-grow">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔</span>
                    <span className="text-gray-700 font-primary">
                      Consolidating your order process
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔</span>
                    <span className="text-gray-700 font-primary">
                      Save hassle of dealing with multiple suppliers
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔</span>
                    <span className="text-gray-700 font-primary">
                      Significant cost savings
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔</span>
                    <span className="text-gray-700 font-primary">
                      Reduce your financial outlay on the project
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔</span>
                    <span className="text-gray-700 font-primary">
                      One point of contact for all matters
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔</span>
                    <span className="text-gray-700 font-primary">
                      Invoicing and administration streamlined
                    </span>
                  </li>
                </ul>
                <div className="text-center mt-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => (window.location.href = "#contact")}
                    className="cursor-pointer bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-red-700 transition-colors w-full"
                  >
                    Enquire
                  </motion.button>
                </div>
              </motion.div>

              {/* Store Box */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-md relative flex flex-col h-full"
              >
                <h3 className="text-2xl font-semibold mb-4 text-center text-black">
                  Store
                </h3>
                <ul className="space-y-2 mb-6 flex-grow">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔</span>
                    <span className="text-gray-700 font-primary">
                      Central storage point for all your items
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔</span>
                    <span className="text-gray-700 font-primary">
                      Delivered direct to our warehouse
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔</span>
                    <span className="text-gray-700 font-primary">
                      Stored until needed
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔</span>
                    <span className="text-gray-700 font-primary">
                      Deliveries unpacked, checked & inventoried
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔</span>
                    <span className="text-gray-700 font-primary">
                      Picked and packed on a store by store basis
                    </span>
                  </li>
                </ul>
                <div className="text-center mt-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => (window.location.href = "#contact")}
                    className="cursor-pointer bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-red-700 transition-colors w-full"
                  >
                    Enquire
                  </motion.button>
                </div>
              </motion.div>

              {/* Deliver Box */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white relative p-6 rounded-lg shadow-md flex flex-col h-full"
              >
                <h3 className="text-2xl font-semibold mb-4 text-center text-black">
                  Deliver
                </h3>
                <ul className="space-y-2 flex-grow">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔</span>
                    <span className="text-gray-700 font-primary">
                      Delivering on demand
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔</span>
                    <span className="text-gray-700 font-primary">
                      No ordering in bulk
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔</span>
                    <span className="text-gray-700 font-primary">
                      Distributing to stores, only when required
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔</span>
                    <span className="text-gray-700 font-primary">
                      Fewer deliveries
                    </span>
                  </li>
                </ul>
                <div className="text-center mt-auto pt-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => (window.location.href = "#contact")}
                    className="cursor-pointer bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-red-700 transition-colors w-full"
                  >
                    Enquire
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Visual Merchandiser Section */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Column - Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <h2 className="text-4xl font-bold mb-6">
                    Visual Merchandiser by TRF
                  </h2>
                  <p className="mb-4">
                    We provide a unique source, store, deliver service to
                    companies looking to open new stores, refurbish existing
                    ones, replenish stock, or set up temporary pop-up shops.
                  </p>
                  <p className="mb-4">
                    We appreciate that sourcing products can be very
                    time-consuming and costly.
                  </p>
                  <p className="mb-4">
                    Our aim is to alleviate unnecessary stress and costs by
                    designing a bespoke order pad tailored to your individual
                    requirements and needs. This can be adapted for use by one
                    or multiple stores/pop-up shops.
                  </p>
                  <p className="mb-4">
                    We provide a 25,000 sq ft warehouse and distribution centre
                    that delivers throughout the UK and overseas. We will hold
                    and deliver your pallet at your chosen delivery date, and if
                    the date is put on hold, we will happily store and deliver
                    the pallet upon your advice.
                  </p>
                  <p className="mb-6">
                    Once you have received the pallet, your accounts department
                    will receive only one invoice, making the whole transition
                    from the initial order to the delivery smooth, timely, and
                    cost-effective.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => (window.location.href = "#contact")}
                    className="cursor-pointer bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-red-700 transition-colors w-full"
                  >
                    Enquire
                  </motion.button>
                </motion.div>

                {/* Right Column - Product Lists */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="space-y-8"
                >
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">
                      We provide over 5,000 Retail Items, including:
                    </h3>
                    <ul className="space-y-2 font-primary">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✔</span>
                        <span>Retail Displays</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✔</span>
                        <span>Fixtures & Fittings</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✔</span>
                        <span>Mannequins</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✔</span>
                        <span>Garment Rails</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✔</span>
                        <span>Coat Hangers</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✔</span>
                        <span>POS/Sale Items</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4">
                      We provide over 35,000 Office and Back-of-House Items,
                      including:
                    </h3>
                    <ul className="space-y-2 font-primary">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✔</span>
                        <span>Kettles</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✔</span>
                        <span>Microwaves</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✔</span>
                        <span>Cleaning & Hygiene Products</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✔</span>
                        <span>Stationery</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✔</span>
                        <span>First Aid Kits</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        {/* Why Partner with us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="space-y-6"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-8 text-left">
                  Why Partner with us?
                </h2>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✔</span>
                  <p className="text-gray-700 font-primary">
                    <span className="font-semibold">Personalised Service</span>{" "}
                    – Each client gets a dedicated account manager and a visual
                    merchandiser to help identify their needs and source the
                    best products.
                  </p>
                </div>

                <div className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✔</span>
                  <p className="text-gray-700 font-primary">
                    <span className="font-semibold">Seamless Logistics</span> –
                    Products are stored securely and delivered exactly when
                    needed, making store openings, refurbishments, and
                    replenishments effortless.
                  </p>
                </div>

                <div className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✔</span>
                  <p className="text-gray-700 font-primary">
                    <span className="font-semibold">One Point of Contact</span>{" "}
                    – Streamlined communication with a single trusted supplier,
                    reducing complexity and saving time.
                  </p>
                </div>

                <p className="text-gray-700 font-bold font-primary mt-6">
                  The Visual Merchandiser by TRF makes sourcing, storing, and
                  delivering essential retail and restaurant products
                  hassle-free, cost-effective, and efficient.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="h-full relative"
              >
                <video
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                  playsInline
                  src="https://theretailfactory.co.uk/wp-content/uploads/2025/03/Retail-web.mp4"
                  id="partnerVideo"
                ></video>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    const video = document.getElementById("partnerVideo");
                    if (video.paused) {
                      video.play();
                      document
                        .getElementById("playButton")
                        .classList.add("hidden");
                      document
                        .getElementById("pauseButton")
                        .classList.remove("hidden");
                    } else {
                      video.pause();
                      document
                        .getElementById("playButton")
                        .classList.remove("hidden");
                      document
                        .getElementById("pauseButton")
                        .classList.add("hidden");
                    }
                  }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-3 shadow-md hover:bg-opacity-90 transition-all"
                  aria-label="Play/Pause video"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="playButton"
                    className="h-6 w-6 text-gray-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="pauseButton"
                    className="h-6 w-6 text-gray-800 hidden"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Industries Section */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-white mb-12 text-center"
            >
              A small selection of the industries we work with
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Industry 1 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-dark-gray p-6 rounded-lg shadow-md"
              >
                <div className="mb-4 h-48 overflow-hidden rounded-lg">
                  <Image
                    src="https://theretailfactory.co.uk/wp-content/uploads/2025/03/fashion-retail.png"
                    alt="Retail Industry"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary text-center">
                  Fashion Retail
                </h3>
                <p className=" font-primary text-center text-white">
                  Specialized solutions for fashion retailers including
                  displays, mannequins, and garment rails.
                </p>
              </motion.div>

              {/* Industry 2 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-dark-gray p-6 rounded-lg shadow-md"
              >
                <div className="mb-4 h-48 overflow-hidden rounded-lg">
                  <Image
                    src="https://theretailfactory.co.uk/wp-content/uploads/2025/03/sports-retail.png"
                    alt="Hospitality Industry"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary text-center">
                  Sports Retail
                </h3>
                <p className="font-primary text-center text-white">
                  Custom fixtures and displays designed for sporting goods and
                  athletic apparel stores.
                </p>
              </motion.div>

              {/* Industry 3 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-dark-gray p-6 rounded-lg shadow-md"
              >
                <div className="mb-4 h-48 overflow-hidden rounded-lg">
                  <Image
                    src="https://theretailfactory.co.uk/wp-content/uploads/2025/03/restaurants.png"
                    alt="Food & Beverage Industry"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary text-center">
                  Restaurants
                </h3>
                <p className="font-primary text-center text-white">
                  Essential back-of-house and front-of-house supplies for the
                  restaurant industry.
                </p>
              </motion.div>

              {/* Industry 4 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-dark-gray p-6 rounded-lg shadow-md"
              >
                <div className="mb-4 h-48 overflow-hidden rounded-lg">
                  <Image
                    src="https://theretailfactory.co.uk/wp-content/uploads/2025/03/retail-supermart.png"
                    alt="Healthcare Industry"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary text-center">
                  Supermarkets
                </h3>
                <p className="text-gray-600 font-primary text-center text-white">
                  Comprehensive retail solutions for grocery and supermarket
                  environments.
                </p>
              </motion.div>

              {/* Industry 5 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-dark-gray p-6 rounded-lg shadow-md"
              >
                <div className="mb-4 h-48 overflow-hidden rounded-lg">
                  <Image
                    src="https://theretailfactory.co.uk/wp-content/uploads/2025/03/leisure.png"
                    alt="Education Industry"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary text-center">
                  Leisure & Hospitality
                </h3>
                <p className="text-gray-600 font-primary text-center text-white">
                  Specialized products and fixtures for hotels, resorts, and
                  leisure facilities.
                </p>
              </motion.div>

              {/* Industry 6 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-dark-gray p-6 rounded-lg shadow-md"
              >
                <div className="mb-4 h-48 overflow-hidden rounded-lg">
                  <Image
                    src="https://theretailfactory.co.uk/wp-content/uploads/2025/03/charity.png"
                    alt="Corporate Offices"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary text-center">
                  Charity Retail
                </h3>
                <p className=" font-primary text-center text-white">
                  Cost-effective display solutions and essentials for charity
                  shops and non-profit retail.
                </p>
              </motion.div>
              {/* Industry 7 */}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-dark-gray p-6 rounded-lg shadow-md"
              >
                <p className=" text-center text-white">
                  Coffee Shop
                  <br />
                  Convenience Store
                  <br />
                  Professional Services
                  <br />
                  Trade Counter
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-dark-gray p-6 rounded-lg shadow-md"
              >
                <p className=" text-center text-white">
                  Events & Exhibitioning
                  <br />
                  Arts & Entertainment
                  <br />
                  Food & Catering
                  <br />
                  Contractors & Designers
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-dark-gray p-6 rounded-lg shadow-md"
              >
                <p className=" text-center text-white">
                  Manufacturers & Distributors
                  <br />
                  Education & Libraries
                  <br />
                  Medical Dispensaries
                  <br />
                  Specialist Retailers
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-dark-gray p-6 rounded-lg shadow-md"
              >
                <p className=" text-center text-white">
                  Ecommerce Warehouse
                  <br />
                  Real Estate
                  <br />
                  Public Sector
                  <br />
                  Garden Centre
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Contact Form Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="py-16 bg-gray-100"
          id="contact"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Get In Touch
            </h2>
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
              <form id="contactForm" className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-gray-700 mb-2 font-primary"
                    >
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-gray-700 mb-2 font-primary"
                    >
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 mb-2 font-primary"
                    >
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 mb-2 font-primary"
                    >
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 mb-2 font-primary"
                  >
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>

                {/* How did you hear about us */}
                <div>
                  <label
                    htmlFor="source"
                    className="block text-gray-700 mb-2 font-primary"
                  >
                    How Did You Hear About Us?
                  </label>
                  <select
                    id="source"
                    name="source"
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-black"
                  >
                    <option value="">Select an option</option>
                    <option value="Search Engine">Search Engine</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Referral">Referral</option>
                    <option value="Advertisement">Advertisement</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {error && <p className="text-red-500 mb-2">{error}</p>}
                <div>
                  <button
                    type="submit"
                    className="bg-primary cursor-pointer text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-colors w-full md:w-auto"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmit();
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
}


