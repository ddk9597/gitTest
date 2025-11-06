document.addEventListener("DOMContentLoaded", function () {
  const leftBoxes = document.querySelectorAll(".leftContentBox");
  const rightBoxes = document.querySelectorAll(".rightContentBox");

  leftBoxes.forEach((box, index) => {
    box.addEventListener("click", function () {
      // 모든 left 박스 초기화
      leftBoxes.forEach(b => b.classList.remove("on"));
      // 클릭된 left 박스 활성화
      box.classList.add("on");

      // 모든 right 박스 숨기기
      rightBoxes.forEach(r => r.classList.remove("active"));
      // 같은 순서의 right 박스 보이기
      rightBoxes[index].classList.add("active");
    });
  });
});



// 모든 .btn-map 요소에 호버 이벤트 추가
document.addEventListener("DOMContentLoaded", function () {
  const btnMapElements = document.querySelectorAll(".btn-map");
  
  btnMapElements.forEach((btn) => {
    // 각 버튼에 mouseenter 이벤트 추가
    btn.addEventListener("mouseenter", function () {
      // 부모 요소 중 .floor-item 찾기
      const parentFloorItem = this.closest(".floor-item");
      if (parentFloorItem) {
        parentFloorItem.classList.add("on");
      }
    });
    
    // 각 버튼에 mouseleave 이벤트 추가
    btn.addEventListener("mouseleave", function () {
      // 부모 요소 중 .floor-item 찾기
      const parentFloorItem = this.closest(".floor-item");
      if (parentFloorItem) {
        parentFloorItem.classList.remove("on");
      }
    });
  });
});
