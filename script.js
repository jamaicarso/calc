// Получаем все строки таблицы с услугами
const priceList = document.querySelectorAll("#price-list tbody tr");

// Функция для пересчета итоговой стоимости
function updateTotalPrice() {
  let totalCost = 0;

  // Перебираем все строки в таблице
  priceList.forEach(row => {
    const price = parseFloat(row.getAttribute("data-price")); // Получаем цену услуги
    const quantity = parseInt(row.querySelector(".quantity").value); // Получаем количество

    // Рассчитываем итоговую стоимость для текущей строки
    const rowTotalPrice = price * quantity;

    // Обновляем итоговую стоимость в таблице
    row.querySelector(".total-price").textContent = rowTotalPrice.toFixed(2);

    // Добавляем эту стоимость в общую
    totalCost += rowTotalPrice;
  });

  // Обновляем отображение общей стоимости на странице
  document.getElementById("total-cost").textContent = totalCost.toFixed(2);
}

// Слушаем изменения в полях для количества
priceList.forEach(row => {
  const quantityField = row.querySelector(".quantity");
  quantityField.addEventListener("input", updateTotalPrice);
});

// Инициализация при загрузке страницы
updateTotalPrice();
