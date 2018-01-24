jQuery(document).ready(function(){
    var menu = $('.main_menu');

    menu.on('click', function(e) {
            if (e.target.tagName === 'I') {
                $(e.target).prev('.target').find('ul').toggleClass('toggle_class');
                $(e.target).toggleClass('rotate_arrow');
            }
    })
});