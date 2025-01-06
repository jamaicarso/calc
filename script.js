// Функция для пересчета итоговой стоимости
function calculateTotal() {
  let totalSum = 0;
  // Получаем все строки таблицы с услугами
  const rows = document.querySelectorAll("#price-list tbody tr");
  
  rows.forEach(row => {
    // Получаем цену за единицу из поля ввода
    const price = parseFloat(row.querySelector(".unit-price").value) || 0;
    // Получаем количество, введенное пользователем
    const quantity = parseInt(row.querySelector(".quantity").value) || 0;
    // Рассчитываем итоговую стоимость для текущей строки
    const totalPrice = price * quantity;
    // Обновляем итоговую стоимость в ячейке
    row.querySelector(".total-price").textContent = totalPrice;
    
    // Добавляем к общей стоимости
    totalSum += totalPrice;
  });
  
  // Обновляем общий итог
  document.getElementById("total-sum").textContent = totalSum;
}

// Добавляем обработчик на изменения в полях количества и цены
const quantityInputs = document.querySelectorAll(".quantity");
const priceInputs = document.querySelectorAll(".unit-price");

quantityInputs.forEach(input => {
  input.addEventListener("input", calculateTotal);
});

priceInputs.forEach(input => {
  input.addEventListener("input", calculateTotal);
});

// Изначальный расчет при загрузке страницы
calculateTotal();
