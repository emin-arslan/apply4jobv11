
export function* userSignUp ({data}) {
   
    const { email, password,ipAddress } = data;
    console.warn('saga data ', data)
    let result = fetch (yield fetch("http://localhost:5000/signup", {
        method:"POST",
        body:JSON.stringify({email,password,ipAddress}),
        headers:{
            "Content-Type":"application/json"
        }
    }))
}
