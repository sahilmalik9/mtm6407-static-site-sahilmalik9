const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Add custom 'date' filter for formatting dates
  eleventyConfig.addFilter("date", (value, format = "LLLL d, yyyy") => {
    if (value === "now") {
      return DateTime.now().toFormat(format);
    }
    return DateTime.fromJSDate(value).toFormat(format);
  });

  // Copy CSS files to output folder
  eleventyConfig.addPassthroughCopy("src/css");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "docs"
    },
    pathPrefix: "/mtm6407-static-site-sahilmalik9/" // 💡 Add this line for GitHub Pages
  };
};
