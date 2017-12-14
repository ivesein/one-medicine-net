$('.item').click(function() {
    $('.item').removeClass('cur');
    $(this).addClass('cur');
    console.log($(this).index());
    if ($(this).index() === 0) {
        $('#commonLogin').css('display', 'block');
        $('#quickLogin').css('display', 'none');
    } else if ($(this).index() === 1) {
        $('#commonLogin').css('display', 'none');
        $('#quickLogin').css('display', 'block');
    }
});

$('#phoneNum4QuickLogin').focus(function() {
    $('#phoneNum4QuickLogin').css('border-color', '#0099F1');
});

$('#phoneNum4QuickLogin').blur(function() {
    var oReg = /^1(3|4|5|7|8)[0-9]\d{8}$/;
    var sEmail = $('#phoneNum4QuickLogin').val();
    if (sEmail == '') {
        // $('#email_true').css('display', 'none');
        $('#phoneNum4QuickLogin').css('border-color', '#ffaa00');
        $('#phoneNum4QuickLogin_empty').css('display', 'block');
    } else if (!oReg.test(sEmail)) {
        // $('#email_true').css('display', 'none');
        $('#phoneNum4QuickLogin').css('border-color', '#f00');
        $('#accountDesc').html('手机号格式不正确');
        $('#phoneNum4QuickLogin_empty').css('display', 'none');
    } else {
        $('#phoneNum4QuickLogin_empty').css('display', 'none');
        $('#accountDesc').html('');
        $('#phoneNum4QuickLogin').css('border-color', '#e6e6e6');
        // $('#email_true').css('display', 'block');
    }
});

$('#btnSubmit').click(function() {
    $.ajax({
        type: 'post',
        url: 'login.php',
        data: {
            account: $('input[name="ecuserCustomer.id"]').val(),
            password: $('input[name="ecuserCustomer.password"]').val(),
        },
        success: function(data) {
            data = JSON.parse(data);
            if (data.status == 200 && $('#vcd').val() == 123) {
                // 显示登录成功
                // console.log(data.info)
                $('.pwd_desc').text('');
                $('.login_load').css('display', 'block');
                setTimeout(function() {
                    $('.login_load').css('display', 'none');
                    window.location.href = 'index.html'
                }, 3000);
            } else if (data.status === 401) {
                $('.pwd_desc').text(data.info);
            } else if ($('#vcd').val() !== 123) {
                // $('.pwd_desc').text('');
                $('#vcd_desc').text('验证码错误');
                // $('.result_msg ').show().text('验证码错误')
                // $('.tps_reg_btn').css({ display: 'block' })
                // $('.tps_reg_btns').css({ display: 'none' })
            }
        }
    })
    return false;
});