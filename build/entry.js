var fs = require('fs') 
var path = require('path') 
var utils = require('./utils') 
var pagesConfig = require('../config/page.config.js') 
var entries = {}; 

pages = fs.readdirSync(path.join(utils.resolve('src'), 'modules'));
 
for (var page in pages) { 
  if(pages[page].indexOf('.html') === -1) { 
    for(var pageConfig in pagesConfig) { 
      if(pageConfig === pages[page] && pagesConfig[pageConfig]) { 
        entries[pages[page]] = path.join(utils.resolve('src'), 'modules', pages[page], 'main.js'); 
      } 
    } 
  } 
} 

module.exports = entries
