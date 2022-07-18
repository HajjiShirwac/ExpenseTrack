let btnAdd = document.querySelector('button');
let table = document.querySelector('table');
let nameInput =  document.querySelector("#name");
let AmountInput =  document.querySelector("#amount");
let dateInput =  document.querySelector("#date");

btnAdd.addEventListener('click', ()=>{
     Name = nameInput.value;
     Amount  = AmountInput.value;
     date = dateInput.value;
    let template = `
                <tr>
                <th>${Name}</th>
                <th>${Amount}</th>
                <th>${date}</th>
                </tr>
    
    `;
    table.innerHTML += template;
    localStorage.setItem('#name', Name);
    localStorage.setItem('#amount', Amount);
    localStorage.setItem('#date', date);
    
});
// location.reload();
//     return false;
