// Відкриває Sidebar

document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar");
  const toggleBtn = document.querySelector("#openSidebar");

  sidebar.style.transform = "translateX(-100%)";
  sidebar.style.transition = "transform 0.3s ease-in-out";

  toggleBtn.addEventListener("click", function (event) {
    event.stopPropagation();

    if (sidebar.style.transform === "translateX(0px)") {
      sidebar.style.transform = "translateX(-100%)";
    } else {
      sidebar.style.transform = "translateX(0)";
    }
  });

  document.addEventListener("click", function (event) {
    if (!sidebar.contains(event.target) && event.target !== toggleBtn) {
      sidebar.style.transform = "translateX(-100%)";
    }
  });
});

// Делегування подій на ННС и кнопки
document.addEventListener("DOMContentLoaded", function () {
  const toggleWrappers = document.querySelectorAll(".sidebar__toggle");
  toggleWrappers.forEach((toggleWrapper) => {
    const parentItem = toggleWrapper.closest(".sidebar__item");

    toggleWrapper.addEventListener("click", function () {
      parentItem.classList.toggle("sidebar__item--open");
    });

    toggleWrapper.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        parentItem.classList.toggle("sidebar__item--open");
      }
    });
  });

  const buttons = document.querySelectorAll(".sidebar__button-checkpoint");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      this.classList.toggle("sidebar__button-checkpoint--active");
    });
  });
});
