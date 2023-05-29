const loader = document.getElementById('loader');
const items = document.getElementById('items');

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses", true);
xhr.responseType = "json";
xhr.send();


xhr.onload = function() {
    if (xhr.status != 200) {
      alert(`Ошибка ${xhr.status}: ${xhr.statusText}`)
      } else {
        loader.classList.remove('loader_active')
        let itemsObj = xhr.response;
        console.log(itemsObj.response.Valute);
        let itemsArray = Object.values(itemsObj.response.Valute);
          
        itemsArray.forEach(e => {
          let itemElement = document.createElement('div');
          itemElement.className = 'item';
          items.append(itemElement);
  
           let itemCode = document.createElement('div');
           itemCode.className = 'item__code';
           itemElement.append(itemCode);
  
           let itemValue = document.createElement('div');
           itemValue.className = 'item__value';
           itemElement.append(itemValue);
  
           let itemCurrency = document.createElement('div');
           itemCurrency.className = 'item__currency';
           itemCurrency.innerHTML = 'руб.'
           itemElement.append(itemCurrency);
  
           itemCode.innerHTML = e.CharCode;
           itemValue.innerHTML = e.Value;
        });
     }
  }