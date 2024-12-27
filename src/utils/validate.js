export const checkValidate = (email, password, name) => {
    

    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)
    const isPasswordValid = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&?@"]).*$/.test(password)
    if(!isEmailValid){
        return "Email is not valid"
    }
    if(!isPasswordValid){
        return "Password is not valid"
    }

    if(name){
        const isNamevalid = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(name)
       
        if(!isNamevalid){
            return "Name is not valid"
        }
    }

    return null
}