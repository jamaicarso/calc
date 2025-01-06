function showTab(tabName) {
  const tabs = document.querySelectorAll(".tab-content");
  const buttons = document.querySelectorAll(".tab-button");

  tabs.forEach(tab => tab.style.display = "none");
  buttons.forEach(button => button.classList.remove("active"));

  const activeTab = document.getElementById(tabName + "-tab");
  const activeButton = document.getElementById("tab-" + tabName);

  activeTab.style.display = "block";
  activeButton.classList.add("active");

  updateTotalPrice(tabName);
}

function updateTotalPrice(tabName) {
  const rows = document.querySelectorAll(`#${tabName}-tab .unit-price, #${tabName}-tab .quantity`);
  let totalPrice = 0;

  rows.forEach(row => {
    const quantity = row.closest('tr').querySelector(".quantity").value;
    const price = row.closest('tr').querySelector(".unit-price").value;

    const totalRowPrice = quantity * price;
    row.closest('tr').querySelector(".total-price").innerText = totalRowPrice;

    totalPrice += totalRowPrice;
  });

  document.getElementById("final-total").innerText = totalPrice;
}

function addEventListeners() {
  const unitPriceInputs = document.querySelectorAll(".unit-price");
  const quantityInputs = document.querySelectorAll(".quantity");

  unitPriceInputs.forEach(input => {
    input.addEventListener("input", function() {
      updateTotalPrice('fire'); 
      updateTotalPrice('security');
      updateTotalPrice('access');
      updateTotalPrice('cabling');
    });
  });

  quantityInputs.forEach(input => {https://github.com/jamaicarso/calc/blob/main/script.js
    input.addEventListener("input", function() {
      updateTotalPrice('fire');
      updateTotalPrice('security');
      updateTotalPrice('access');
      updateTotalPrice('cabling');
    });
  });

  // Add event listeners for coefficient and tax inputs
  const coefficientInput = document.getElementById("coefficient");
  const taxInput = document.getElementById("tax");

  coefficientInput.addEventListener("input", calculateFinalCost);
  taxInput.addEventListener("input", calculateFinalCost);
}

function calculateFinalCost() {
  const coefficient = parseFloat(document.getElementById("coefficient").value);
  const tax = parseFloat(document.getElementById("tax").value);
  const total = parseFloat(document.getElementById("final-total").innerText);

  const coefficientResult = total * coefficient;
  const taxResult = total * (tax / 100);
  const finalCost = total + coefficientResult + taxResult;

  document.getElementById("coefficient-result").innerText = coefficientResult.toFixed(2);
  document.getElementById("tax-result").innerText = taxResult.toFixed(2);
  document.getElementById("final-total").innerText = finalCost.toFixed(2);
}

showTab('fire');
addEventListeners();
