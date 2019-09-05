export default {
  name: "personal",
  title: "Personal Project",
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
        source: "projectName",
        slugify: input => input.toLowerCase().replace(/\s+/g, "_")
      }
    },
    {
      name: "hero",
      title: "Hero",
      type: "image"
    },
    {
      name: "cardImage",
      title: "card Image",
      type: "image"
    },
    {
      name: "summary",
      title: "Summary",
      type: "text"
    },
    {
      name: "theDetails",
      title: "The Details",
      type: "text"
    },
    {
      name: "responsiveImage",
      title: "Responsive Image",
      type: "image"
    },
    {
      name: "urlSite",
      title: "URL - website",
      type: "url"
    },
    {
      name: "urlGitHub",
      title: "URL - github",
      type: "url"
    }
  ]
};
