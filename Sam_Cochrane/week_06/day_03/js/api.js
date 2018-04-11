const state = {
  page: 1
};

const randomDog = function () {
  const DogURL = 'https://random.dog/woof.json'

  $.getJSON(DogURL).done(showImage)
};

const showImage = function (results) {
  if (results.url.endsWith(".mp4")){
  const $mp4 =$('<video autoplay >').attr('src', results.url);
  $mp4.prependTo("#images")
} else {
  const $img = $('<img />').attr('src', results.url);
  $img.prependTo("#images")
}
};

$(document).ready(function () {
  $('#randomDog').on('click', function () {
    randomDog();
  });
});
