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
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        slugify: input => input.toLowerCase().replace(/\s+/g, "_")
      }
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
