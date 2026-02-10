$(function () {

  $(".login_form").on("submit", function (e) {
    e.preventDefault();

    let userId = $("#u_id").val().trim();
    let userPw = $("#password").val().trim();

    // 테스트
    let correctId = "admin";
    let correctPw = "1234";

    if (userId === "" || userPw === "") {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    if (userId === correctId && userPw === correctPw) {
      // 로그인 성공 -> sessionStorage 저장
      sessionStorage.setItem("loginUser", userId);

      alert("로그인 성공");
      location.href = "index.html"; // 로그인 성공하면 메인으로 이동
    } else {
      alert("아이디 또는 비밀번호가 틀렸습니다.");
    }

  });

});
