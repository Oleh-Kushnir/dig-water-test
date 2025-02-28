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
