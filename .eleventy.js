const {DateTime } = require("luxon");
const markdownIt = require('markdown-it');
const markdownItAttrs = require("markdown-it-attrs");
const markdownItAnchor = require('markdown-it-anchor');
const pluginTOC = require('@uncenter/eleventy-plugin-toc');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/style.css');
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/admin');
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });
  
  eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(markdownItAnchor).use(markdownItAttrs));
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