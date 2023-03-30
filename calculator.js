let textbox=document.getElementById('textBox');
let smallScreen=document.getElementById('smallScreen');
let operator=document.getElementById('operator');
let Equals=document.getElementById('Equals');
// let result;
let canClear=false;
let letter1;
let letter2;
let sign = '';



// To clear the numbers back to zero
function clearTextCE(clear) {
    textbox.value='0'

} 
 function clearTextC(clear2){
    textbox.value=''
    textbox.value='0'
    smallScreen.value=''
    operator=''
    letter1=''
    letter2=''
    sign=''
 }



// To calcula
function displayText(calcu) {

    // to clear the data and replace with new input data
    if (canClear) {
       canClear=false;
       textbox.value=''  
    }

    if (textbox.value == '0') {
        textbox.value = ''
    }

    textbox.value+=calcu
    letter2=textbox.value

}

// to show the operator calculated data in the small input box
function calculate(commands) {
    
    smallScreen.value+=textbox.value+commands

    if (sign) {
       equal ()
    }

    sign=commands 
            
        canClear=true
        letter1=textbox.value
}

// to perform arithmetic operations
function equal() {
 let ansa;
    
    if (sign == '+') {
            ansa= Number (letter1) + Number (textbox.value) 
        }
    else if (sign == '-') {
            ansa= Number (letter1) - Number (textbox.value) 
        }
    else if (sign == 'x') {
            ansa= Number (letter1) * Number (textbox.value) 
        }
    else if (sign == '/') {
            ansa= Number (letter1) / Number (textbox.value) 
        }
    else if (sign = '%') {
            ansa = Number (letter1) % Number (letter1) 
        }
    textbox.value=ansa;
    sign='' 
}

function sqr() {
    let sqroot = Math.sqrt(textbox.value)
    textbox.value=sqroot;
}

function sq() {
    textbox.value=textbox.value*textbox.value;
}

function perceent() {
    textbox.value=textbox.value/100;
  
}
function anyValue() {
    textbox.value = 1 / textbox.value;
}

// for backspace data
function Del () {
    let Backspace=document.getElementById('textBox').value;
        Backspace.toString()
        textbox.value=Backspace.slice(0, -1)
}

function plusOrMinus() {
    textbox.value = -1 * textbox.value
}

