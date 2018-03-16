$(function() {
    // Click tabs
    $('.js-click-tab').click(function() {
        var hr = $($(this).closest('.nav').data('hr'));
        var number = $(this).data('tab-number');
        hr.removeClass(function(index, className) {
            return (className.match(/(^|\s)num--\S+/g) || []).join(' ');
        });
        hr.addClass('num--' + number);
    })
    // Click tabs --/
});