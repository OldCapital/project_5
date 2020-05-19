//=====Lightbox2 method call=====

lightbox.option({
			  'fadeDuration': 900,
			  'wrapAround': true,
			  'alwaysShowNavOnTouchDevices': true,
			})

//=====Hideseek method call=====

$('#search').hideseek({
				'list':           '.search',
		      	'nodata':         'no results',
		      	'attribute':      'data-title',
		      	'highlight':      true,
		      	'navigation':     true,
		      	'ignore_accents': true,      
			});


