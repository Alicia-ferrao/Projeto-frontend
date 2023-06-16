function validForm(){
    var name = document.custom_form.name;
    var email = document.custom_form.email;
    var subject = document.custom_form.subject;
    var message = document.custom_form.message;


    if (name.value == ""){
        name.nextElementSibling.style.display = "flex";
        name.style.border = "1px solid #f00"
      
    }else{
        name.nextElementSibling.style.display = "block"
        name.style.border = "1px solid transparent"
    }
    
}