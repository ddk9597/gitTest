document.addEventListener("DOMContentLoaded", function () {
  let exhMapSwiper = null;
  
  // 화면 크기 체크 함수
  function checkScreenSize() {
    const isMobile = window.innerWidth <= 1080;
    const swiperElement = document.querySelector('.exhMapSwiper');
    
    if (!swiperElement || typeof Swiper === 'undefined') return;
    
    if (isMobile && !exhMapSwiper) {
      // 1080px 이하: Swiper 초기화
      exhMapSwiper = new Swiper('.exhMapSwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: false,
        speed: 600,
        navigation: {
          nextEl: '.exhMapSwiper .swiper-button-next',
          prevEl: '.exhMapSwiper .swiper-button-prev',
        },
        pagination: {
          el: '.exhMapSwiper .swiper-pagination',
          clickable: true,
          type: 'bullets',
        },
      });
    } else if (!isMobile && exhMapSwiper) {
      // 1080px 초과: Swiper 제거
      exhMapSwiper.destroy(true, true);
      exhMapSwiper = null;
    }
  }
  
  // 초기 체크
  checkScreenSize();
  
  // 리사이즈 이벤트 리스너 (디바운싱 적용)
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      checkScreenSize();
    }, 250);
  });

  // 버튼 ID와 이동할 타깃 ID 매핑
  const clickBtnsMapper = {
    to_gogungPaints: "gogungPaints",
    to_royalRites: "royalRites",
    to_scienceCulture: "scienceCulture",
    to_gogungLearningPlace: "gogungLearningPlace",
    to_daehanEmpire: "daehanEmpire",
    to_royalCarriage: "royalCarriage",
    to_kingsOfJosun: "kingsOfJosun",
    to_lifeOfKing: "lifeOfKing",
  };

  // 각 버튼에 클릭 이벤트 등록
  Object.entries(clickBtnsMapper).forEach(([btnId, targetId]) => {
    const btn = document.getElementById(btnId);
    const target = document.getElementById(targetId);

    if (btn && target) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();

        // 스무스 스크롤 이동
        target.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        // 하이라이트 효과
        target.classList.add("highlight");
        setTimeout(() => {
          target.classList.remove("highlight");
        }, 1200);
      });
    }
  });
});

