import { defineType, defineField, defineArrayMember } from "sanity";

export const post = defineType({
  name: "post",
  type: "document",
  title: "Post",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required().error("This field is required"),
    }),

    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      validation: (Rule) => Rule.required().error("This field is required"),
      options: {
        source: "title",
        maxLength: 96,
      },
    }),

    defineField({
      name: "summary",
      type: "text",
      title: "Summary",
      validation: (Rule) => Rule.required().error("This field is required"),
    }),

    defineField({
      name: "image",
      type: "image",
      title: "Image",
      validation: (Rule) => Rule.required().error("This field is required"),
    }),

    defineField({
      name: "content",
      type: "array",
      title: "Content",
      of: [
        defineArrayMember({
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        }),
      ],
    }),

    defineField({
      name: "author",
      type: "reference",
      title: "Author",
      to: [{ type: "author" }],
      validation: (Rule) => Rule.required().error("This field is required"),
    }),

    // New 'comments' field that references multiple 'comment' documents
    defineField({
      name: "comments",
      type: "array",
      title: "Comments",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "comment" }], // References the 'comment' schema
        }),
      ],
    }),
  ],
});
