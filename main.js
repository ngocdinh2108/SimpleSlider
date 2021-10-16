window.addEventListener("load", function () {
  const prev = document.querySelector(".slider-icon-left");
  const next = document.querySelector(".slider-icon-right");
  const sliderItems = document.querySelectorAll(".slider-item");
  const sliderMain = document.querySelector(".slider-main");
  const dots = document.querySelectorAll(".slider-dot");

  let positionX = 0;
  let index = 1;
  const countOfslider = sliderItems.length;
  const widthItem = sliderItems[0].offsetWidth;

  function changeSlider(direction) {
    // Event click next button
    if (direction === "next") {
      if (index === countOfslider) {
        positionX = widthItem;
        index = 0;
      }
      index++;
      positionX = positionX - widthItem;
      sliderMain.style.transform = `translateX(${positionX}px)`;
      activeDot();
      // Event click previous button
    } else if (direction === "prev") {
      if (index === 1) {
        positionX = countOfslider * -widthItem;
        index = countOfslider + 1;
      }
      index--;
      positionX = positionX + widthItem;
      sliderMain.style.transform = `translateX(${positionX}px)`;
      activeDot();
    }
  }

  /**
   * Event click next button
   */
  next.addEventListener("click", function () {
    changeSlider("next");
  });

  /**
   * Event click prev button
   */
  prev.addEventListener("click", function () {
    changeSlider("prev");
  });

  /**
   * Event click a dot
   */
  dots.forEach((item) =>
    item.addEventListener("click", function () {
      const indexDot = parseInt(item.dataset.dot);
      positionX = -((indexDot - 1) * widthItem);
      index = indexDot;
      sliderMain.style.transform = `translateX(${positionX}px)`;
      activeDot();
    })
  );

  /**
   * Event add color on dot when active
   */
  function activeDot() {
    dots.forEach((item) => item.classList.remove("active"));
    dots[index - 1].classList.add("active");
  }
});
