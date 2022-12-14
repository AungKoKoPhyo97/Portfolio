function clearData() {
    $('input[type=text]')?.each(function (i, obj) {
        $(this).val('');
    });
}

$(document).on('change', '.mail', function (e) {
    if (!$(this).val().match(/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i)) {
        $(this).val('');
    }
});

function sendMail() {
    var name = $('#name').val();
    var subject = $('#subject').val();
    var email = $('#email').val();
    var body = $('#comment').val();
    window.location.href = 'mailto:akkp.1997.kp@gmail.com?subject=' + subject + '&body=' + body + '%0D%0A From : ' + email + '%0D%0A Name : ' + name;
}
