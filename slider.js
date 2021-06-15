jQuery(function () {
    var isClicked = 0;
    function Slider() {
        var i = 0;
        var x = $('.sliderPic').length;
        $('.sliderPic').eq(i).css({ 'width': `${100}%` });
        
        //Next Slide
        function ShowPicNext(l) {
            var a = 0;

            var animInterval = setInterval(AnimateShow, 10);

            function AnimateShow() {
                $('.sliderPic').eq(l).css({
                    'width': `${a}%`
                });
                a++;

                if (a > 100) { clearInterval(animInterval); isClicked = 0;}
            }
        }

        function HidePicNext(l) {
            var a = 100;

            var animInterval = setInterval(AnimateHide, 10);

            function AnimateHide() {
                $('.sliderPic').eq(l).css({
                    'width': `${a}%`
                });
                a--;

                if (a < 0) { clearInterval(animInterval); }
            }
        }

        function Next() {
            $('.next').on('click', function () {
                if (isClicked == 0) {
                    isClicked++;
                    i++;
                    ShowPicNext(i);
                    HidePicNext(i - 1);
                    if (i >= x) { i = 0; HidePicNext(i - 1); ShowPicNext(i); }
                }
            });
        }




        //Previous Slide
        function ShowPicPrev(l) {
            var a = 0;

            var animInterval = setInterval(AnimateShow, 10);

            function AnimateShow() {
                $('.sliderPic').eq(l).css({
                    'width': `${a}%`
                });
                a++;

                if (a > 100) { clearInterval(animInterval); isClicked = 0;}
            }
        }

        function HidePicPrev(l) {
            var a = 100;

            var animInterval = setInterval(AnimateHide, 10);

            function AnimateHide() {
                $('.sliderPic').eq(l).css({
                    'width': `${a}%`
                });
                a--;

                if (a < 0) { clearInterval(animInterval); }
            }
        }
        function Prev() {
            $('.prev').on('click', function () {
                i--;
                ShowPicPrev(i)
                HidePicPrev(i + 1);
                if (i <= -1) { i = x - 1;}
            });
        }

        Next();
        Prev();
    }

    Slider();
});