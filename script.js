

// inspiration: 
// https://dribbble.com/shots/2292415-Daily-UI-001-Day-001-Sign-Up



// let form = document.querySelecter('form');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   return false;
// });$('#form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
  label = $this.prev('label');

  if (e.type === 'keyup') {
        if ($this.val() === '') {
      label.removeClass('active highlight');
    } else {
      label.addClass('active highlight');
    }
} else if (e.type === 'blur') {
    if( $this.val() === '' ) {
        label.removeClass('active highlight'); 
        } else {
        label.removeClass('highlight');   
        }   
} else if (e.type === 'focus') {
  
  if( $this.val() === '' ) {
        label.removeClass('highlight'); 
        } 
  else if( $this.val() !== '' ) {
        label.addClass('highlight');
        }
}

});

$('.tab a').on('click', function (e) {

e.preventDefault();

$(this).parent().addClass('active');
$(this).parent().siblings().removeClass('active');

target = $(this).attr('href');

$('.tab-content > div').not(target).hide();

$(target).fadeIn(800);

});
VANTA.CLOUDS({
  el: "#vantajs",
   mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  skyColor: 0x1488cc,
  cloudColor: 0x6dd5fa
});