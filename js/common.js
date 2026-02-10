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

  $("#menus").load("common/menu.html", function (res, status) {
    if (status === "error") {
      console.error("메뉴 로드 실패");
    }
  });

// 메뉴
  $(document).on("click", ".menu_open", function (e) {
    e.preventDefault();
    $(".menu_wrap").addClass("active");
  });

  $(document).on("click", ".quick_menu li:last-child a", function (e) {
    e.preventDefault();
    $(".menu_wrap").removeClass("active");

    $(".submenu").slideUp();
    $("#gnb > ul > li > a img").attr("src", "images/icn_plus.png");
  });

  $(document).on("click", "#gnb > ul > li > a", function (e) {
    e.preventDefault();

    let $this = $(this);
    let $submenu = $this.next(".submenu");

    if ($submenu.is(":visible")) {
      $submenu.slideUp();
      $this.find("img").attr("src", "images/icn_plus.png");
      return;
    }

    $(".submenu").slideUp();
    $("#gnb > ul > li > a img").attr("src", "images/icn_plus.png");

    $submenu.slideDown();
    $this.find("img").attr("src", "images/icn_minus.png");
  });


});
