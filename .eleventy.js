module.exports = function (eleventyConfig) {
  // Copy assets from project root to _site/assets/
  eleventyConfig.addPassthroughCopy({ assets: "assets" });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
  };
};
