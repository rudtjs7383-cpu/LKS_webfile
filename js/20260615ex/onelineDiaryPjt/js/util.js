let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

function getCurrentDate() {
    console.log('getCurrentDate() CALLED!!');

    // 날짜 시간
    let today = new Date();
    console.log('today: ', today);

    let year = today.getFullYear();     // 년(2026)
    let month = today.getMonth();        // 월(5, 0 ~ 11)
    let date = today.getDate();         // 일(16)
    let day = today.getDay();         // 요일(2, 0:일요일 1:월요일 2:화요일 ~ 6)

    str = `[${year}/${month + 1}/${date}/${days[day]}] `;

    return str;

}