
/*CSS and HTML designed by Pegah Tavakoli, Jennifer Illner, and Kurtis Waterston
Code for COMP1950 website re-design project */

var historyPushState = ( function() {
    var $ = jQuery;
    var $title = $( 'title' );
    
    return function( options ) {
        options = $.extend( {}, {
            stateObj: {},
            title: $title.html(),
            path: ''
        }, options );
        window.history.pushState( options.stateObj, options.title, document.location.href.split('#')[0] + '#' + options.path );
    };
} )();