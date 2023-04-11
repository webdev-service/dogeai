(() => {
  var e,
    t = 0,
    n = document.getElementById("nav");
  window.addEventListener("scroll", function (r) {
    (e = window.scrollY),
      t < e && e > 500
        ? (n.classList.remove("slide-down"), n.classList.add("slide-up"))
        : (n.classList.remove("slide-up"), n.classList.add("slide-down")),
      (t = e);
  });
  $(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow");
    $("body").addClass("loaded");
  });

  $("#mtoggle").on("click", function (e) {
    1 == document.getElementById("menuToggle").checked
      ? ($("body").removeClass("noscroll"),
        (document.getElementById("menuToggle").checked = !0))
      : ($("body").addClass("noscroll"),
        (document.getElementById("menuToggle").checked = !1));
  });
  $(".key-nav").on("click", function (e) {
    (document.getElementById("menuToggle").checked = !1),
      $("body").removeClass("noscroll");
  });
  var isMobile = false; //initiate as false
  // device detection
  if (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
      navigator.userAgent
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      navigator.userAgent.substr(0, 4)
    )
  ) {
    isMobile = true;
  }

  if (!isMobile) {
    var videoFile = "./public/intro.mp4?v=1";
    $("video#introVideo source").attr("src", videoFile);

    $("video#introVideo")[0].load();
  }
  if (isMobile) {
    var videoFile = "./public/intro-m.mp4";
    $("#introVideo source").attr("src", videoFile);
    var video = document.getElementById("introVideo");

    video.setAttribute("playsinline", "");
    video.setAttribute("muted", "");
    video.play();

    // $("video#introVideo")[0].load();
  }
  window.addEventListener("scroll", function () {
    let value = window.scrollY;
    // n.classList.add("bg");

    if (value < 100) {
      // n.classList.remove("bg");
    }

    if (value > 1500) {
      $(".scroll-up").fadeIn();
    } else {
      $(".scroll-up").fadeOut();
    }
  });

  // var swiper = new Swiper(".utility-list", {
  //   slidesPerView: 3,
  //   // spaceBetween: 30,
  //   freeMode: true,
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  //   mousewheel: true,
  //   keyboard: true,
  //   breakpoints: {
  //     340: {
  //       slidesPerView: 1,
  //       spaceBetween: 20,
  //     },
  //     768: {
  //       slidesPerView: 2,
  //       spaceBetween: 40,
  //     },
  //     1024: {
  //       slidesPerView: 3,
  //       spaceBetween: 0,
  //     },
  //   },
  // });
  var swiper = new Swiper(".showcase-list", {
    slidesPerView: 5,
    loop: true,
    autoplay: {
      delay: 0,
    },
    speed: 6000, //add
    breakpoints: {
      340: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 0,
      },
    },
  });
  $(document).ready(function () {
    var $videoSrc;
    $(".video-btn").click(function () {
      $videoSrc = $(this).data("src");
    });

    $("#videoabout").on("shown.bs.modal", function (e) {
      $("#frame_video").attr("src", $videoSrc + "?autoplay=1");
    });
    $("#videoabout").on("hide.bs.modal", function (e) {
      $("#frame_video").attr("src", $videoSrc);
    });
  });
  AOS.init({
    offset: 200, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    disable: "mobile",
  });

  const typedTextSpan = document.querySelector(".typed-text");
  const cursorSpan = document.querySelector(".cursor");

  const textArray = ["DOGE AI", "ARTIFICIAL INTEL."];
  const typingDelay = 200;
  const erasingDelay = 100;
  const newTextDelay = 2000; // Delay between current and next text
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      if (!cursorSpan.classList.contains("typing"))
        cursorSpan.classList.add("typing");
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      cursorSpan.classList.remove("typing");
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      if (!cursorSpan.classList.contains("typing"))
        cursorSpan.classList.add("typing");
      typedTextSpan.textContent = textArray[textArrayIndex].substring(
        0,
        charIndex - 1
      );
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      cursorSpan.classList.remove("typing");
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 1100);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
  });
})();

// COUNT DOWN FUNCTION

// let countDownBox = document.querySelector(".notification");
// let daysBox = document.querySelector(".days");
// let hrsBox = document.querySelector(".hrs");
// let minBox = document.querySelector(".min");
// let secBox = document.querySelector(".sec");
// let notif = document.querySelector(".notification");

// let countDownDate = new Date("Apr 6, 2023 21:00:00").getTime();

// let x = setInterval(function () {
//   // GET DATE

//   let now = new Date().getTime();

//   // TIME BETWEEN NOW AND DATE
//   let distance = countDownDate - now;

//   // CALCULATION TIME
//   let days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   let seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   daysBox.innerHTML = days + "<span> Day</span>";
//   hrsBox.innerHTML = hours + "<span> Hours</span>";
//   minBox.innerHTML = minutes + "<span> Minutes</span>";
//   secBox.innerHTML = seconds + "<span> Seconds</span>";

//   // IF FINISH
//   if (distance < 0) {
//     clearInterval(x);
//     daysBox.innerHTML = "";
//     hrsBox.innerHTML = "";
//     minBox.innerHTML = "";
//     secBox.innerHTML = "";
//     notif.innerHTML = `<a cursor-class="arrow" target="_blank"
//     href="https://pancakeswap.finance/swap?outputCurrency=0xc60dEe4852eE6190CC440e87fC06796eC5ed4bB0">
//     <img src="./images/bg/buy.svg" alt="LionCeo"></a>`;
//   }
// }, 1000);

// my_popup = document.getElementById("my-popup");

// function showPopUp() {
//   my_popup.style.display = "flex";
//   $("body").addClass("noscroll");
// }
// // setTimeout(showPopUp, 1000);

// let y = setInterval(function () {
//   showPopUp();
// }, 2000);
// function ClosePopUp() {
//   clearInterval(y);
//   $("body").removeClass("noscroll");
//   my_popup.style.display = "none";
// }
// setTimeout(ClosePopUp, 30000);
