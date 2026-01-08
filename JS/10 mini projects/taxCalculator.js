

const button = document.querySelector('button');

button.addEventListener('click',() =>{
    let income = document.getElementById('income').value;
    let totalTax = document.getElementById('tax');
    income = parseInt(income);
    if(income <= 1200000)
    {
        totalTax.textContent = `Total tax: ${income*(0/100)}`;
    }
    else if(income > 1200000 && income <= 1600000)
    {
        income = income-1200000;
        totalTax.textContent =`Total tax: ${income*(15/100)}`;
    }
    else if(income > 1600000 && income <= 2000000){
        income = income - 1600000;
        totalTax.textContent = `Total tax: ${income*(20/100)}`;
    }
    else if (income > 2000000 && income <= 2400000)
    {
        income = income-2000000;
        totalTax.textContent = `Total tax: ${income*(25/100)}`
    }
    else{
        totalTax.textContent = `Total tax: ${income*(30/100)}`
    }
})