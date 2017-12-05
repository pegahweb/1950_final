

/*CSS and HTML designed by Pegah Tavakoli, Jennifer Illner, and Kurtis Waterston
Code for COMP1950 website re-design project */

var refreshHTMLClasses = function() {
    var $ = jQuery;
    var $html = $( 'html' );
    
    return function() {
        $html.find( '.jgallery' ).length === 0 ? $html.removeClass( 'has-jgallery' ) : $html.addClass( 'has-jgallery' );
        $html.find( '.jgallery.hidden' ).length === 0 ? $html.removeClass( 'has-hidden-jgallery' ) : $html.addClass( 'has-hidden-jgallery' );
        $html.find( '.jgallery:not(.hidden)' ).length === 0 ? $html.removeClass( 'has-visible-jgallery' ) : $html.addClass( 'has-visible-jgallery' );
    };
};