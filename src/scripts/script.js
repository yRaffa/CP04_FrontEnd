// Isotope
var $grid = $('.collection-list').isotope ({
  });

  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    resetFilterButtons();
    $(this).addClass('active-filter-btn');
    $grid.isotope({ filter: filterValue });
  });

var filterBtns = $('.filter-button-group').find('button');

function resetFilterButtons() {
    filterBtns.each(function(){
        $(this).removeClass('active-filter-btn');
    });
}