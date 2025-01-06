// Функция для отображения вкладки
function showTab(tabName) {
  const fireTab = document.getElementById("fire-tab");
  const securityTab = document.getElementById("security-tab");
  const fireButton = document.getElementById("tab-fire");
  const securityButton = document.getElementById("tab-security");

  if (tabName === "fire") {
    fireTab.style.display = "block";
    securityTab.style.display = "none";
    fireButton.classList.add("active");
    securityButton.classList.remove("active");
  } else if (tabName === "security") {
    fireTab.style.display = "none";
    securityTab.style.display = "block";
    fireButton.classList.remove("active");
    securityButton.classList.add("active");
  }

  updateTotalPrice();
}

// Функция для обновления итоговой стоимости
function updateTotalPrice() {
  const allRows = document.querySelectorAll("tbody tr");
  let totalPrice = 0;

  allRows.forEach(row => {
    const quantity = row.querySelector(".quantity").value;
    const price = row.querySelector(".unit-price").value;

    const totalRowPrice = quantity * price;
    row.querySelector(".total-price").innerText = totalRowPrice;

    totalPrice += totalRowPrice;
  });

  document.getElementById("total-price").innerText = totalPrice;
}

// Функция для добавления обработчиков событий на изменения цены и количества
function addEventListeners() {
  const unitPriceInputs = document.querySelectorAll(".unit-price");
  const quantityInputs = document.querySelectorAll(".quantity");

  unitPriceInputs.forEach(input => {
    input.addEventListener("input", function() {
      updateTotalPrice(); // Обновляем итоговую стоимость при изменении цены
    });
  });

  quantityInputs.forEach(input => {
    input.addEventListener("input", function() {
      updateTotalPrice(); // Обновляем итоговую стоимость при изменении количества
    });
  });
}

// Инициализация отображения первой вкладки и добавление обработчиков
showTab("fire");
addEventListeners();
