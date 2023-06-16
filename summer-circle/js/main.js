// 실습 7. 배경음악 플레이어를 위한 함수 작성
// song__info라는 id를 가진 문서 요소 선택
const songEl = document.getElementById("song__info");
// headset--on이라는 id를 가진 문서 요소 선택
const musicOnEl = document.getElementById('headset--on');
// headset--off이라는 id를 가진 문서 요소 선택
const musicOffEl = document.getElementById('headset--off');

// 오디오 생성
const audio = new Audio();
// 플레이리스트 배열
const playlists = [
    { 
        src: "./audio/minsu_is_confused.mp3", 
        artist: "민수", 
        song: "민수는 혼란스럽다"
    }
];

// 윈도우가 로드할 시 작동하는 익명의 함수
window.addEventListener('load', function() {
    playlists.forEach((el, index) => {
        // playlists 배열에 있는 요소의 src에 해당하는 값을 오디오 소스로 설정
        audio.src = el.src
        // playlists 배열에 있는 요소의 artist에 해당하는 값과
        // song에 해당하는 값을 문서에 대입
        songEl.innerHTML = `${el.artist} - ${el.song}`
    })
    // 오디오 재생
    audio.autoplay = 'true'
    // 오디오 반복 재생 true
    // audio.loop = 'true'
})

// musicOnEl에 클릭 이벤트 발생할 시 작동하는 익명의 함수
musicOnEl.addEventListener('click', function() {
    // 헤드셋 on 아이콘을 보이지 않게 함
    musicOnEl.style.display = 'none'
    // 헤드셋 off 아이콘이 나타남
    musicOffEl.style.display = 'flex'
    // 오디오 일시정지
    audio.pause();
})

// musicOffEl에 클릭 이벤트 발생할 시 작동하는 익명의 함수
musicOffEl.addEventListener('click', function() {
    // 헤드셋 off 아이콘을 보이지 않게 함
    musicOnEl.style.display = 'flex'
    // 헤드셋 on 아이콘이 나타남
    musicOffEl.style.display = 'none'
    // 오디오 재생
    audio.play();
})