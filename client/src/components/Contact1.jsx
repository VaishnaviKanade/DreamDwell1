import React from 'react';
import MyPic from '../MyPic.jpg';
import ShantanuPic from '../ShantanuPic.jpg';

export default function Contact1() {
  const handleSubmit = (e) => {
    //e.preventDefault();
    alert('Message sent!'); // Replace with actual form submission logic
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto p-8 bg-gray-50 shadow-lg rounded-lg">
        
        <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>

        <div className="mb-8 text-center">
          <p className="text-gray-700">
            If you have any questions or require assistance, please dont hesitate to reach out. Our team is ready to help with any inquiries or support you may need.
          </p>
        </div>
         {/* Shared Message Box */}
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:border-blue-500"
            rows="4"
            placeholder="Type your message here..."
            required
          ></textarea>
          <button
            type="submit"
            className="mt-4 mb-12 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg focus:outline-none transition duration-300"
          >
            Send Message
          </button>
        </form>


        {/* Our Team Section: Before Contact Blocks */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">Team</h2>
          <p className="text-gray-700 mb-2 text-center">Meet Our Team And</p>
          <p className="text-gray-700 mb-8 text-center">Feel free to contact them directly for specific queries.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vaishnavi's Block */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
              <h3 className="text-xl font-semibold mb-4 text-center">Vaishnavi Kanade</h3>
              <div className="flex flex-col items-center mb-4">
                <img 
                  src={MyPic}
                  alt="Vaishnavi Kanade" 
                  className="rounded-full h-24 w-24 object-cover mb-4"
                />
                <div className="text-gray-700 text-center">
                  <p>AISSMS IOIT, Pune</p>
                  <p>Phone: +91 9309240660</p>
                  <p>Email: vaishnavikanade2003@gmail.com</p>
                  <p>Address: Pune, India</p>
                </div>
              </div>
            </div>

            {/* Shantanu's Block */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
              <h3 className="text-xl font-semibold mb-4 text-center">Shantanu Pawar</h3>
              <div className="flex flex-col items-center mb-4">
                <img 
                  src={ShantanuPic}
                  alt="Shantanu" 
                  className="rounded-full h-24 w-24 object-cover mb-4"
                />
                <div className="text-gray-700 text-center">
                  <p>VIT, Pune</p>
                  <p>Phone: +91 8459913292</p>
                  <p>Email: pawarshantanu58@gmail.com</p>
                  <p>Address: Pune, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        

        {/* More Space at the End */}
        <div className="mt-25"></div>
      </div>
    </div>
  );
}
