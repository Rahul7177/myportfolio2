document.addEventListener('DOMContentLoaded',function(){
    const form = document.querySelector('form');
    const mail = document.querySelector('input[name = "email"]');
    const msg = document.querySelector('textarea[name="msg"]');
    const btn = document.getElementById('submit-btn');


    btn.addEventListener('click', function() {
        const emailValue = mail.value.trim();
        const messageValue = msg.value.trim();

        if (emailValue === '' || messageValue === '') {
            alert('Please fill in all fields.');
        } else {
            form.submit();
        }

    });

});
