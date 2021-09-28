
const total_amount = document.querySelector('#total_amount');
const given_amount = document.querySelector('#given_amount');

const next = document.querySelector('#next');
const check = document.querySelector('#check');

const error_msg = document.querySelector('.error_msg');
const currency_table = document.querySelector('#currency_table');

const amount_given = document.querySelector('.amountgiven');

const notes = document.querySelectorAll('.notes');

const currency = [2000, 500, 100, 50, 20, 10, 5, 1];

amount_given.style.display = "none";
currency_table.style.display = "none";

function nextClickHandler(){
      amount_given.style.display = "block";
      next.style.display = "none";
}

function checkClickHandler(){
      let total = total_amount.value;
      let given = given_amount.value;

      error_msg.style.display = "none";

      if(total>0){
            if(given>total){
                  currency_table.style.display = "block";
                  cash(total,given);
            }
            else{
                  showError("Given amount should be greater then total amount");
            }
      }
      else{
            showError("Negative Number not allowed.");
      }
}

function checkinput(total,given){   
}

function showError(msg){
      error_msg.innerText = msg;
      error_msg.style.display = "block";
      currency_table.style.display = "none";
}

function cash(total,given) {
      let diff = given - total;
      currency.forEach((value,index)=>{
            let note = Math.trunc(diff / value);
            diff = diff % value;
            if(note!=0){
                  notes[index].innerText = note;
            }
            
      });
}

next.addEventListener('click',nextClickHandler);
check.addEventListener('click',checkClickHandler);