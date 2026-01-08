    //用按鈕播放照片 加入原點 自動播放
    var slideIndex = 0;
    var timer = null;
    //showSlides(slideIndex);
    autoplay(true);

    function plusSlides(n) {
      showSlides(slideIndex += n)
    }

    function currentSlides(n) {
      showSlides(slideIndex = n)
    }

    function showSlides(n) {
      clearTimeout(timer);
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");

      if (n >= slides.length) {
        slideIndex = 0;
      }
      if (n < 0) {
        slideIndex = slides.length - 1;
      }
      for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[slideIndex].style.display = "block";

      for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      dots[slideIndex].className += " active";

    }

    function autoplay(isFirst) {
      var slides = document.getElementsByClassName("mySlides");
      if (isFirst) {
        slideIndex = 0;
      } else {
        slideIndex++;
      }

      if (slideIndex > slides.length) {
        slideIndex = 0;
      }
      showSlides(slideIndex);
      timer = setTimeout(autoplay, 4000);
    }
    /* === 新增：送出評論功能 === */
function submitReview() {
    // 1. 抓取輸入框的值
    const nameInput = document.getElementById('reviewerName');
    const starsInput = document.getElementById('reviewerStars');
    const contentInput = document.getElementById('reviewContent');
    const list = document.getElementById('reviewsList');

    const name = nameInput.value.trim();
    const stars = starsInput.value;
    const content = contentInput.value.trim();

    // 2. 簡單檢查有沒有填寫
    if (name === "" || content === "") {
        alert("請輸入暱稱與評論內容喔！");
        return;
    }

    // 3. 建立新的評論 HTML 結構
    // 這裡我們直接用與原本 review-card 一樣的結構
    const newCard = document.createElement('div');
    newCard.className = 'review-card'; // 確保套用原本的樣式
    
    // 加上一點淡入動畫效果 (style="animation: fade 1s")
    newCard.style.animation = "fade 1s"; 

    newCard.innerHTML = `
        <div class="stars">${stars}</div>
        <p class="review-text">${content}</p>
        <p class="reviewer">- ${name} (剛剛)</p>
    `;

    // 4. 把新卡片插入到列表的最前面 (prepend)
    // 這樣最新的評論會顯示在第一個
    list.prepend(newCard);

    // 5. 清空輸入框並提示成功
    nameInput.value = '';
    contentInput.value = '';
    alert("評論已送出！感謝您的回饋。");
}