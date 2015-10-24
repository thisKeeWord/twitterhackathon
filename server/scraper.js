var cheerio = require('cheerio');
var request = require('request');

var scrapeController = {
  getData: function(req, res, next) {
   res.send('Return JSON or HTML View');  

    // change URL to any site that you want
    request('http://giphy.com/', function(error, response, html) {
      var $ = cheerio.load(html);
        // add code here

      $('.homepage-half').each(function(i, element){
        // var giphy = $(this).find('img').attr('src');
        // Bundle into each object push to array
        // var tags = $('.tag').text().trim();
        var data = $(this);
        var tagSearch = data.find();
        var giphy = data.find('img').attr('src');
        var tags = data.find('.tag').text().trim();
        var arr = [];
        
        //arr.push(tags);      
        
          // console.log(giphy);
          // console.log(giphy);
          // console.log(tags);

          var json = {
            image: giphy,
            hashtags: tags
          };

          console.log(json);
      });
   });
  }
};

module.exports = scrapeController;

// ONLY WORK ON THIS FILE
// FILTER DOWN THE CLASSES USING "CLASS.CLASS.HREF.ETC" TO GET THE IMAGES
// STORE THOSE IN VARIABLES
// DISPLAY TO USER