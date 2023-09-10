//Attach event on button
//beech ka rasta
window.addEventListener('load', binding);
function binding(){
    let buttons = document.getElementsByTagName('button');
    console.log("buttons are -: ",buttons.length);
    for(let i=0; i<buttons.length; i++){
        if(buttons[i].innerText == '='){
            buttons[i].addEventListener('click', calculate);
            continue;
        } else if(buttons[i].innerText == 'AC' ){
            buttons[i].addEventListener('click',clearText);
            continue;
        }
        buttons[i].addEventListener('click',printIt);
    }
}

var flag = false;
function calculate(){
    let val = document.getElementById('output').value;
    document.getElementById('output').value= eval(val);
    flag = true;
}

function printIt(){
    console.log('print it calll', this);
    var buttonValue = this.innerText;
    if(flag == true){
        document.getElementById('output').value = buttonValue;
        flag = false;
    }else{
        document.getElementById('output').value = document.getElementById('output').value + buttonValue;
    }
}

function clearText(){
        document.getElementById('output').value = 0;
      //  document.getElementById('ac').innerText = 'CE';
      flag = true;
    
}

