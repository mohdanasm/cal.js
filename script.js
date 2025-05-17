const first_input=document.getElementById('firstNumber');
const second_input=document.getElementById('secondNumber');
const operator_select=document.getElementById('operator');
const calButton=document.getElementById('calculate');
const result_display=document.getElementById('result');


const operator= operator_select.value;
function cal()
{
     const firstnum=parseFloat(first_input.value);
     const secondnum=parseFloat(second_input.value);
     const op=operator_select.value;
    switch(op)
    {
        case '+':result=firstnum+secondnum;
        break;
        case '-':result=firstnum-secondnum;
        break;
        case '*':result=firstnum*secondnum;
        break;
        case '/':if(secondnum === 0)
            {
                result_display.textContent="Divisible by zero is not allowed";
                return
            }
             result=firstnum/secondnum;
        
        break;
        default:result="invalid operator";

    }
     /*if(op==='+')
     {
         result=firstnum+secondnum;
     }else  if(op==='-')
     {
         result=firstnum-secondnum;
     }else  if(op==='*')
     {
         result=firstnum*secondnum;
     }else  if(op==='/')
     {
        if(secondnum === 0)
        {
            result_display.textContent="Divisible by zero is not allowed";
            return
        }
         result=firstnum/secondnum;
     }else{
        console.log("Undefined");
     }*/
     
   result_display.textContent="Result :"+result;
}
calButton.addEventListener('click',cal);
