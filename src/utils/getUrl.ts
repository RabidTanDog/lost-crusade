// Allows us to account for the relative URL path when deployed to GitHub Pages
export const getUrl = (href: string) => {
  return process.env.NODE_ENV === "production" && href?.startsWith("/")
    ? `/lost-crusade${href}`
    : href;
};
