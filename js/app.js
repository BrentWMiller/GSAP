const button = $('.btn__main');
const buttonOptions = $('.btn-group--options');
const buttonOption = $('.btn__option');

var clicked = false;

button.click(
	function () {
		let animRotation,
			animBorderRadius,
			animBgColor;

		clicked = !clicked;

		if (clicked) {
			animRotation = 45;
			animBgColor = '#fd4f48';
			animBorderRadius = 50;

			buttonOptions.show();

		} else {
			animRotation = 0;
			animBgColor = '#0e9cf3';
			animBorderRadius = 0;

			buttonOptions.hide();
		}

		TweenMax.to($(this), 0.3, {
			backgroundColor: animBgColor,
			boxShadow: `0 0 10px ${animBgColor}`,
			rotation: animRotation,
			borderRadius: animBorderRadius,
			ease:Back.easeIn
		});

		TweenMax.from($(buttonOptions), 0.3, {
			bottom: 0,
			ease:Back.easeIn
		}),
		TweenMax.to($(buttonOptions), 0.3, {
			bottom: '4em',
		});


		TweenMax.staggerFrom($(buttonOption), 0.3,
			{
				rotation: 90,
				scale: 0,
				ease:Back.easeIn
			},
			-.15
		),
		TweenMax.staggerTo($(buttonOption), 0.3,
			{
				rotation: 0,
				scale: .8
			},
			-.15
		);
	}
);