function updateDateTime() {
  const dateTimeEl = document.getElementById("current-date-time");
  if (!dateTimeEl) return;

  const now = new Date();
  const day = now.getDate().toString().padStart(2, "0");
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const year = now.getFullYear().toString().slice(-2);
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");

  const daysOfWeek = ["нд", "пн", "вт", "ср", "чт", "пт", "сб"];
  const dayOfWeek = daysOfWeek[now.getDay()];

  dateTimeEl.textContent = `${day}/${month} ${year} ${dayOfWeek} ${hours}:${minutes}`;
}

// Оновлення дати щохвилини
setInterval(updateDateTime, 60000);
updateDateTime();
