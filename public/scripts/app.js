'use strict';

$('.details-button').on('click', function() {
  const recipe_name = $(this).data('recipe_name');
  const button = $(this);
  button.siblings(`.${recipe_name}`).toggleClass('hide');
  button.text(button.text() === 'Hide Details' ? 'Show Details' : 'Hide Details');
});

$('.save-button').on('click', function() {
  $(this).addClass('saved');
  $(this).text('Saved!');
});

$('.search-labels > label').on('click', function() {
  $(this).toggleClass('selected');
  $(this).children('input').prop('checked') === true ? $(this).children('input').prop('checked', false) : $(this).children('input').prop('checked', true);
  return false;
});
