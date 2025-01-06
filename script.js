// Функция для переключения между вкладками
function showTab(tab) {
  // Скрыть все вкладки
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tabContent => {
    tabContent.style.display = 'none';
  });

  // Снять класс 'active' с всех кнопок вкладок
  const buttons = document.querySelectorAll('.tab-button');
  buttons.forEach(button => {
    button.classList.remove('active');
  });

  // Показать выбранную вкладку
  document.getElementById(tab + '-tab').style.display = 'block';
  
  // Установить класс 'active' на выбранную кнопку
  document.getElementById('tab-' + tab).classList.add('active');
}

// Функция для подсчета итоговой стоимости на основе введенных значений
function calculateTotal() {
  let total = 0;

  // Для всех услуг на странице
  const rows = document.querySelectorAll('table tbody tr');
  rows.forEach(row => {
    const price = parseFloat(row.dataset.price);
    const quantity = parseInt(row.querySelector('.quantity').value) || 0;
    const totalPrice = price * quantity;
    row.querySelector('.total-price').textContent = totalPrice;
    total += totalPrice;
  });

  // Отображаем итоговую стоимость
  document.getElementById('total-price').textContent = total;
}

// Вызов функции для подсчета стоимости при изменении количества
document.querySelectorAll('.quantity').forEach(input => {
  input.addEventListener('input', calculateTotal);
});

// Изначально показываем вкладку пожарной сигнализации
showTab('fire');
