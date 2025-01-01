import Link from "next/link";

const About = () => {
  return (
    <div className="bg-gray-100 font-sans text-gray-900" id="About">

      {/* Main Content */}
      <div className="px-6 py-12">

        {/* About Text */}
        <div>
          <h1 className="text-4xl font-semibold text-gray-800">About Our Blog</h1>
          <p className="text-lg text-gray-700">
            Welcome to our blog! We share articles tips and personal experiences on a variety of topics. Whether you&apos;re here for advice inspiration or to learn something new we&rsquo;ve got something for everyone.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
          <p className="text-lg text-gray-700">
            Our mission is to create a platform for learning and curiosity offering fresh perspectives and inspiring ideas to our readers.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">Blog Topics</h2>
          <ul className="list-disc pl-6 text-lg text-gray-700">
            <li>Personal Development</li>
            <li>Technology Trends</li>
            <li>Health and Wellness</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800">Meet the Author</h2>
          <p className="text-lg text-gray-700">
            Hi I&apos;m Ali Raza the creator behind this blog. I&apos;m passionate about writing technology and travel. I started this blog to share my insights and connect with like-minded individuals.
          </p>

          <div className="space-x-4">
            <Link href="mailto:author@example.com">
              <p className="inline-block text-blue-600 hover:text-blue-800">Contact Me</p>
            </Link>
            <Link href="https://twitter.com/author" target="_blank">
              <p className="inline-block text-blue-600 hover:text-blue-800">Follow me on Twitter</p>
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Join Our Community</h3>
          <p className="text-lg text-gray-700 mb-4">Stay updated with our latest posts. Subscribe for regular updates and exclusive content!</p>
          <Link href="/subscribe">
            <p className="bg-blue-600 text-white py-3 px-8 rounded-md font-semibold hover:bg-blue-700">
              Subscribe Now
            </p>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default About;
