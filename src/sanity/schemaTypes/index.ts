 // Your author schema

import { author } from "../author";
import { comment } from "../comment";
 
import { post } from "../post";

export const schema = {
  types: [post, author, comment],
};
