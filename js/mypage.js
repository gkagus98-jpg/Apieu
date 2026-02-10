$(function () {

  let loginUser = sessionStorage.getItem("loginUser");

  // 로그인 안 되어있으면 로그인 페이지로 보내기
  if (loginUser === null) {
    alert("로그인이 필요한 서비스입니다.");
    location.href = "login.html";
    return;
  }

  // 로그인 유저 이름 출력 (OOO 님 자리)
  $("#wrapper h2 a").text(loginUser + " 님 >");


  // 로그아웃 버튼 클릭
  $("#logout a:first-child").on("click", function (e) {
    e.preventDefault();

    sessionStorage.removeItem("loginUser");
    alert("로그아웃 되었습니다.");
    location.href = "index.html";
  });

});
