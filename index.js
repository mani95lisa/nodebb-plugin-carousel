(function(module) {
    var Carousel = {};

    Carousel.parse = function(postContent, callback) {
        var re = /\[carousel(.*)]/mg;
        var arr = postContent.match(re);
        if(arr && arr.length){
            var config = arr[0].replace(re, '$1');
            re = /(<br>|)(<img )src(=".*?>)(<br>|)/mg;
            postContent = postContent.replace(re, '<div class="carousel-img">$2class="lazyOwl" data-src$3</div>');
            re = /<div class="carousel-img.*?<\/div>/mg;
            arr = postContent.match(re);
            if(arr && arr.length){
                postContent = postContent.replace(/\[carousel(.*)]/mg, '');
                var firstItem = arr[0];
                postContent = postContent.replace(firstItem, '<div class="carousel" config="'+config+'">'+firstItem);
                re = /(<div class="carousel.*<\/div>)(.*[^<\/div>])/mg;
                postContent = postContent.replace(re, '$1</div>$2')
            }
        }
        callback(null, postContent);
    };

    module.exports = Carousel;
}(module));