$(document).ready(function () {

  $('#dropdownID').append('<p class="arrow"><i class="fa fa-sort-down"></i></p>');
  let chosen = $('#selectID');
  let ddBlock = $('#dropdownID');
    
  for (let i of SPORTS) {
    const logo = $('<img class="logo" alt="sport" src="' + i.img + '">');
    const title = $('<p></p>').text(i.name);
    const option = $('<div></div>').addClass('unseen select').append(logo, title);
    $('#dropdownID').append(option);
  }

  $('.select').click(function () {
    chosen = $(this);
    chosen.siblings('.select').toggle();
  });

  $(document).on('mouseover', '.select', function () {
    $(this).addClass('selected');
  });
  $(document).on('mouseout', '.select', function () {
    $(this).removeClass('selected');
  });

  $(document).on('click', function (e) {
    if (!ddBlock.is(e.target) && ddBlock.has(e.target).length === 0) {
      chosen.siblings('.select').hide();
    }
  });
});

const SPORTS = [{
  name: 'Bout with the gloves',
  img: 'img/box.png'
}, {
  name: 'Archery',
  img: 'img/archery.png'
}, {
  name: 'Hockey',
  img: 'img/hockey.png'
}, {
  name: 'Skiing Sport',
  img: 'img/skiing.png'
}, {
  name: 'Table tennis',
  img: 'img/tennis.png'
}, {
  name: 'Weightlifting',
  img: 'img/weightlifting.png'
}, {
  name: 'Sailing Sport',
  img: 'img/sailing.png'
}, {
  name: 'Tracking Sport',
  img: 'img/tracking.png'
}];
