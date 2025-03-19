import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <section className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1 - Logo and Info */}
          <div>
            <div className="mb-4">
              <Link href="/">
                <Image
                  src="/Black.svg"
                  alt="The Retail Factory"
                  width={250}
                  height={250}
                />
              </Link>
            </div>
            <p className="text-sm text-white mb-2">
              © {new Date().getFullYear()} The Retail Factory
            </p>
            <p className="text-sm text-white mb-2">All Rights Reserved</p>
            <p className="text-sm text-white mb-2">Company Number: 12345678</p>
            <p className="text-sm text-white  mb-2">VAT No: 123456789</p>
            <div className="flex mt-4 space-x-2">
              <a
                href="https://www.facebook.com/profile.php?id=61558815902665"
                aria-label="Facebook"
                className="flex items-center justify-center w-8 h-8 bg-red-500 rounded-full text-white hover:bg-red-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="w-4 h-4 fill-current"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/retailfactoryuk"
                aria-label="Twitter"
                className="flex items-center justify-center w-8 h-8 bg-red-500 rounded-full text-white hover:bg-red-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 fill-current"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/theretailfactory_ltd/?mc_cid=d72eb00890&mc_eid=72fdf765e2"
                aria-label="Instagram"
                className="flex items-center justify-center w-8 h-8 bg-red-500 rounded-full text-white hover:bg-red-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-4 h-4 fill-current"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
              <a
                href="https://uk.linkedin.com/company/the-retail-factory?original_referer=https%3A%2F%2Fwww.google.com%2F"
                aria-label="LinkedIn"
                className="flex items-center justify-center w-8 h-8 bg-red-500 rounded-full text-white hover:bg-red-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-4 h-4 fill-current"
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
              </a>
            </div>
            <div className="mt-6">
              <div className="flex items-center">
                <Image
                  src="https://theretailfactory.co.uk/wp-content/uploads/2023/11/ISO-9001-14001-2015-IMS-badge.png"
                  alt="ISO 9001 & 14001:2015 Certification"
                  width={240}
                  height={240}
                  className="rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Column 2 - About Us */}
          <div>
            <h3 className="text-lg font-bold mb-4 ">ABOUT US</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://theretailfactory.co.uk/about-us/"
                  className="text-white hover:text-white"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://theretailfactory.co.uk/mannequin-hire/"
                  className="text-white hover:text-white"
                >
                  Mannequin Hire
                </a>
              </li>
              <li>
                <a
                  href="https://theretailfactory.co.uk/contact/"
                  className="text-white hover:text-white"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="https://theretailfactory.co.uk/blog/"
                  className="text-white hover:text-red-500"
                >
                  Latest News
                </a>
              </li>
              <li>
                <a
                  href="https://theretailfactory.co.uk/source-store-deliver/"
                  className="text-white hover:text-red-500"
                >
                  Source, Store, Deliver
                </a>
              </li>
              <li>
                <a
                  href="https://theretailfactory.co.uk/product-category/mannequins/"
                  className="text-white hover:text-red-500"
                >
                  Mannequins
                </a>
              </li>
              <li>
                <a
                  href="https://theretailfactory.co.uk/product-category/body-forms/"
                  className="text-white hover:text-red-500"
                >
                  Body Forms
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-red-500">
                  Hangers
                </a>
              </li>
              <li>
                <a
                  href="https://theretailfactory.co.uk/product-category/garment-rails/"
                  className="text-white hover:text-red-500"
                >
                  Garment Rails
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - My Account & Contact */}
          <div>
            <div>
              <h3 className="text-lg font-bold mb-4">MY ACCOUNT</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://theretailfactory.co.uk/my-account/"
                    className="text-white hover:text-red-500"
                  >
                    Login/Register
                  </a>
                </li>
                <li>
                  <a
                    href="https://theretailfactory.co.uk/basket/"
                    className="text-white hover:text-red-500"
                  >
                    Your Basket
                  </a>
                </li>
                <li>
                  <a
                    href="https://theretailfactory.co.uk/enquiry-form/"
                    className="text-white hover:text-red-500"
                  >
                    Request a Brochure
                  </a>
                </li>
                <li>
                  <a
                    href="https://theretailfactory.co.uk/faqs/"
                    className="text-white hover:text-red-500"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">CONTACT US</h3>
            <p className="text-white mb-1">The Retail Factory</p>
            <p className="text-white mb-1">Unit 1, Parkwood Business Park</p>
            <p className="text-white mb-1">Parkwood Street</p>
            <p className="text-white mb-1">Keighley</p>
            <p className="text-white mb-4">BD21 4WD</p>
            <p className="text-white mb-1">
              T:{" "}
              <a
                href="tel:08000223237"
                className="text-white hover:text-red-500"
              >
                0800 0223237
              </a>
            </p>
            <p className="text-white mb-1">
              E:{" "}
              <a
                href="mailto:csd@theretailfactory.co.uk"
                className="text-white hover:text-red-500"
              >
                csd@theretailfactory.co.uk
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
