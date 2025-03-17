"use client"
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
    
      {/* Hero Section */}
      <section className="bg-gray-50 py-20 relative h-screen">
        <video style={{filter: "brightness(0.5)"}}
          className="absolute inset-0 w-full h-full object-cover z-0" 
          autoPlay 
          loop 
          muted 
          playsInline
          src="https://theretailfactory.co.uk/wp-content/uploads/2025/03/hero-landing.mp4"
        ></video>
       
        <div className="container relative z-10 mx-auto px-4 py-6 flex flex-col items-center justify-center h-full">
          <div className="text-6xl font-bold text-white text-center mb-8">Source Store Deliver</div>
          
          <a href="#contact" className="bg-primary font-primary text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-colors text-center mx-auto">
            Partner with us
          </a>
          
          <button className="md:hidden text-white mt-4 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </section>
      
      {/* Solutions Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-cover w-full h-full bg-center" style={{ filter: "brightness(0.5)", backgroundImage: "url('https://theretailfactory.co.uk/wp-content/uploads/2025/03/section-back.png')" }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Solutions</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Source Box */}
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <h3 className="text-2xl font-semibold mb-4 text-center text-black">Source</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span>
                  <span className="text-gray-700 font-primary">Consolidating your order process</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span>
                  <span className="text-gray-700 font-primary">Save hassle of dealing with multiple suppliers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span>
                  <span className="text-gray-700 font-primary">Significant cost savings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span>
                  <span className="text-gray-700 font-primary">Reduce your financial outlay on the project</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span>
                  <span className="text-gray-700 font-primary">One point of contact for all matters</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span>
                  <span className="text-gray-700 font-primary">Invoicing and administration streamlined</span>
                </li>
              </ul>
              <div className="text-center">
                <button onClick={() => window.location.href = '#contact'} className="cursor-pointer bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-red-700 transition-colors">
                  Enquire
                </button>
              </div>
            </div>
            
            {/* Store Box */}
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <h3 className="text-2xl font-semibold mb-4 text-center text-black">Store</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span>
                  <span className="text-gray-700 font-primary">Central storage point for all your items</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span>
                  <span className="text-gray-700 font-primary">Delivered direct to our warehouse</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span>
                  <span className="text-gray-700 font-primary">Stored until needed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span>
                  <span className="text-gray-700 font-primary">Deliveries unpacked, checked & inventoried</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span>
                  <span className="text-gray-700 font-primary">Picked and packed on a store by store basis</span>
                </li>
              </ul>
              <div className="text-center">
                <button onClick={() => window.location.href = '#contact'} className="cursor-pointer bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-red-700 transition-colors">
                  Enquire
                </button>
              </div>
            </div>
            
            {/* Deliver Box */}
            <div className="bg-white relative p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-center text-black">Deliver</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span>
                  <span className="text-gray-700 font-primary">Delivering on demand</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span>
                  <span className="text-gray-700 font-primary">No ordering in bulk</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span>
                  <span className="text-gray-700 font-primary">Distributing to stores, only when required</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span>
                  <span className="text-gray-700 font-primary">Fewer deliveries</span>
                </li>
              </ul>
              <div className="text-center">
                <button onClick={() => window.location.href = '#contact'} className="cursor-pointer bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-red-700 transition-colors">
                  Enquire
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Visual Merchandiser Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div>
                <h2 className="text-4xl font-bold mb-6">Visual Merchandiser by TRF</h2>
                <p className="mb-4">We provide a unique source, store, deliver service to companies looking to open new stores, refurbish existing ones, replenish stock, or set up temporary pop-up shops.</p>
                <p className="mb-4">We appreciate that sourcing products can be very time-consuming and costly.</p>
                <p className="mb-4">Our aim is to alleviate unnecessary stress and costs by designing a bespoke order pad tailored to your individual requirements and needs. This can be adapted for use by one or multiple stores/pop-up shops.</p>
                <p className="mb-4">We provide a 25,000 sq ft warehouse and distribution centre that delivers throughout the UK and overseas. We will hold and deliver your pallet at your chosen delivery date, and if the date is put on hold, we will happily store and deliver the pallet upon your advice.</p>
                <p className="mb-6">Once you have received the pallet, your accounts department will receive only one invoice, making the whole transition from the initial order to the delivery smooth, timely, and cost-effective.</p>
                <button onClick={() => window.location.href = '#contact'} className="cursor-pointer bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-red-700 transition-colors">
                  Enquire
                </button>
              </div>
              
              {/* Right Column - Product Lists */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">We provide over 5,000 Retail Items, including:</h3>
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
                  <h3 className="text-2xl font-semibold mb-4">We provide over 35,000 Office and Back-of-House Items, including:</h3>
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
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Partner with us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
        
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-left">Why Partner with us?</h2>
              <div className="flex items-start">
                <span className="text-green-500 mr-2 text-xl">✔</span>
                <p className="text-gray-700 font-primary">
                  <span className="font-semibold">Personalised Service</span> – Each client gets a dedicated account manager and a visual merchandiser to help identify their needs and source the best products.
                </p>
              </div>
              
              <div className="flex items-start">
                <span className="text-green-500 mr-2 text-xl">✔</span>
                <p className="text-gray-700 font-primary">
                  <span className="font-semibold">Seamless Logistics</span> – Products are stored securely and delivered exactly when needed, making store openings, refurbishments, and replenishments effortless.
                </p>
              </div>
              
              <div className="flex items-start">
                <span className="text-green-500 mr-2 text-xl">✔</span>
                <p className="text-gray-700 font-primary">
                  <span className="font-semibold">One Point of Contact</span> – Streamlined communication with a single trusted supplier, reducing complexity and saving time.
                </p>
              </div>
              
              <p className="text-gray-700 font-bold font-primary mt-6">
                The Visual Merchandiser by TRF makes sourcing, storing, and delivering essential retail and restaurant products hassle-free, cost-effective, and efficient.
              </p>
            </div>
            <div className="h-full relative">
              <video 
                className="w-full h-full object-cover rounded-lg shadow-lg" 
                autoPlay 
                playsInline
                src="https://theretailfactory.co.uk/wp-content/uploads/2025/03/Retail-web.mp4"
                id="partnerVideo"
              ></video>
              <button 
                onClick={() => {
                  const video = document.getElementById('partnerVideo');
                  if (video.paused) {
                    video.play();
                    document.getElementById('playButton').classList.add('hidden');
                    document.getElementById('pauseButton').classList.remove('hidden');
                  } else {
                    video.pause();
                    document.getElementById('playButton').classList.remove('hidden');
                    document.getElementById('pauseButton').classList.add('hidden');
                  }
                }}
                className="absolute bottom-1/2 right-1/2 bg-white bg-opacity-70 rounded-full p-3 shadow-md hover:bg-opacity-90 transition-all"
                aria-label="Play/Pause video"
              >
                <svg xmlns="http://www.w3.org/2000/svg" id="playButton" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" id="pauseButton" className="h-6 w-6 text-gray-800 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Industries Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">A small selection of the industries we work with</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Industry 1 */}
            <div className="bg-dark-gray p-6 rounded-lg shadow-md">
              <div className="mb-4 h-48 overflow-hidden rounded-lg">
                <Image 
                  src="https://theretailfactory.co.uk/wp-content/uploads/2025/03/fashion-retail.png" 
                  alt="Retail Industry" 
                  width={400} 
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary text-center">Fashion Retail</h3>
              <p className=" font-primary text-center text-white">Specialized solutions for fashion retailers including displays, mannequins, and garment rails.</p>
            </div>
            
            {/* Industry 2 */}
            <div className="bg-dark-gray p-6 rounded-lg shadow-md">
              <div className="mb-4 h-48 overflow-hidden rounded-lg">
                <Image 
                  src="https://theretailfactory.co.uk/wp-content/uploads/2025/03/sports-retail.png" 
                  alt="Hospitality Industry" 
                  width={400} 
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary text-center">Sports Retail</h3>
              <p className="font-primary text-center text-white">Custom fixtures and displays designed for sporting goods and athletic apparel stores.</p>
            </div>
            
            {/* Industry 3 */}
            <div className="bg-dark-gray p-6 rounded-lg shadow-md">
              <div className="mb-4 h-48 overflow-hidden rounded-lg">
                <Image 
                  src="https://theretailfactory.co.uk/wp-content/uploads/2025/03/food-beverage.png" 
                  alt="Food & Beverage Industry" 
                  width={400} 
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary text-center">Food & Beverage</h3>
              <p className="font-primary text-center text-white">Supporting restaurants, cafes, and food service businesses with specialized equipment, displays, and operational necessities.</p>
            </div>
            
            {/* Industry 4 */}
            <div className="bg-dark-gray p-6 rounded-lg shadow-md">
              <div className="mb-4 h-48 overflow-hidden rounded-lg">
                <Image 
                  src="https://theretailfactory.co.uk/wp-content/uploads/2025/03/healthcare.png" 
                  alt="Healthcare Industry" 
                  width={400} 
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary text-center">Healthcare</h3>
              <p className="text-gray-600 font-primary text-center text-white">Delivering specialized solutions for medical facilities, pharmacies, and healthcare providers with a focus on functionality and compliance.</p>
            </div>
            
            {/* Industry 5 */}
            <div className="bg-dark-gray p-6 rounded-lg shadow-md">
              <div className="mb-4 h-48 overflow-hidden rounded-lg">
                <Image 
                  src="https://theretailfactory.co.uk/wp-content/uploads/2025/03/education.png" 
                  alt="Education Industry" 
                  width={400} 
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary text-center">Education</h3>
              <p className="text-gray-600 font-primary text-center text-white">Supporting schools, universities, and educational institutions with furniture, displays, and equipment that enhance learning environments.</p>
            </div>
            
            {/* Industry 6 */}
            <div className="bg-dark-gray p-6 rounded-lg shadow-md">
              <div className="mb-4 h-48 overflow-hidden rounded-lg">
                <Image 
                  src="https://theretailfactory.co.uk/wp-content/uploads/2025/03/corporate.png" 
                  alt="Corporate Offices" 
                  width={400} 
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary text-center">Corporate Offices</h3>
                  <p className=" font-primary text-center text-white">Providing office spaces with furniture, signage, and branded elements that reflect company identity and improve workplace functionality.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">About Us</h2>
            <p className="text-gray-600 mb-6">The Retail Factory is a leading retail consultancy that specializes in helping businesses optimize their retail operations. With years of industry experience, we understand the challenges retailers face and provide tailored solutions to overcome them.</p>
            <p className="text-gray-600">Our team of experts works closely with clients to develop strategies that drive growth, improve efficiency, and enhance customer experience. We're committed to your success and dedicated to delivering measurable results.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Retail Strategy</h3>
              <p className="text-gray-600">Develop comprehensive retail strategies to drive growth and improve market position.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Operational Efficiency</h3>
              <p className="text-gray-600">Optimize your retail operations to reduce costs and improve efficiency.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Experience</h3>
              <p className="text-gray-600">Enhance customer satisfaction and loyalty through improved shopping experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Contact Us</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <p className="text-gray-600 mb-6">Have questions or ready to start working with us? Fill out the form and we'll get back to you shortly.</p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-600">info@retailpartner.com</span>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-600">+44 (0) 123 456 7890</span>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-600">123 Retail Street, London, UK</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8 bg-gray-50">
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Name</label>
                    <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                    <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">Message</label>
                    <textarea id="message" rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-xl font-bold">Retail Partner</div>
              <p className="text-gray-400 mt-1">Your trusted retail consultancy</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Retail Partner. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
