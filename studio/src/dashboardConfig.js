export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62a1afd2f7df6e455c650f57",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-f4uv16ih",
                  apiId: "00428c05-999a-4998-b063-a6b2b7402c21",
                },
                {
                  buildHookId: "62a1afd363989d4093d1fb1e",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-1oybn6e7",
                  apiId: "06546e84-679d-46c9-849d-0586c5b803b2",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/mikolajdobrucki/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-1oybn6e7.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
