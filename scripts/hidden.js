const itemSelect = document.getElementById('primary-select');
const itemForm = document.getElementById('item-form');

itemSelect.addEventListener('change', (e) => {
  if (itemSelect.value ==='HomeCleaning') {
    itemForm.classList.remove('hidden');
  } else {
    itemForm.classList.add('hidden');
  }
});


const itemSelect2 = document.getElementById('primary-select');
const itemForm2 = document.getElementById('item-form2');

itemSelect.addEventListener('change', (e) => {
  if (itemSelect2.value ==='OfficeCleaning') {
    itemForm2.classList.remove('hidden');
  } else {
    itemForm2.classList.add('hidden');
  }
});


const itemSelect3 = document.getElementById('primary-select');
const itemForm3 = document.getElementById('item-form3');

itemSelect.addEventListener('change', (e) => {
  if (itemSelect3.value ==='LaundryService') {
    itemForm3.classList.remove('hidden');
  } else {
    itemForm3.classList.add('hidden');
  }
});

