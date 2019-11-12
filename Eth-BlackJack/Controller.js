class Controller {
   const model;
   const view;
    constructor(model, view) {
        this.model = model;
        this.view = view;
        alert("Controler Init");
        handleVuttons();
        // Display initial todos
    }

 function handleVuttons () {
        document.getElementById("Stand").addEventListener("click", function(){
           alert("Hello! I am an alert box!!")
        });
    }






}