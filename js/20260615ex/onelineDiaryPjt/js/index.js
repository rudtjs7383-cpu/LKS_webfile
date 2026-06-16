// "HTML(밑그림) 다 로딩될 때까지 기다렸다가, 그다음 자바스크립트 실행하는 명령어
// 그림도 없는데 자바스크립트가 먼저 나대다가 에러(Error) 나는 것을 막아주는 안전장치
//                  리스너              이벤트 종류   콜백함수/ 핸들러
document.addEventListener('DOMContentLoaded' , function() {
    console.log('DOCUMET READY!!');
    
    init();
})

function init() {
    console.log('init() CALLED!!');

    // 뷰와 관련된 내용
    initViews();

    // 이벤트와 관련된 내용
    addEvents();
}

// 전역변수로 전환
let signUpWrap = '';
let signInWrap = '';
let writeWrap = '';
let listWrap = '';

function initViews() {
    console.log('initViews() CALLED!!');

    // 버튼 이벤트
    signUpWrap = document.querySelector('div.sign_up_wrap');
    signInWrap = document.querySelector('div.sign_in_wrap');
    writeWrap = document.querySelector('div.write_wrap');
    listWrap = document.querySelector('div.list_wrap');

}

function addEvents() {
    console.log('addEvents() CALLED!!');

        // 메뉴 버튼 이벤트 START 회원가입
    let signUpMeeuBut = document.querySelector('div.menu_wrap a.sign_up')
        signUpMeeuBut.addEventListener('click',function(){
            console.log('signUpMeeuBut CALLED!!');

            showSelectedView(SIGN_UP_VIEW)

        });

        // 로그인
    let signInMeeuBut = document.querySelector('div.menu_wrap a.sign_in')
        signInMeeuBut.addEventListener('click',function(){
            console.log('signInMeeuBut CALLED!!');

            showSelectedView(SIGN_IN_VIEW)

        });

        // 회원삭제
    let deleteMeeuBut = document.querySelector('div.menu_wrap a.delete')
        deleteMeeuBut.addEventListener('click',function(){
            console.log('deleteMeeuBut CALLED!!');

            removeMember();
            alert('회원탈퇴가 정상적으로 처리 되었습니다.');

            signInedMemberId == '';

            setMenuByStatus(SIGN_OUT_STATUS);

            showSelectedView(HOME_VIEW);

        });

        // 일지 작성
    let writeMeeuBut = document.querySelector('div.menu_wrap a.write')
        writeMeeuBut.addEventListener('click',function(){
            console.log('writeMeeuBut CALLED!!');

            if (signInedMemberId === '') {
                alert('로그인 후 이용 부탁드립니다.');
                showSelectedView(SIGN_IN_VIEW);
                return;
            }

            
        });

        // 일지 리스트
    let listMeeuBut = document.querySelector('div.menu_wrap a.list')
        listMeeuBut.addEventListener('click',function(){
            console.log('listMeeuBut CALLED!!');

            showSelectedView(LIST_VIEW)

            if (signInedMemberId === '') {
                alert('로그인 후 이용 부탁드립니다.');
                showSelectedView(SIGN_IN_VIEW);
                return;
            } 


            listUpDiaries();

        });

      // 메뉴 버튼 이벤트 END

        // 회원가입
    let signUpBtn = document.querySelector('div.sign_up_wrap input[type="button"]')
        signUpBtn.addEventListener('click',function(){
            console.log('signUpBtn.CALLED');

            let uIdEle = document.querySelector('div.sign_up_wrap input[name="u_id"]')
            let uPwEle = document.querySelector('div.sign_up_wrap input[name="u_pw"]')
            let uMaukEle = document.querySelector('div.sign_up_wrap input[name="u_mail"]')

            addMember(uIdEle.value, uPwEle.value, uMaukEle.value);

            alert('회원가입을 축하드립니다!')

            removeValue([uIdEle, uPwEle, uMaukEle]);
        });

        // 로그인 
    let signInBtn = document.querySelector('div.sign_in_wrap input[type="button"]')
        signInBtn.addEventListener('click',function(){
            console.log('signInBtn.CALLED');

            let uIdEle = document.querySelector('div.sign_in_wrap input[name="u_id"]')
            let uPwEle = document.querySelector('div.sign_in_wrap input[name="u_pw"]')

            let isMember = searchMember(uIdEle.value, uPwEle.value)

            if (isMember) {
                signInedMemberId = uIdEle.value;
                alert('로그인 성공');

                setMenuByStatus(SIGN_IN_STATUS);

                showSelectedView(HOME_VIEW)
                
            } else {
                signInedMemberId = '';
                alert('아이디와 비밀번호를 다시 확인 해주세요');

                setMenuByStatus(SIGN_OUT_STATUS);
            }

            removeValue([uIdEle, uPwEle]);

        });

        // 일지 작성
    let writeBtn = document.querySelector('div.write_wrap button')
    writeBtn.addEventListener('click', function(){
        console.log('writeBtn() CALLED!!');

        let txt = document.querySelector('div.write_wrap input').value;

        addDiary(getCurrentDate() + txt);

        removeValue([document.querySelector('div.write_wrap input')]);

        showSelectedView(LIST_VIEW);

    })
 
}

// 데이터 초기화
function removeValue(eles) {
    console.log('removeValue() CALLED!!');

    for(let i = 0; i < eles.length; i++)
        eles[i].value = '';

}

// 리스트 가져오기
function listUpDiaries(){
    console.log('listUpDiaries() CALLED!!');

    listWrap.textContent = '';

    let diaryarr = searchDiaies();
    
    for (let i = 0; i < diaryarr.length; i++) {

        //  template 가져오기
        let tpl = document.querySelector('#list_ltem');
        // template clone 복사
        let clone =  document.importNode(tpl.content,true);
        //  txt 안에 들어가는 텍스트 
        let txt = clone.querySelector('div.txt');
        txt.textContent = diaryarr[i];

        listWrap.prepend(clone);
    }

}