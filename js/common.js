$(function () {
  $("#headers").load("common/header.html", function (res, status) {
    if (status === "error") {
      console.error("헤더 로드 실패");
    }
  });

  $("#footers").load("common/footer.html", function (res, status) {
    if (status === "error") {
      console.error("푸터 로드 실패");
    }
  });
});