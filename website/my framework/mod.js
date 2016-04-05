function fun(){
    
    user = document.getElementById("user").value;
    pass = document.getElementById("pass").value;
    if(user==""||pass=="")
        {
            window.alert("Do not leave the fields blank");
            
        }
    else
        {
            if(user=="shashi"&&pass=="freak")
                {
                    window.open("index1.htm");
                }
            else{
                window.alert("Wrong username or password");
            }
        }
    
}