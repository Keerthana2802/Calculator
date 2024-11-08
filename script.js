const display = document.getElementById("display");

function showtodisp(element) {
  display.value += element;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function cleardisp() {
  display.value = "";
}

// Handle keyboard input

function handleKeyPress(event) {
  const key = event.key;
  if (key >= "0" && key <= "9") {
    showtodisp(key);
  } else if (["+", "-", "*", "/"].includes(key)) {
    showtodisp(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (key === "Escape") {
    cleardisp();
  } else if (key === ".") {
    showtodisp(key);
  }
}

// Event listener for keypress
document.addEventListener("keydown", handleKeyPress);

// smooth scroll

$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          function () {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              return false;
            } else {
              $target.attr("tabindex", "-1");
              $target.focus();
            }
          }
        );
      }
    }
  });
