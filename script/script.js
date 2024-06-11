ScrollTrigger.create({
  trigger: ".contact-text-box", //(start 위치)
  start: "top 30%", //(scroller-start 위치)
  end: "bottom 5%", //(end 위치)
  endTrigger: ".contact-text-box",
  // markers: true,
  toggleClass: "trigger",
  scrub: true, // 모션바운스(scrub: 1: 숫자가 높아질수록 애니메이션이 부드러워짐, true도 가능)
  onEnter: function () {
    // 위에서 아래로 내려오다가 트리거 엘리먼트의 정수리를 발견했을 때
    $(".text-animation").addClass("on");
  },
  onLeave: function () {
    // 위에서 아래로 내려오다가 트리거 엘리먼트의 발끝을 지나쳤을 때
    $("fitness-section").addClass("trigger");
  },
  onEnterBack: function () {
    // 위에서 아래로 내려오다가 트리거 엘리먼트의 발끝을 발견했을 때
    $("fitness-section").removeClass("trigger");
  },
  onLeaveBack: function () {
    // 위에서 아래로 내려오다가 트리거 엘리먼트의 정수리를 지나쳤을 때
    $("fitness-section").removeClass("trigger");
  },
});
