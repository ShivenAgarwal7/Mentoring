$(document).ready(function(){
     $("#formid").validate({
       rules: {
        name : {
          required: true,
          minlength: 3
        },
        phone: {
          required: true
          
        },
        email: {
          required: true,
          email: true
        },
        description: {
          required: true,
          minlength: 2
        },
        appointment: {
          required: true
        }
    },
    messages : {
        name: {
          required: "Please enter the name",
          minlength: "Name must be atleast 3 letters"
        },
        phone: {
          required: "Please enter phone number in correct format"
          
        },
        email: {
          required: "Please enter the email address",
          email: "The email should be in the format: abc@domain.tld"
        },
        description: {
          required: "Please describe the problem",
          minlength: "The description is too small"
        },
        appointment: {
            required: "Please select a slot for the appointment"
          }
      }
      
      
    })
    
    $('#submit').on('click', function(e) {
      e.preventDefault;

        let name=e.currentTarget.form[0].value;
        let pn= e.currentTarget.form[1].value;
        let email= e.currentTarget.form[2].value;
        let desc= e.currentTarget.form[3].value;
        let appoint= e.currentTarget.form[4].value;
        let gender='';
        if(e.currentTarget.form[5].checked==true){
          gender=e.currentTarget.form[5].value;
        }
        else if(e.currentTarget.form[6].checked==true){
          gender=e.currentTarget.form[6].value;
        }
        else{
          gender=e.currentTarget.form[7].value;
        }
        
        //console.log(gender);
        

        console.log($("#formid").valid());
        if($("#formid").valid()){
            //  $("#formid").hide();
            $("#formid :input").prop("disabled", true);
            $("#display-section").prop("hidden", false);

            
            $("#nameDisplay").text("Name : "+name);
            $("#numDisplay").text("Phone Number : "+pn);
            $("#emailDisplay").text("Email : "+email);
            $("#descDisplay").text("Problem Description : \n"+desc);
            $("#dateDisplay").text("Appointment Slot : "+appoint);
            $("#genderDisplay").text("Appointment Slot : "+gender);

            

            
        };
        console.log("It is submitted")

    });

});