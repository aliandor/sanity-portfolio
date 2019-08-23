export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "projectName",
      title: "Project Name",
      type: "string"
    },
    {
      name: "projectType",
      title: "Project Type",
      type: "string"
    },
    {
      name: "hero",
      title: "Hero",
      type: "image"
    },
    {
      name: "theDetails",
      title: "The Details",
      type: "text"
    },
    {
      name: "role",
      title: "Role",
      type: "string"
    },
    {
      name: "date",
      title: "Date",
      type: "string"
    },
    {
      name: "concept",
      title: "Concept",
      type: "text"
    },
    {
      name: "tech",
      title: "Tech",
      type: "array",
      of: [{ type: "image" }]
    },
    {
      name: "responsiveImage",
      title: "Responsive Image",
      type: "image"
    },
    {
      name: "challenge",
      title: "The Challenge",
      type: "text"
    },
    {
      name: "solution",
      title: "The Solution",
      type: "text"
    },
    {
      name: "codeImage",
      title: "Code Image",
      type: "image"
    }
  ]
};
