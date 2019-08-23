export default {
  name: "card",
  title: "Card",
  type: "document",
  fields: [
    {
      name: "projectName",
      title: "Project Name",
      type: "string"
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "description",
      title: "Description",
      type: "text"
    }
  ]
};
