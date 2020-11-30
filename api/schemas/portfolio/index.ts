import { IoAlbumsOutline } from "react-icons/io5";

export default {
  title: "Portfolio",
  name: "portfolio",
  icon: IoAlbumsOutline,
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
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
    {
      title: "Thumb",
      name: "thumb",
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
    {
      title: "List",
      name: "list",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
