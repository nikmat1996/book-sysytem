import { LOGIN_USER, LOGOUT_USER } from "./actionTypes";
import credentials from '../../utils/credentials.json'
  
  const initState = {
    isAuth: false,
    currentUser: '', 
    wrong: false
  };
  
  const reducer = (state = initState, {type, payload}) => {
    switch (type) {
      case LOGIN_USER:

        let { email, password } = payload
        let matched = false
        credentials.forEach(item => {

            if(item.email === email && item.password === password)
                matched = true

        })

        return {
            ...state,
            isAuth: matched ? true : false,
            wrong: matched ? false : true,
            currentUser: email
        };
     
      case LOGOUT_USER:
        return {
            ...state,
            isAuth: false
        };
     
      default:
        return state;
    }
  };
  
  export default reducer;