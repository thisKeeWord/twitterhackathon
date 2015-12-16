var cheerio = require('cheerio');
var request = require('request');


var scrapeController = {
    getData: function(req, res, next) { 


    // change URL to any site that you want
    request('https://twitter.com/search?q=javascript%20%22javascript%22%20lang%3Aen&src=typd', function(error, response, html) {
      var $ = cheerio.load(html);
        // add code here
      var items = [];

      $('.content').each(function(i, element){
        var data = $(this);
          var json = {
            url: "http://www.twitter.com/" + data.find('a').attr('href'),
            title: data.find('.stream-item-header').text(),
            infomation: data.find('.TweetTextSize').text(),
            more: data.find('.TweetTextSize').find('a').attr('href')

          };
         items.push(json);
      });
        res.header("Access-Control-Allow-Origin", '*');
        res.send(items);

   });
  }
};

module.exports = scrapeController;

// quora does not have an api so we 