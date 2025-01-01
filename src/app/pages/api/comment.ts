import { NextApiRequest, NextApiResponse } from 'next';
import { client } from '@/sanity/lib/client';

interface CommentData {
  name: string;
  email: string;
  comment: string;
  post: {
    _ref: string;
  };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { name, email, comment, post }: CommentData = JSON.parse(req.body);

      // Create the comment in Sanity, but we no longer need to store the result.
      await client.create({
        _type: 'comment',
        name,
        email,
        comment,
        post: {
          _type: 'reference',
          _ref: post._ref,
        },
      });

      // Respond with a success message
      res.status(200).json({ message: 'Comment submitted successfully!' });
    } catch (error) {
      // Log the error to help with debugging
      console.error('Error submitting comment:', error);

      // Respond with an error message
      res.status(500).json({ message: 'Failed to submit the comment right now' });
    }
  } else {
    // Handle other HTTP methods
    res.status(405).json({ message: 'Method not allowed' });
  }
}
