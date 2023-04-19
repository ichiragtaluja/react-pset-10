import { createContext, useContext, useReducer } from "react";
import { mails } from "../data/mails";

export const MailContext = createContext();

const filterReducer = (state, action) =>{
    switch(action.type){
        case "unread": return [state.map((mail)=>{})]
        default :return state
    }
}


export function MailProvider({ children }) {
  const [state, dispatch] = useReducer(filterReducer, mails);

  return (
    <MailContext.Provider value={{ mails, dispatch }}>{children}</MailContext.Provider>
  );
}

export const useMail = () => useContext(MailContext);
