$('button').click(function () {
    if ($(this).hasClass('value')) {
        if ($(this).val() == '.') {
            $('.result').text($('.result').text() + $(this).val())
        }
        else if ($('.result').text() === '0') {
            $('.result').text($(this).val())
        }
        else
            $('.result').text($('.result').text() + $(this).val())
    }
    if ($(this).hasClass('evaluate')) {
        $('.equation').text($('.result').text())
        $('.result').text(eval($('.result').text()))
    }
    if ($(this).hasClass('delete')) {
        $('.result').text($('.result').text().slice(0, -1))
    }
    if ($(this).hasClass('percent')) {
        $('.result').text(eval(parseInt(eval($('.result').text()))/100))

    }
    if ($(this).hasClass('clear')) {
        $('.result').text('0')
    }
})
$('.equation').click(function () {
    $('.result').text($(this).text())
})