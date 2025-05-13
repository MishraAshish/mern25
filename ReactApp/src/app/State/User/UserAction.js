//action - is an object which contains two things
// type - the type of action is needed
// payload - the data object to be updated once type is matched

export const SignInSignUpAction = (user)=>{
    return{ 
        type: "SignInSignUp", // this should be the same as present in switch condition
        payload : user
    } 
}