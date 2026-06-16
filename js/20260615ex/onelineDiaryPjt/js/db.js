const memberDB = new Map();
const diaryDB = new Map();

function addMember(id, pw, mail) {
    console.log('addMember() CALLED')

    memberDB.set(id, {
        'u_id':id,
        'u_pw':pw,
        'u_mail':mail
    });

    diaryDB.set(id, []);

}

function searchMember(id, pw) {
    console.log('searchMember() CALLED');

    let memObj= memberDB.get(id);   
    
    if (memObj !== undefined && memObj.u_pw === pw) {
        return true;
    }

    return false;
}

function addDiary(txt) {  // 일지 내용저장
    console.log('addDiary() CALLED');

    let diaryArray = diaryDB.get(signInedMemberId);
    diaryArray.push(txt);

    console.log('diaryDB: ', diaryDB);
}

function searchDiaies() {  // 일지 내용 가져오기
    console.log('searchDiaies() CALLED');

    let diaryArr = diaryDB.get(signInedMemberId); //  리스트 배열로 나옴
    return diaryArr;
    
}