

const signupservice = async (req , res)=>{


    try {

const signupData = req.body;



const response  = await fetch("http://localhost:5008/api/auth/signup",{

    method:"POST",
    headers:{"Content-Type":"application/json"},

    body:JSON.stringify(signupData)


})
const back  = await response.json();
console.log(back)

    }

    catch(error){
        console.log(error);



    }
    
    }
    
    export default signupservice;