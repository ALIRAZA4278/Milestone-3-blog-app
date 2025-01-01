import Link from "next/link";

const Contact = () => {
  return (
    <div className="bg-gray-100 font-sans text-gray-900" id="Contact">

      {/* Main Content */}
      <div className="px-6 py-12 w-full">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl font-semibold text-gray-800 text-center">Contact Us</h1>
          <p className="text-lg text-gray-700 text-center">
            We&apos;d love to hear from you! Whether you have a question, feedback, or just want to say hi, feel free to reach out.
          </p>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md w-full">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
            <form action="#" method="POST">
              <div className="space-y-6">
                
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-lg font-medium text-gray-700">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-gray-700">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-lg font-medium text-gray-700">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-8 rounded-md font-semibold hover:bg-blue-700"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Alternative Contact */}
          <div className="bg-white p-8 rounded-lg shadow-md w-full">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Alternatively</h2>
            <p className="text-lg text-gray-700 mb-4">
              If you did prefer to reach us through social media or email you can contact us using the details below:
            </p>
            <div className="space-y-4">
              <Link href="#">
                <p className="text-blue-600 hover:text-blue-800">Email: af912923@gmail.com</p>
              </Link>
              <Link href="https://www.facebook.com/ali.farooq.1447342/" target="_blank">
                <p className="text-blue-600 hover:text-blue-800">Follow us on facebook</p>
              </Link>
              <Link href="https://www.linkedin.com/in/ali-raza-4a5762282/" target="_blank">
                <p className="text-blue-600 hover:text-blue-800">Connect with us on LinkedIn</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
