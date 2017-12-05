
/*CSS and HTML designed by Pegah Tavakoli, Jennifer Illner, and Kurtis Waterston
Code for COMP1950 website re-design project */

var outerHtml = function(){
    return (!this.length) ? this : (this[0].outerHTML || (
      function(el){
          var div = document.createElement('div');
          div.appendChild(el.cloneNode(true));
          var contents = div.innerHTML;
          div = null;
          return contents;
    })(this[0]));
};