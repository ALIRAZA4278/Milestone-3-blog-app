import { defineType, defineField } from "sanity";

export const comment = defineType({
  name: "comment",
  type: "document",
  title: "Comment",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule) => Rule.required().error("Name is required"),
    }),

    defineField({
      name: "email",
      type: "string",
      title: "Email",
      validation: (Rule) => Rule.required().error("Email is required"),
    }),

    defineField({
      name: "comment",
      type: "text",
      title: "Comment",
      validation: (Rule) => Rule.required().error("Comment is required"),
    }),

    defineField({
      name: "post",
      type: "reference",
      title: "Post",
      to: [{ type: "post" }],
      validation: (Rule) => Rule.required().error("Post reference is required"),
    }),

    defineField({
      name: "createdAt",
      type: "datetime",
      title: "Created At",
      initialValue: () => new Date().toISOString(),
    }),
  ],
});
