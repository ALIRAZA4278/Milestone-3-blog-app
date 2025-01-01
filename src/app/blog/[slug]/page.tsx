import CommentForm from '@/components/CommentForm';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

export const revalidate = 10; // seconds

// Define the type for the component props
interface PostPageProps {
  params: {
    slug: string;
  };
}

// PostPage component with proper type annotation for props
// The function is async so we can wait for params
export default async function PostPage({ params }: PostPageProps) {
  // Await the params as it is a promise
  const { slug } = await params;

  const query = `*[_type == 'post' && slug.current == "${slug}"] {
    title,
    summary,
    content,
    image,
    author->{
      name,
      image
    },
    comments[]->{
      name,
      comment,
      createdAt
    }
  }[0]`;

  // Fetch the post data from Sanity
  const post = await client.fetch(query);

  if (!post) {
    return <div>Post not found</div>;
  }

  // Ensure comments is always an array
  const comments = post.comments || [];

  return (
    <article className="mt-12 mb-24 px-4 sm:px-8 lg:px-16 flex flex-col gap-y-8 max-w-4xl mx-auto text-darkModeText dark:text-lightModeText">
      {/* Post Title */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary leading-tight tracking-tight">{post.title}</h1>

      {/* Featured Image */}
      <div className="relative w-full h-80 sm:h-96 mb-8 rounded-lg overflow-hidden">
        <Image
          src={urlForImage(post.image).url()}
          alt="Featured image"
          className="w-full h-full object-cover rounded-lg shadow-xl"
        />
      </div>

      {/* Summary Section */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-semibold text-accentDarkPrimary mb-4">Summary</h2>
        <p className="text-lg sm:text-xl leading-relaxed text-darkModeText/80 dark:text-lightModeText/80">{post.summary}</p>
      </section>

      {/* Post Content */}
      <section className="prose lg:prose-xl mt-8 text-darkModeText dark:text-lightModeText">
        <PortableText value={post.content} />
      </section>

      {/* Comments Section */}
      <section className="mt-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-accentDarkPrimary mb-4">Comments</h2>

        {/* Render existing comments */}
        {comments.length > 0 ? (
          <div className="space-y-8">
            {comments.map((comment: { name: string; comment: string; createdAt: string }, index: number) => (
              <div key={index} className="border-b pb-4 mb-4">
                <h3 className="text-xl font-semibold text-darkModeText dark:text-lightModeText">{comment.name}</h3>
                <p className="text-sm text-darkModeText/80 dark:text-lightModeText/80">{new Date(comment.createdAt).toLocaleDateString()}</p>
                <p className="text-lg text-darkModeText/80 dark:text-lightModeText/80">{comment.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No comments yet. Be the first to comment!</p>
        )}

        {/* Comment Form */}
        <CommentForm postId={post._id} />
      </section>
    </article>
  );
}
