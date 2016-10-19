jQuery(document).ready(function() {
    jQuery('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');
 
        // Show/Hide Tabs
        jQuery('.tabs ' + currentAttrValue).show().siblings().hide();
 
        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
         });
    $('.logo').animate({right:'900px'}, 300);
  //   $('.logo').rotate({
  //       duration: 200,
  //       angle: 180,
  //       animateTo:0
  // });
    //$('.logo').animate({left:'300px'}, 100);

      });