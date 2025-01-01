import BlogCard from "@/components/BlogCard"
import { client } from "@/sanity/lib/client"
import Link from "next/link"
import About from "./About"
import Contact from "./Contact"

export const revalidate = 10 // seconds

type Post = {
  summary: string
  title: string
  slug: string
  image: string // This can be an object, depending on how you fetch images
}

export default async function Home() {
  const query = `*[_type=='post'] | order(_createdAt desc) {
    summary,
    title,
    "slug": slug.current,
    image
  }`

  const posts: Post[] = await client.fetch(query)

  return (
    <main className="flex min-h-screen flex-col bg-gray-100 font-sans text-gray-900">

<div className="bg-blue-600 text-white py-20 text-center">
  <h1 className="text-4xl sm:text-5xl font-semibold mb-4">
    Welcome to Our Blog
  </h1>
  <p className="text-lg sm:text-xl mb-6 px-4 sm:px-6 md:px-8">
    Sharing insights, inspiration, and knowledge on a variety of topics. Stay updated and explore new ideas with us!
  </p>
  <Link href="#Blogs">
    <p className="inline-block bg-white text-blue-600 py-3 px-6 sm:px-8 rounded-md font-semibold hover:bg-gray-200">
      View Our Blogs
    </p>
  </Link>
</div>


    <About />
      {/* Latest Articles Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-semibold text-gray-800 text-center mb-8">
          Latest Insights & Articles
        </h2>
        
        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post) => (
            <BlogCard post={post} key={post.slug} />
          ))}
        </div>
      </section>
 <Contact />
      {/* Call to Action - Subscribe */}
      <div className="bg-blue-600 text-white py-12 text-center">
        <h3 className="text-3xl font-semibold mb-4">Stay Connected with Us</h3>
        <p className="text-xl mb-6">Subscribe to our newsletter for the latest posts, updates, and exclusive content!</p>
        <Link href="/subscribe">
          <p className="inline-block bg-white text-blue-600 py-3 px-8 rounded-md font-semibold hover:bg-gray-200">
            Subscribe Now
          </p>
        </Link>
      </div>

    </main>
  )
}
