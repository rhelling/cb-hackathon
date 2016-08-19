<cb-strip-video>
	<div class="js-enabled">
		<div class="video-cover" hide={ isPlaying } name="cover">
			<div class="container">
				<yield from="header"/>
				<div class="video-controls">
		        	<a href="#start-video" onclick={ play } class="play-button"><span class="cb-iconfont-play-button"></span></a>
		       	</div>
		       	<p class="footer">
		       		<yield from="footer"/>
		       	</p>
			</div>
		</div>
		<div show={ isPlaying } name="player" class={ 'playing': isPlaying, 'video-player': true}>
			<a title="Stoppen met afspelen" href="" onclick={ stop } class="stop-video"><span class="cb-iconfont-close"></span></a>
			<cb-youtube-player youtube-id="{ youtubeId }" height="" if={ isPlaying }></cb-youtube-player>
		</div>
	</div>
	<script>
		this.isPlaying = false;
		this.youtubeId = this.opts.youtubeId;
		this.height = 0;

		this.cover.style.backgroundImage = 'url(' + this.opts.coverImage + ')';

		play(e) {
			this.isPlaying = true;
			e.preventDefault();
		}

		stop(e) {
			this.isPlaying = false;
			e.preventDefault();
		}

		this.on('mount', function() {
			this.player.style.maxHeight = this.cover.offsetHeight + 'px';
		});

	</script>
</cb-strip-video>