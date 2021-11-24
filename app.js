$('document').ready(function () {
  console.log("Let's get ready to party with JQuery!");
});

$('img').addClass('image-center');

let pTags = $('p');

pTags.get(5).remove();

let newRand = Math.floor(Math.random() * 101);
$('h1').css('font-size', newRand);

$('ol').append('<li>Hello there!</li>');
$('aside')
  .empty()
  .append(
    '<p>We are really sorry, but the content here was not good. We had to remove it for your sanity.</p>'
  );

// My attempts
// let colors = $('input').on('click', function () {
//   $(this).val('value');
// });

// let colorValue = $('input[value=text]').val();

// $('img').on('click', function () {
//   $(this).remove();
// });

// solution code
$('.form-control').on('keyup blur change', function () {
  let red = $('.form-control').eq(0).val();
  let blue = $('.form-control').eq(1).val();
  let green = $('.form-control').eq(2).val();
  $('body').css(
    'background-color',
    'rgb(' + red + ',' + green + ',' + blue + ')'
  );
});
