function fun(){
    
    
    s1 = document.getElementById("p").value;
    s2 = document.getElementById("rp").value;
    n   =document.getElementById("name").value;
    em  =document.getElementById("email").value;
    usr =document.getElementById("user").value;
    db  =document.getElementById("dob").value;
    
    if(s1 != ""&&s2!=""&& n != "" && em !="" && usr != "" && db != "" ) {
    if (s1 == s2)
        {
            window.open("../index1.htm");
        }
     else
        window.alert("Passwords not matching");
    }
    else{
           window.alert("Fields cannot remain blank");
        
    }
    }