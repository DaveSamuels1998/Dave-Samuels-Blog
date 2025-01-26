const {DateTime } = require("luxon");
const markdownIt = require('markdown-it');
const markdownItAttrs = require("markdown-it-attrs");
const markdownItAnchor = require('markdown-it-anchor');
const pluginTOC = require('@uncenter/eleventy-plugin-toc');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/style.css');
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/admin');
  // Set up Markdown parser with markdown-it-attrs
  let markdownLibrary = markdownIt().use(markdownItAttrs);
  eleventyConfig.setLibrary("md", markdownLibrary);
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });
  
  eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(markdownItAnchor));
  eleventyConfig.addPlugin(pluginTOC);

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