$(function() {
    var count = 0;
    $(".content ul li").eq(0).show()
    setInterval(function() {
        count++;
        if (count > 3) {
            count = 0;
        }
        $(".content ul li").eq(count).fadeIn().siblings().fadeOut();
    }, 3000)

})