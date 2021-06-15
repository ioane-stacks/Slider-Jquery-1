jQuery(function () {

    function Slider() {
        var i = 0;
        var x = $('.sliderPic').length;
        $(`.sliderPic`).eq(i).css({ 'display': 'block' });
        function Next() {
            $('.next').on('click', function () {
                i++;
                $(`.sliderPic`).eq(i).css({ 'display': 'block' });
                $(`.sliderPic`).eq(i - 1).css({ 'display': 'none' });
                if (i >= x) { i = 0; $(`.sliderPic`).eq(i).css({ 'display': 'block' }); }
            });
        }
        function Prev() {
            $('.prev').on('click', function () {
                i--;
                $(`.sliderPic`).eq(i).css({ 'display': 'block' });
                $(`.sliderPic`).eq(i + 1).css({ 'display': 'none' });
                if (i <= -1) { i = x - 1; $(`.sliderPic`).eq(i).css({ 'display': 'block' });}
            });
        }

        Next();
        Prev();
    }

    Slider();
});