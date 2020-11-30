import { BsFileText } from "react-icons/bs";

export default {
  title: "Pages",
  name: "pages",
  icon: BsFileText,
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Order",
      name: "order",
      type: "number",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
    },
    {
      title: "Description",
      name: "description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          title: "Caption",
          name: "caption",
          type: "string",
        },
      ],
    },
  ],
};
