const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // Add a custom "date" filter
  eleventyConfig.addFilter("date", (value, format = "yyyy") => {
    if (value === "now") {
      return DateTime.now().toFormat(format);
    }
    return DateTime.fromJSDate(value).toFormat(format);
  });

  // Copy the css folder to output
  eleventyConfig.addPassthroughCopy("src/css");

  // Add global data variable "baseurl" for GitHub Pages repo subfolder
  eleventyConfig.addGlobalData("baseurl", "/mtm6407-static-site-sahilmalik9");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "docs"
    }
  };
};
