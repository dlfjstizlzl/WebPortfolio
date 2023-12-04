window.addEventListener("load", function () {
  let elNavi = document.querySelector(".header > ul");
  let aElSection = document.querySelectorAll(".main > section");
  let curSIdx = 0;
  let wheelTimer;
  window.addEventListener("wheel", function (e) {
      clearTimeout(wheelTimer);
      wheelTimer = setTimeout(function () {
          if (e.deltaY < 0) doScroll(--curSIdx);
          else doScroll(++curSIdx);
      }, 50);
  });

  function doScroll(sidx) {
      sidx = sidx < 0 ? 0 : sidx;
      sidx = sidx > aElSection.length - 1 ? aElSection.length - 1 : sidx;

      curSIdx = sidx;

      aElSection[curSIdx].scrollIntoView({
          block: "start",
          inline: "start",
          behavior: "smooth"
      });
  }

  const textContainer = document.getElementById('text-container');

  // 텍스트 내용
  const textContent = "세상을 위한 개발자";

  // 각 글자에 대한 각도 생성 및 스타일 적용
  for (let i = 0; i < textContent.length; i++) {
      const letter = document.createElement('span');
      letter.textContent = textContent[i];
      letter.classList.add('animatedLetter');

      // 난수로 각도 설정 (0도에서 360도 사이)
      const randomAngle = Math.floor(Math.random() * 361);

      // 스타일 속성 설정
      letter.style.setProperty('--random-angle', `${randomAngle}deg`);

      // 적용된 스타일 속성을 한 번에 적용
      letter.style.transition = 'transform 0.5s ease-in-out';

      // 컨테이너에 추가
      textContainer.appendChild(letter);
  }
});
