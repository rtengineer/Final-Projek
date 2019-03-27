var transitionSpeed = 400;
var sliderWidth = 500;
var testimonialCount = 5;
var testimonialImages = document.getElementById("images").children;
var testimonials = document.getElementById("testimonials-wrapper");
var testimonialsStyles = window.getComputedStyle(testimonials);

function disableEnable ( elementId ) {
  var element = document.getElementById(elementId);
  element.disabled = true;
  setTimeout( function() {
      element.disabled = false;
    }, transitionSpeed );
}

function moveRight () {
  var left = parseInt(testimonialsStyles.getPropertyValue('left'));
  if ( left > - (testimonialCount - 1 ) * sliderWidth ) {
    var newleft = left - sliderWidth + 'px';
    testimonials.style.left = newleft;
    disableEnable("right");
	  for (var counter = 0; counter < (testimonialImages.length -1); counter += 1) {
      if (testimonialImages[counter].className.indexOf("active-image") !== -1) {
        testimonialImages[counter].className = "image";
        testimonialImages[counter].nextElementSibling.className += " active-image";
        return;
      }
	  }
  }
}

function moveLeft () {
  var left = parseInt(testimonialsStyles.getPropertyValue('left'));
  if ( left < 0 ) {
    var newleft = left + sliderWidth + 'px';
    testimonials.style.left = newleft;
    disableEnable("left");
	  for (var counter = 1; counter < testimonialImages.length ; counter += 1) {
      if (testimonialImages[counter].className.indexOf("active-image") !== -1) {
        testimonialImages[counter].className = "image";
        testimonialImages[counter].previousElementSibling.className += " active-image";
        return;
      }
	  }
   }
  }

function showTestimonialByImage ( imagePixelValue ) {
  var allImages = event.target.parentElement.children;
  for (var counter = 0; counter < allImages.length; counter += 1 ) {
    allImages[counter].className = "image";
  }
  event.target.className += " active-image";
  var testimonials = document.getElementById("testimonials-wrapper");
  testimonials.style.left = imagePixelValue;
  disableEnable("left");
  disableEnable("right");
}

// <!-- JavaScript Author by Manzola Caniago  -->
 