import { BsCursorText } from "react-icons/bs";

export default {
  title: "Cover",
  name: "cover",
  icon: BsCursorText,
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
  ],
};
