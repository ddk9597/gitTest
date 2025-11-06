document.addEventListener("DOMContentLoaded", function () {
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

