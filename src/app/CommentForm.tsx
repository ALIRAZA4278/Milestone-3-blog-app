'use client';

import { useState } from 'react';

interface CommentFormProps {
  postId: string;
}

export default function CommentForm({ postId }: CommentFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({ name, email, comment, post: { _ref: postId } }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit the comment');
      }

      setSuccess(true);
      setName('');
      setEmail('');
      setComment('');
    } catch (err) {
      setError('Failed to submit the comment');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mt-2 p-2 border border-gray-300 rounded"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mt-2 p-2 border border-gray-300 rounded"
          required
        />
      </div>

      <div>
        <label htmlFor="comment" className="block text-sm font-semibold">Comment</label>
        <textarea
          id="comment"
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full mt-2 p-2 border border-gray-300 rounded"
          rows={4}
          required
        />
      </div>

      {error && <div className="text-red-500 text-sm">{error}</div>}
      {success && <div className="text-green-500 text-sm">Comment submitted successfully!</div>}

      <button
        type="submit"
        className="w-full bg-primary text-white py-2 rounded"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Comment'}
      </button>
    </form>
  );
}
