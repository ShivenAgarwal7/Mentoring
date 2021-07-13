$(document).ready(function(){
     $("#formid").validate({
       rules: {
        name : {
          required: true,
          minlength: 3
        },
        phone: {
          required: true,
          phone: true
        },
        email: {
          required: true,
          email: true
        },
        description: {
          required: true,
          minlength: 15
        },
        appointment: {
          required: true
        }
    }
      
      
    })
    
    $('#submit').on('click', function() {
        console.log($("#formid").valid());
        console.log("It is submitted")

    });

});