<cb-strip-hero>
	<div class="js-enabled">
		<yield/>
	</div>

	var buttonUpdateBanner = this.buttonUpdateBanner,
		bannerDiv = this.banner,
		bannerUrlInput = this.opts.backgroundImage;

	// for demo
	var banners = [], activeBanner = 0;
	banners.push('https://cba.imgix.net/PublishingImages/eab-spin-off-auto-1657x397.jpg');

	this.on('mount', function() {

		if (buttonUpdateBanner) {
			buttonUpdateBanner.onclick = function (e) {
				e.preventDefault();
				if (activeBanner+1 >= banners.length) {
					activeBanner = 0;
				} else {
					activeBanner++;
				}

				updateBanner(banners[activeBanner]);
			};
		}

		if (bannerUrlInput) {
			banners.push(bannerUrlInput);
			updateBanner(bannerUrlInput);
		}
	});

	function updateBanner(bannerUrl) {
		bannerDiv.style.backgroundImage = 'url(' + bannerUrl + ')';
		activeBanner = banners.indexOf(bannerUrl);
	}

</cb-strip-hero>