 // <!-- JavaScript Author by Manzola Caniago  -->
function myFunction(id) {
    document.calc.result.value+=id;
  }
  
  // Clears calculator in Screen
  function clearScreen() {
    document.calc.result.value="";
  }
  
  // Calculates input Keywords
  function calculate() {
    try {
      var input = eval(document.calc.result.value);
      document.calc.result.value=input;
      let pesan = document.getElementById('message');
      

      let label = document.querySelector('label');
      label.textContent= "Sukses Menghitung";
      

    } catch(err){
        document.calc.result.value="Error";
      }
  }

 