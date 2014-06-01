angular.module('angularSlideables', [])
.directive('slideable', function () {
    return {
        restrict:'C',
        compile: function (element, attr) {
            // wrap tag
            var contents = element.html();
            element.html('<div class="slideable_content" style="margin:0 !important; padding:0 !important" >' + contents + '</div>');

            return function postLink(scope, element, attrs) {
                // default properties
                attrs.duration = (!attrs.duration) ? '1s' : attrs.duration;
                attrs.easing = (!attrs.easing) ? 'ease-in-out' : attrs.easing;
                element.css({
                    'overflow': 'hidden',
                    'height': '0px',
                    'transitionProperty': 'height',
                    'transitionDuration': attrs.duration,
                    'transitionTimingFunction': attrs.easing
                });
            };
        }
    };
})
.directive('slideToggle', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attributes) {
            var target, content, arrow;
            
            attributes.expanded = false;
            
            element.bind('click', function() {

                if (!arrow) {
                    arrow = document.querySelector(attributes.arrowToggle);
                }

                if (!target) {
                    target = document.querySelector(attributes.slideToggle);
                }

                if (!content) {
                    content = target.querySelector('.slideable_content');
                }
                
                if(!attributes.expanded) {
                    content.style.border = '1px solid rgba(0,0,0,0)';
                    var y = content.clientHeight;
                    content.style.border = 0;
                    target.style.height = y + 'px';
                    arrow.style.margin = "10px 10px 0 0";
                    arrow.style.transform = "rotate(90deg)";
                    arrow.style.WebkitTransform = "rotate(90deg)";
                    arrow.style.msTransform = "rotate(90deg)";
                } else {
                    target.style.height = '0px';
                    arrow.style.margin = "0";
                    arrow.style.transform = "rotate(0deg)";
                    arrow.style.WebkitTransform = "rotate(0deg)";
                    arrow.style.msTransform = "rotate(0deg)";
                }
                attributes.expanded = !attributes.expanded;
            });
        }
    }
});
