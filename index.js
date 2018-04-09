const Twit = require('twit')
const config = require('./config')
const T = new Twit(config)

//T.post('statuses/update', { status: 'hello, been a while!' }, function(err, data, response) {
//  console.log(data)
//})


var myArray = [
'https://society6.com/product/piano-vector-art_metal-travel-mug?sku=s6-7952828p58a201v703',
'https://society6.com/product/vinyl-records-icon-illustration_sticker?sku=s6-7948258p65a211v751a212v753',
'https://society6.com/product/vinyl-records-icon-illustration_bath-mat?sku=s6-7948258p55a203v508',
'https://society6.com/product/vinyl-records-icon-illustration_rug?sku=s6-7948258p35a36v288',
'https://society6.com/product/vinyl-records-icon-illustration_metal-travel-mug?sku=s6-7948258p58a201v703',
'https://society6.com/product/vinyl-records-icon-illustration_pillow?sku=s6-7948258p26a18v192a25v194',
'https://society6.com/product/vinyl-records-icon-illustration_stretched-canvas?sku=s6-7948258p16a6v28',
'https://society6.com/product/vinyl-records-icon-illustration_iphone-case?sku=s6-7948258p20a9v124a52v377',
'https://society6.com/product/vinyl-records-icon-illustration_wall-clock?sku=s6-7948258p33a33v282a34v286',
'https://society6.com/product/vinyl-records-icon-illustration_carry-all-pouch?sku=s6-7948258p51a67v445',
'https://society6.com/product/vinyl-records-icon-illustration_notebook?sku=s6-7948258p59a202v704',
'https://society6.com/product/vinyl-records-icon-illustration_framed-print?sku=s6-7948258p21a12v65a13v54',
'https://society6.com/product/vinyl-records-icon-illustration_phone-skin?sku=s6-7948258p13a3v742',
'https://society6.com/product/vinyl-records-icon-illustration_cards?sku=s6-7948258p22a16v71',
'https://society6.com/product/vinyl-records-icon-illustration_print?sku=s6-7948258p4a1v45',
'https://society6.com/product/vinyl-records-icon-illustration_laptop-skin?sku=s6-7948258p8a2v51',
'https://society6.com/product/vinyl-records-icon-illustration_bag?sku=s6-7948258p29a26v196',
'https://society6.com/product/vinyl-records-icon-illustration_clear-case?sku=s6-7948258p56a72v512a73v519',
'https://society6.com/product/vinyl-records-icon-illustration_rectangular-pillow?sku=s6-7948258p50a66v444',
'https://society6.com/product/vinyl-records-icon-illustration_backpack?sku=s6-7948258p63a209v733',
'https://society6.com/product/vinyl-records-icon-illustration_travel-mug?sku=s6-7948258p46a59v436',
'https://society6.com/product/piano-vector-art_curtain?sku=s6-7952828p62a208v726',
'https://society6.com/product/piano-vector-art_pillow?sku=s6-7952828p26a18v192a25v194',
'https://society6.com/product/piano-vector-art_sham?sku=s6-7952828p61a207v724',
'https://society6.com/product/piano-vector-art_laptop-sleeve?sku=s6-7952828p45a58v428',
'https://society6.com/product/piano-vector-art_shower-curtain?sku=s6-7952828p34a35v287',
'https://society6.com/product/piano-vector-art_all-over-print-shirt?sku=s6-7952828p44a57v420',
'https://society6.com/product/piano-vector-art_metal-print?sku=s6-7952828p54a71v477',
'https://society6.com/product/piano-vector-art_cards?sku=s6-7952828p22a16v71',
'https://society6.com/product/piano-vector-art_backpack?sku=s6-7952828p63a209v733',
'https://society6.com/product/piano-vector-art_floor-pillow?sku=s6-7952828p60a204v721a206v723',
'https://society6.com/product/piano-vector-art_carry-all-pouch?sku=s6-7952828p51a67v445',
'https://society6.com/product/piano-vector-art_notebook?sku=s6-7952828p59a202v704',
'https://society6.com/product/piano-vector-art_rectangular-pillow?sku=s6-7952828p50a66v444',
'https://society6.com/product/piano-vector-art_laptop-skin?sku=s6-7952828p8a2v51',
'https://society6.com/product/piano-vector-art_comforter?sku=s6-7952828p57a200v700',
'https://society6.com/product/piano-vector-art_bath-mat?sku=s6-7952828p55a203v508',
'https://society6.com/product/piano-vector-art_wall-clock?sku=s6-7952828p33a33v282a34v286',
'https://society6.com/product/piano-vector-art_bag?sku=s6-7952828p29a26v196',
'https://society6.com/product/piano-vector-art_travel-mug?sku=s6-7952828p46a59v436',
'https://society6.com/product/piano-vector-art_phone-skin?sku=s6-7952828p13a3v742',
'https://society6.com/product/piano-vector-art_clear-case?sku=s6-7952828p56a72v512a73v519',
'https://society6.com/product/piano-vector-art_print?sku=s6-7952828p4a1v45',
'https://society6.com/product/piano-vector-art_duvet-cover?sku=s6-7952828p38a46v382',
'https://society6.com/product/piano-vector-art_iphone-case?sku=s6-7952828p20a9v124a52v377',
'https://society6.com/product/piano-vector-art_mug?sku=s6-7952828p30a27v199'
]

