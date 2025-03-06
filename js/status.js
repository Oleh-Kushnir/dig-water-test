function updateSystemStatus(status) {
  // Спочатку прибираємо активний клас з усіх елементів
  document.querySelectorAll(".status-item[data-status]").forEach((item) => {
    item.classList.remove("active-status");
  });

  // Додаємо активний клас до елемента з відповідним статусом
  const activeItem = document.querySelector(
    `.status-item[data-status="${status}"]`
  );
  if (activeItem) {
    activeItem.classList.add("active-status");
  }
}
