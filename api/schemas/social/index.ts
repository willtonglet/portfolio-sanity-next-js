import { IoShareSocialOutline } from "react-icons/io5";

export default {
  title: "Social",
  name: "social",
  icon: IoShareSocialOutline,
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Url",
      name: "url",
      type: "url",
    },
    {
      title: "Icon",
      name: "icon",
      type: "image",
    },
  ],
};