var rand_tweet = myArray[Math.floor(Math.random() * myArray.length)];


var tweet = function() {
	T.post('statuses/update', {
		status: rand_tweet
	}, function(err, data) {
		if(err){
          console.log('CANNOT BE POSTED... Error');
        }
        else{
          console.log('POSTED... Success!!!');
        }
	})
}

// grab & tweet as soon as program is running...
tweet();
// retweet in every 25 minutes
setInterval(tweet, 1500000);



//RETWEET BOT ==========================

var myArr = [ '#Society6', '#Design', '#design', '#society6', '#quote', '#vectordesign', '#background' ]
var rand_retweet = myArr[Math.floor(Math.random() * myArr.length)];

// find latest tweet according the query 'q' in params
var retweet = function() {
    var params = {
        q: rand_retweet,  // REQUIRED
        result_type: 'recent',
        lang: 'en'
    }
    T.get('search/tweets', params, function(err, data) {
      // if there no errors
        if (!err) {
          // grab ID of tweet to retweet
            var retweetId = data.statuses[0].id_str;
            // Tell TWITTER to retweet
            T.post('statuses/retweet/:id', {
                id: retweetId
            }, function(err, response) {
                if (response) {
                    console.log('Retweeted!!!');
                }
                // if there was an error while tweeting
                if (err) {
                    console.log('Something went wrong while RETWEETING... Duplication maybe...');
                }
            });
        }
        // if unable to Search a tweet
        else {
          console.log('Something went wrong while SEARCHING...');
        }
    });
}

// grab & retweet as soon as program is running...
retweet();
// retweet in every 50 minutes
setInterval(retweet, 3000000);

// FAVORITE BOT====================

var myArry = [ '#Society6', '#Design', '#design', '#society6', '#quote', '#vectordesign', '#background', '#society6max', '#giftidea' ]
var rand_fav = myArry[Math.floor(Math.random() * myArry.length)];

// find a random tweet and 'favorite' it
var favoriteTweet = function(){
  var params = {
      q: rand_fav,  // REQUIRED
      result_type: 'recent',
      lang: 'en'
  }
  // find the tweet
  T.get('search/tweets', params, function(err,data){

    // find tweets
    var tweet = data.statuses;
    var randomTweet = ranDom(tweet);   // pick a random tweet

    // if random tweet exists
    if(typeof randomTweet != 'undefined'){
      // Tell TWITTER to 'favorite'
      T.post('favorites/create', {id: randomTweet.id_str}, function(err, response){
        // if there was an error while 'favorite'
        if(err){
          console.log('CANNOT BE FAVORITE... Error');
        }
        else{
          console.log('FAVORITED... Success!!!');
        }
      });
    }
  });
}
// grab & 'favorite' as soon as program is running...
favoriteTweet();
// 'favorite' a tweet in every 30 minutes
setInterval(favoriteTweet, 1800000);

// function to generate a random tweet tweet
function ranDom (arr) {
  var index = Math.floor(Math.random()*arr.length);
  return arr[index];
};