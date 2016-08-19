<cb-youtube-player>
	<iframe name="iframe" width="100%" name="iframe"></iframe>
	<script>
	    var embedUrl = 'https://www.youtube-nocookie.com/embed/';
    	var videoOptions = '?&autoplay=1&controls=1&modesbranding=1&rel=0&showinfo=0';
		
		var player = this.iframe;
		player.src = embedUrl + this.opts.youtubeId + videoOptions;
        player.frameBorder = 0;
        player.allowFullScreen = true;
        player.allowTransparency = true;
        player.style.backgroundColor = 'transparent';
        player.width = '100%';

        this.on('mount', function() {
        	player.height = Math.round(this.iframe.offsetWidth / 16 * 9) + 'px';
        });
	</script>
</cb-youtube-player>