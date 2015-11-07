$(document).ready ->
  $('.project-tooltip').tooltip({ position: "bottom right", effect: 'slide', offset: [10, 2], relative: true, events: { def: 'click, none', tooltip: 'click, none'} });

  $('.project-tooltip').click ->
      $(this).data('tooltip').getTip().show();

  $('.tooltip .close').click ->
      $(this).parent('.tooltip').prev('span.help').data('tooltip').getTip().hide();
