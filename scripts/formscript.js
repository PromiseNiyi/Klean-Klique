const quantityInputs = document.querySelectorAll('.product-quantity');
const selectedList = document.getElementById('selected-list');
const totalPriceElement = document.getElementById('total-price');

let selectedProducts = [];
let totalPrice = 0;

quantityInputs.forEach((input) => {
  input.addEventListener('change', (e) => {
    const product = input.parentNode.parentNode.querySelector('h2').textContent;
    const price = parseInt(input.getAttribute('data-price'));
    const quantity = parseInt(input.value);

    const existingProductIndex = selectedProducts.findIndex((item) => item.product === product);

    if (existingProductIndex !== -1) {
      // Update quantity for existing product
      selectedProducts[existingProductIndex].quantity = quantity;
      selectedProducts[existingProductIndex].subtotal = price * quantity;
    } else {
      // Add new product
      selectedProducts.push({
        product: product,
        quantity: quantity,
        subtotal: price * quantity,
      });
    }

    updateSelectedList();
    updateTotalPrice();
  });
});

function updateSelectedList() {
  selectedList.innerHTML = '';
  selectedProducts.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `${item.product} - Quantity: ${item.quantity} - Subtotal: $${item.subtotal}`;
    selectedList.appendChild(li);
  });
}

function updateTotalPrice() {
  totalPrice = selectedProducts.reduce((total, item) => total + item.subtotal, 0);
  totalPriceElement.textContent = `Total Price: $${totalPrice}`;
}



// _________________________Office Cleaning Section________________

const quantityInputs2 = document.querySelectorAll('.product-quantity2');
const selectedList2 = document.getElementById('selected-list2');
const totalPriceElement2 = document.getElementById('total-price2');

let selectedProducts2 = [];
let totalPrice2 = 0;

quantityInputs2.forEach((input) => {
  input.addEventListener('change', (e) => {
    const product = input.parentNode.parentNode.querySelector('h2').textContent;
    const price = parseInt(input.getAttribute('data-price'));
    const quantity = parseInt(input.value);

    const existingProductIndex = selectedProducts2.findIndex((item) => item.product === product);

    if (existingProductIndex !== -1) {
      // Update quantity for existing product
      selectedProducts2[existingProductIndex].quantity = quantity;
      selectedProducts2[existingProductIndex].subtotal = price * quantity;
    } else {
      // Add new product
      selectedProducts2.push({
        product: product,
        quantity: quantity,
        subtotal: price * quantity,
      });
    }

    updateSelectedList2();
    updateTotalPrice2();
  });
});

function updateSelectedList2() {
  selectedList2.innerHTML = '';
  selectedProducts2.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `${item.product} - Quantity: ${item.quantity} - Subtotal: $${item.subtotal}`;
    selectedList2.appendChild(li);
  });
}

function updateTotalPrice2() {
  totalPrice2 = selectedProducts2.reduce((total, item) => total + item.subtotal, 0);
  totalPriceElement2.textContent = `Total Price: $${totalPrice2}`;
}



// _____________________________Laundry Section________________________________




const quantityInputs3 = document.querySelectorAll('.product-quantity3');
const selectedList3 = document.getElementById('selected-list3');
const totalPriceElement3 = document.getElementById('total-price3');

let selectedProducts3 = [];
let totalPrice3 = 0;

quantityInputs3.forEach((input) => {
  input.addEventListener('change', (e) => {
    const product = input.parentNode.parentNode.querySelector('h2').textContent;
    const price = parseInt(input.getAttribute('data-price'));
    const quantity = parseInt(input.value);

    const existingProductIndex = selectedProducts3.findIndex((item) => item.product === product);

    if (existingProductIndex !== -1) {
      // Update quantity for existing product
      selectedProducts3[existingProductIndex].quantity = quantity;
      selectedProducts3[existingProductIndex].subtotal = price * quantity;
    } else {
      // Add new product
      selectedProducts3.push({
        product: product,
        quantity: quantity,
        subtotal: price * quantity,
      });
    }

    updateSelectedList3();
    updateTotalPrice3();
  });
});

function updateSelectedList3() {
  selectedList3.innerHTML = '';
  selectedProducts3.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `${item.product} - Quantity: ${item.quantity} - Subtotal: $${item.subtotal}`;
    selectedList3.appendChild(li);
  });
}

function updateTotalPrice3() {
  totalPrice3 = selectedProducts3.reduce((total, item) => total + item.subtotal, 0);
  totalPriceElement3.textContent = `Total Price: $${totalPrice3}`;
}