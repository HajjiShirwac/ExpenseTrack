let btnAdd = document.querySelector('button');
let table = document.querySelector('table');

let nameInput =  document.querySelector("#name");
let dateInput =  document.querySelector("#date");
let AmountInput =  document.querySelector("#amount");

btnAdd.addEventListener('click', ()=>{
     Name = nameInput.value;
     date = dateInput.value;
     Amount  = AmountInput.value;

    let template = `
                <tr>
                <th>${Name}</th>
                <th>${date}</th>
                <th>${Amount}</th>
                </tr>
    
    `;
    table.innerHTML += template;

    localStorage.setItem('#name', Name);
    localStorage.setItem('#date', date);
    localStorage.setItem('#amount', Amount);




});