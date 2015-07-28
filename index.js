(function(module) {
    var Carousel = {};

    Carousel.parse = function(data, callback) {
		if (!data || !data.postData || !data.postData.content) {
			return callback(null, data);
		}

        var re = /\[carousel(.*)]/mg;
		var postContent = data.postData.content;
		var originContent = data.postData.content;
        var arr = postContent.match(re);
        if(arr && arr.length){
            var config = arr[0].replace(re, '$1');
            re = /(<br>|)(<img )src(=".*?>)(<br>|)/mg;
            postContent = postContent.replace(re, '<div class="carousel-img">$2class="lazyOwl" data-src$3</div>');
			postContent = postContent.replace(/class="img-responsive img-markdown"/g, '');
			re = /<div class="carousel-img">.*?\/div>/mg;
			arr = postContent.match(re);
			postContent = postContent.replace(re, '');
			postContent = postContent.replace(/\[carousel(.*)]/mg, '<div class="carousel" config="' + config + '">'+arr.join('')+'</div>');
			data.postData.content = postContent;
        }

        callback(null, data);
    };

    module.exports = Carousel;
}(module));