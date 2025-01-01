import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Link id="Blogs"
      href={`/blog/${post.slug}`}
      className="group block w-full max-w-sm bg-white rounded-lg shadow-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-xl"
    >
      {/* Image Section */}
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={urlForImage(post.image).url()}
          alt={post.title}
          fill
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-accentLightPrimary transition-colors duration-300">
          {post.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-base mb-6 line-clamp-3 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
          {post.summary}
        </p>

        {/* Read More Button */}
        <Link
          href={`/blog/${post.slug}`}
          className="inline-block px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md font-semibold transition-transform transform hover:scale-110"
        >
          Read More
        </Link>
      </div>
    </Link>
  );
}
