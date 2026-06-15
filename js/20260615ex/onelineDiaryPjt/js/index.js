document.addEventListener('DOMContentLoaded', function() {
    console.log('DOCUMENT READY!!');

    init();

});

function init() {
    console.log('init() CALLED!!');

    initViews();
    addEvents();

}

signUpWrap = '';
signInWrap = '';
writeWrap = '';
listWrap = '';

function initViews() {
    console.log('initViews() CALLED!!');

    signUpWrap = document.querySelector('div.sign_up_wrap');
    signInWrap = document.querySelector('div.sign_in_wrap');
    writeWrap = document.querySelector('div.write_wrap');
    listWrap = document.querySelector('div.list_wrap');
    
}

function addEvents() {
    console.log('addEvents() CALLED!!');

    let signUpMenuBtn = document.querySelector('div.menu_wrap a.sign_up');
    signUpMenuBtn.addEventListener('click', function() {
        console.log('signUpMenuBtn CLICEKD!!');

        showSelectedView(SIGN_UP_VIEW);
    
    });

    let signInMenuBtn = document.querySelector('div.menu_wrap a.sign_in');
    signInMenuBtn.addEventListener('click', function() {
        console.log('signInMenuBtn CLICEKD!!');
         showSelectedView(SIGN_IN_VIEW);
    });

    let signOutMenuBtn = document.querySelector('div.menu_wrap a.sign_out');
    signOutMenuBtn.addEventListener('click', function() {
        console.log('signOutMenuBtn CLICEKD!!');
        showSelectedView(DIARY_WRITE)
    });


    let writeMenuBtn = document.querySelector('div.menu_wrap a.write');
    writeMenuBtn.addEventListener('click', function() {
    console.log('writeMenuBtn CLICEKD!!');
        showSelectedView(DIARY_LIST)
    });
    let signUpBtn = document.querySelector('div.sign_up_wrap input[type = "button"]');
    signUpBtn.addEventListener('click',function(){
        console.log('signUpBtn CALLED !!');
        let u_id =('div.sign_up_wrap input [name="u_id"]').value;
        let u_pw =('div.sign_up_wrap input [name="u_pw"]').value;
        let u_mail =('div.sign_up_wrap input [name="u_mail"]').value;
        
        addMember(u_id,u_pw,u_mail);

        alert('SIGNUP SUCCESS!!')

    });
}
