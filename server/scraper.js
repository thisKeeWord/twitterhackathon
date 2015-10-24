var cheerio = require('cheerio');
var request = require('request');


var scrapeController = {
    getData: function(req, res, next) { 


    // change URL to any site that you want
    request('http://giphy.com/', function(error, response, html) {
      var $ = cheerio.load(html);
        // add code here
      var items = [];

      $('.homepage-gif').each(function(i, element){
        // var giphy = $(this).find('img').attr('src');
        // Bundle into each object push to array
        // var tags = $('.tag').text().trim();
        var data = $(this);
        // var tagSearch = data.find();
        // var giphy = "http://giphy.com" + data.find('a').attr('href');
        // var giphy = data.find('img').attr('src');
        // var tags = data.find('.gif').text();
           // console.log(giphy);
          // console.log(giphy);
          // console.log(tags);
          var json = {
            url: "http://giphy.com" + data.find('a').attr('href'),
            hashtags: data.find('a').text()
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