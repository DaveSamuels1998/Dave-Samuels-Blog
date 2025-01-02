const {DateTime } = require("luxon")

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('./src/style.css');
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/admin');

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });
  const markdownIt = require('markdown-it');
  const markdownItAnchor = require('markdown-it-anchor');
  
  module.exports = function (eleventyConfig) {
    eleventyConfig.setLibrary('md', markdownIt().use(markdownItAnchor));
  };

  const pluginTOC = require('@uncenter/eleventy-plugin-toc');

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(pluginTOC);
};
  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',

    dir: {
      input: "src",
      output: "public"
    }
  };
}