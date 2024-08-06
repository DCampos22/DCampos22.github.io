/*
	Stellar by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$main = $('#main');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Nav.
		var $nav = $('#nav');

		if ($nav.length > 0) {

			// Shrink effect.
				$main
					.scrollex({
						mode: 'top',
						enter: function() {
							$nav.addClass('alt');
						},
						leave: function() {
							$nav.removeClass('alt');
						},
					});

			// Links.
				var $nav_a = $nav.find('a');

				$nav_a
					.scrolly({
						speed: 1000,
						offset: function() { return $nav.height(); }
					})
					.on('click', function() {

						var $this = $(this);

						// External link? Bail.
							if ($this.attr('href').charAt(0) != '#')
								return;

						// Deactivate all links.
							$nav_a
								.removeClass('active')
								.removeClass('active-locked');

						// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
							$this
								.addClass('active')
								.addClass('active-locked');

					})
					.each(function() {

						var	$this = $(this),
							id = $this.attr('href'),
							$section = $(id);

						// No section for this link? Bail.
							if ($section.length < 1)
								return;

						// Scrollex.
							$section.scrollex({
								mode: 'middle',
								initialize: function() {

									// Deactivate section.
										if (browser.canUse('transition'))
											$section.addClass('inactive');

								},
								enter: function() {

									// Activate section.
										$section.removeClass('inactive');

									// No locked links? Deactivate all links and activate this section's one.
										if ($nav_a.filter('.active-locked').length == 0) {

											$nav_a.removeClass('active');
											$this.addClass('active');

										}

									// Otherwise, if this section's link is the one that's locked, unlock it.
										else if ($this.hasClass('active-locked'))
											$this.removeClass('active-locked');

								}
							});

					});

		}

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000
		});
/*
		document.querySelectorAll('.pixel-button').forEach(button => {
			button.addEventListener('click', function() {
			  document.querySelector('.pixelart1').style.display = 'none';
			  document.querySelector('.pixelart2').style.display = 'block';
			});
		  });

		  document.querySelectorAll('.pixel-button2').forEach(button => {
			button.addEventListener('click', function() {
			  document.querySelector('.pixelart2').style.display = 'none';
			  document.querySelector('.pixelart1').style.display = 'block';
			});
		  });
		*/
		// Get all pixel art sections

  
		  
		

		const track = document.querySelector('.carousel-track');
		const items = Array.from(track.children);
		const nextButton = document.getElementById('next');
		const prevButton = document.getElementById('prev');

		let currentIndex = 0;

		function updateCarousel() {
		const itemWidth = items[0].getBoundingClientRect().width;
		const newPosition = -currentIndex * itemWidth;
		track.style.transform = `translateX(${newPosition}px)`;
		}

		function moveToNext() {
		currentIndex = (currentIndex + 1) % items.length;
		updateCarousel();
		}

		function moveToPrev() {
		currentIndex = (currentIndex - 1 + items.length) % items.length;
		updateCarousel();
		}

		nextButton.addEventListener('click', moveToNext);
		prevButton.addEventListener('click', moveToPrev);

		// Initialize carousel
		updateCarousel();


		// scripts.js
		document.querySelectorAll('.toggle-info').forEach(button => {
			button.addEventListener('click', () => {
				const infoBox = button.nextElementSibling;
				infoBox.classList.toggle('hidden');
				button.textContent = infoBox.classList.contains('hidden') ? 'More Info' : 'Less Info';
			});
		});

		
		
		

})(jQuery);

const pixelArts = document.querySelectorAll('.pixelart');
let currentIndex = 0;

// Function to show the next pixel art
	function showNextPixelArt() {
	// Hide the current pixel art
		pixelArts[currentIndex].style.display = 'none';

		// Update index to the next pixel art
		currentIndex = (currentIndex + 1) % pixelArts.length;

		// Show the next pixel art
		pixelArts[currentIndex].style.display = 'block';
		}

		// Add event listener to all pixel buttons
		document.querySelectorAll('.pixel-button2').forEach(button => {
		button.addEventListener('click', showNextPixelArt);
		});

		// Function to show the previous pixel art (reverse)
	function showPreviousPixelArt() {
		// Hide the current pixel art
		pixelArts[currentIndex].style.display = 'none';
	
		// Update index to the previous pixel art
		currentIndex = (currentIndex - 1 + pixelArts.length) % pixelArts.length;
	
		// Show the previous pixel art
		pixelArts[currentIndex].style.display = 'block';
	}
	document.querySelectorAll('.pixel-button1').forEach(button => {
		button.addEventListener('click', showPreviousPixelArt);
		});