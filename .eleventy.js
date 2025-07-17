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

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "docs"   // changed from dist to docs
    }
  };
};
