// pages/api/comment.ts
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

      const createdComment = await client.create({
        _type: 'comment',
        name,
        email,
        comment,
        post: {
          _type: 'reference',
          _ref: post._ref,
        },
      });

      res.status(200).json({ message: 'Comment submitted successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to submit the comment' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
