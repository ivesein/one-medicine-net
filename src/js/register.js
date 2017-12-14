$('#email').blur(function() {
    var oReg = /^1(3|4|5|7|8)[0-9]\d{8}$/;
    var sEmail = $('#email').val();
    if (sEmail == '') {
        $('#email_true').css('display', 'none');
        $('#email').css('border-color', '#ffaa00');
        $('#email_empty').css('display', 'block');
    } else if (!oReg.test(sEmail)) {
        $('#email_true').css('display', 'none');
        $('#email').css('border-color', '#f00');
        $('#accountDesc').html('手机号格式不正确');
        $('#email_empty').css('display', 'none');
    } else {
        $('#email_empty').css('display', 'none');
        $('#accountDesc').html('');
        $('#email').css('border-color', '#e6e6e6');
        $('#email_true').css('display', 'block');
    }
});
$('#email').focus(function() {
    $('#email').css('border-color', '#0099F1');
});
$('#userpass').focus(function() {
    $('#userpass').css('border-color', '#0099F1');
    $('#password_tip').css('display', 'block');
});
$('#userpass').blur(function() {
    var oReg = /^(\w){6,20}$/;
    var sPassword = $('#userpass').val();
    if (sPassword == '') {
        $('#password_tip').css('display', 'none');
        $('#password_true').css('display', 'none');
        $('#userpass').css('border-color', '#ffaa00');
        $('#passport_empty').css('display', 'block');

    } else if (!oReg.test(sPassword)) {
        $('#password_tip').css('display', 'none');
        $('#password_true').css('display', 'none');
        $('#userpass').css('border-color', '#f00');
        $('#password_error').html('密码格式不正确');
        $('#email_empty').css('display', 'none');
    } else {
        $('#password_tip').css('display', 'none');
        $('#email_empty').css('display', 'none');
        $('#password_error').html('');
        $('#email').css('border-color', '#e6e6e6');
        $('#password_true').css('display', 'block');
        $('#password2').removeAttr('disabled');
    }
});

$('#password2').focus(function() {
    $('#password2').css('border-color', '#0099F1');
    $('#password2_tip').css('display', 'block');
});
$('#password2').blur(function() {
    $('#password2_tip').css('display', 'none');
    var sPassWord1 = $('#userpass').val();
    var sPassWord2 = $('#password2').val();
    if (sPassWord1 === sPassWord2) {
        $('#password2_error').html('');
        $('#password2_true').css('display', 'block');
    } else {
        $('#password2_true').css('display', 'none');
        $('#password2_error').html('两次密码不一致');
    }
});
if ($('#xyCheckBox').attr('checked') == 'checked') {
    $('#xyCheckBox_desc').css('display', 'none');
} else {
    $('#xyCheckBox_desc').css('display', 'block');
}

$('#xyCheckBox').click(function() {
    if (!$('#xyCheckBox').attr('checked')) {
        $('#xyCheckBox_desc').css('display', 'block');
    } else {
        $('#xyCheckBox_desc').css('display', 'none');
    }
    console.log($('#email_true').css('display'));
});

$('#registerButton').click(function() {

    if ($('#email_true').css('display') === 'block' && $('#password_true').css('display') === 'block' && $('#password2_true').css('display') === 'block' && $('#xyCheckBox').attr('checked') === 'checked') {
        location.href = 'index.html';
    } else {
        location.href = 'register.html';
    }

    return false;
});