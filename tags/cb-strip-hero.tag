<cb-strip-hero>
	<div class="js-enabled">
		<div class="hero-banner">
			<div class="banner" name="banner"></div>
		</div>
		<div class="page container">
			<cb-breadcrumb></cb-breadcrumb>
			<section class="content">
				<yield from="content" />

				<a href="" class="btn btn-orange" onclick={buttonClick}>Change header image</a>
			</section>
		</div>
	</div>
	<style>
		.page .content {
			padding-bottom: 60px;
		}
	</style>
	<script>
	var banners = [], activeBanner = 0;
	var self = this;

	self.buttonClick = buttonClick;

	activate();

	function updateBanner(bannerUrl) {
		self.banner.style.backgroundImage = 'url(' + bannerUrl + ')';
		activeBanner = banners.indexOf(bannerUrl);
	}

	function activate() {
		// for demo
		banners.push('https://cba.imgix.net/PublishingImages/eab-spin-off-auto-1657x397.jpg');

		if (self.opts.backgroundImage) {
			banners.push(self.opts.backgroundImage);
			updateBanner(self.opts.backgroundImage);
		}
	}

	function buttonClick(e) {
		e.preventDefault();
		if (activeBanner+1 >= banners.length) {
			activeBanner = 0;
		} else {
			activeBanner++;
		}

		updateBanner(banners[activeBanner]);
	}
	</script>
</cb-strip-hero>