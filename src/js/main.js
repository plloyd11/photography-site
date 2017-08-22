const $grid = $('.grid').imagesLoaded(function() {
  // init Isotope after all images have loaded
  $grid.isotope({
    itemSelector: '.grid-item',
    percentPosition: true
  });
});
// filter functions
const filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    const number = $(this).find('.number').text();
    return parseInt(number, 10) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    const name = $(this).find('.name').text();
    return name.match(/ium$/);
  }
};
// bind filter button click
$('.filter-button-group').on('click', 'button', function() {
  let filterValue = $(this).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[filterValue] || filterValue;
  $grid.isotope({
    filter: filterValue
  });
});
// change is-checked class on buttons
$('.button-group').each(function(i, buttonGroup) {
  const $buttonGroup = $(buttonGroup);
  $buttonGroup.on('click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $(this).addClass('is-checked');
  });
});

lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
});

new Vue({
  el: '#nav',
  data: {
    mobileMenu: false
  }
});
