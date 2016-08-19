<cb-strip-hero>
	<div class="js-enabled">
		<div class="hero-banner">
			<div class="banner" id="banner"></div>
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
	var buttonUpdateBanner = this.buttonUpdateBanner,
		bannerDiv = this.banner,
		bannerUrlInput = this.opts.backgroundImage,
		banners = [], activeBanner = 0;

	activate();

	function updateBanner(bannerUrl) {
		bannerDiv.style.backgroundImage = 'url(' + bannerUrl + ')';
		activeBanner = banners.indexOf(bannerUrl);
	}

	function activate() {
		// for demo
		banners.push('https://cba.imgix.net/PublishingImages/eab-spin-off-auto-1657x397.jpg');

		if (bannerUrlInput) {
			banners.push(bannerUrlInput);
			updateBanner(bannerUrlInput);
		}
	}

	buttonClick(e) {
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