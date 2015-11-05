var cheerio = require('cheerio');
var request = require('request');


var scrapeController = {
    getData: function(req, res, next) { 


    // change URL to any site that you want
    request('https://www.quora.com/search?q=javascript', function(error, response, html) {
      var $ = cheerio.load(html);
        // add code here
      var items = [];

      $('.pagedlist_item').each(function(i, element){
        var data = $(this);
          var json = {
            url: "http://www.quora.com/" + data.find('a').attr('href'),
            title: data.find('.title').text(),
            infomation: data.find('.search_result_snippet').text(),
            more: data.find('.more_link').attr('_blank')

          };
         items.push(json);
      });
        res.header("Access-Control-Allow-Origin", '*');
        res.send(items);

   });
  }
};

module.exports = scrapeController;

// ONLY WORK ON THIS FILE
// FILTER DOWN THE CLASSES USING "CLASS.CLASS.HREF.ETC" TO GET THE IMAGES
// STORE THOSE IN VARIABLES
// DISPLAY TO USER