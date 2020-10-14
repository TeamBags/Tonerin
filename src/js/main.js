import './helpers/postDate';
import scrollSmooth from './helpers/smooth-scroll.js';
import animation from './modules/animation.js';
import form from './modules/form.js';
import illness from './modules/illness.js';
import composition from './modules/composition.js';
import reviews from './modules/reviews.js';
import banner from './modules/banner.js';
import footer from './modules/footer.js';

function main() {
	scrollSmooth();
	animation();
	illness();
	composition();
	reviews();
	banner();
	footer();
	form();
}

if (document.documentElement.clientWidth < 480) {
  window.addEventListener('scroll',
    function () {
      return setTimeout(main, 1000);
    }, {
      once: true
    });
} else {
  main();
};
