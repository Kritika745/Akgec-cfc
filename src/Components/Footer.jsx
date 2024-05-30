import { ChevronRight } from 'lucide-react'
import React from 'react'

function  Footer()  {
  return (
    <footer className="w-full pb-4 mt-12">
      <hr className=" bg-black  mb-6" />
      <div className="mx-auto flex max-w-6xl flex-col items-start sm:space-x-32 md:flex-row">
        <div className="w-full px-4 md:w-1/2 lg:px-0">
          <h1 className="max-w-sm text-4xl font-bold">Locate Us</h1>
          <form
            action=""
            className="mt-2 inline-flex w-full items-center md:w-3/4"
          >
            <div className="formMap mt-4 sm:w-64 w-40">
              <iframe
                className="sm:w-[27vw] sm:h-56 w-72 h-48"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.467007802247!2d77.49981541461779!3d28.67567358240077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf30885b1e2a5%3A0x9983675e24c6638b!2sAKGEC%3A%20Ajay%20Kumar%20Garg%20Engineering%20College%2C%20Ghaziabad!5e0!3m2!1sen!2sin!4v1676826055930!5m2!1sen!2sin"
                width=""
                height=""
                title="location"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </form>
        </div>
        <div className="mt-8 grid grid-cols-2 sm:gap-6 gap-2 md:mt-0 lg:w-full lg:grid-cols-2">
          <div className="mb-8 mt-3 ml-12 sm:ml-16 lg:mb-0">
            <p className="mb-6 text-lg font-semibold text-gray-700 ">
              Quick Links
            </p>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
              <a
                className="hover:cursor-pointer"
                href="https://www.akgec.ac.in/aicte-approval-letters/"
              >
                About AFIPD
              </a>
              <a
                className="hover:cursor-pointer"
                href="https://www.akgec.ac.in/nirf-data-for-ranking-2023/"
              >
                Industry 4.0
              </a>
              <a
                className="hover:cursor-pointer"
                href="https://www.akgec.ac.in/mandatory-disclosure/"
              >
                Events
              </a>
              <a
                className="hover:cursor-pointer"
                href="https://www.akgec.ac.in/grievance-committee/"
              >
                Photo Gallery
              </a>
              <a
                className="hover:cursor-pointer"
                href="https://www.akgec.ac.in/mba-admission-2023-25/"
              >
                Download
              </a>
            </ul>
          </div>
          <div className="mb-8 mt-2 mr-4 sm:mr-0 lg:mb-0">
            <p className="mb-6 text-lg font-semibold text-gray-700 ">
              About AFIPD
            </p>
            <ul className="flex flex-col space-y-3 text-[14px] font-medium text-gray-500">
              <li>
                AKG Foundation for Innovation and Product Development”, (AFIPD)
                a consortium of 22 stakeholders from the General Engineering
                Industries, has been incorporated as a Company Limited by Shares
                to establish the Common Facility Centre (CFC) under “One
                District One Product (ODOP) CFC Scheme” of Government of Uttar
                Pradesh
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;