window.addEventListener('load', function(){
    var newVideo = document.getElementById('video_header');
    newVideo.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);

    newVideo.play();

});