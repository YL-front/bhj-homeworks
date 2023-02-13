const dropdownList = document.querySelector('.dropdown__list');
const dropdownValue = document.querySelector('.dropdown__value');

dropdownValue.addEventListener('click', () => {
    dropdownList.classList.toggle('dropdown__list_active');
})

const dropdownLink = Array.from(document.querySelectorAll('.dropdown__link'));

for (let i = 0; i < dropdownLink.length; i++) {
    dropdownLink[i].addEventListener('click', (event) => {
        event.preventDefault();
        dropdownValue.textContent = dropdownLink[i].textContent;
        dropdownList.classList.toggle('dropdown__list_active');
    })
};