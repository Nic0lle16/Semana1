var input = document.getElementsByClassName('formulario__input');
for (var i= 0; i < inputs.lenght; i++) {
    inputs[i].addEventListener('keyup', function(){
        if(this.value.lenght>=1){
            this.nextElementSibling.classList.add('fijar');
        
        } else {
            this.nextElementSibling.classList.remove('fijar');

        }
    }
    );
}