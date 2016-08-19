<cb-breadcrumb>
	<div class="container-breadcrumb">
		<div class="gradient"></div>
		<ol class="breadcrumb">
			<li each={item in items}><a href="{ item.url }">{ item.text} </a></li>
		</ol>
	</div>
	<script>
	items = [
		{ text: 'Home', url: '#'},
		{ text: 'Verzekeringen', url: '#'},
		{ text: 'Product'}
	];
	</script>
</cb-breadcrumb>