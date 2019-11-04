class View {


    constructor() {
        this.handleVuttons();

    }

    handleVuttons () {
        document.getElementById("Stand").addEventListener("click", function(){
           alert("Stand pressed");
        });
    }

    refreshGameScene() {
        // ...
    }

}