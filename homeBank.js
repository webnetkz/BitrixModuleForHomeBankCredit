let pr = document.querySelector('.price');
let btn = document.createElement('img');
btn.src = 'https://dinamo.kz/upload/homebank.png';
btn.style.display = 'block';
btn.style.margin = '5px';
btn.style.width = '300px';

let cof = document.querySelector('.price > span').innerText;
let re = /тенге/gi;
let str = cof;
let newstr = str.replace(re, '');
let x = newstr.replace(/\s/g,"");
let y = x * 0.08333;
y = Math.round(y);

let resS = 'Сумма ежемесячного платежа составляет: '+y+' тенге';
let w = document.createElement('p');
w.innerText = resS;
w.style.fontSize = '1.2rem';



let linkq = 'https://sb.homecredit.kz/instagram/onlinezayavka/v2/torgovyi_dom_dinamo/#/credit_sum='+x;
btn.setAttribute('onclick', 'location.href ="'+linkq+'"');




pr.appendChild(btn);
pr.appendChild(w);