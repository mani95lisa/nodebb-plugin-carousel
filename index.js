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
			postContent = postContent.replace(re, '<div class="item">$2class="lazyOwl" style="box-shadow:1px 1px 3px rgba(0,0,0,0.2)" data-src$3</div>');
			re = /<div class="item">.*?\/div>/mg;
			arr = postContent.match(re);
			postContent = postContent.replace(re, '');
			postContent = postContent.replace(/\[carousel(.*)]/mg, '<div class="carousel" config="' + config + '">'+arr.join('')+'</div>');
			data.postData.content = postContent;
		}

		callback(null, data);
	};

	module.exports = Carousel;
}(module));