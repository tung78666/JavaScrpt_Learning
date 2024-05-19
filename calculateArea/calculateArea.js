let length;
let width;
//Method 1
function calculateArea(){
    length=parseFloat(document.getElementById('length').value);
    width=parseFloat(document.getElementById('width').value);
    let area=length*width;

    //Method 2
    const cArea = () => length*width;
    console.log(cArea());
    
    document.getElementById('result').innerText=`The area of the rectangle is: ${area}`;
}