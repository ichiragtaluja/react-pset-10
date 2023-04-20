import { createContext, useContext, useReducer } from "react";
import { mails } from "../data/mails";

export const MailContext = createContext();

const filterReducer = (state, action) => {
  switch (action.type) {
    case "unread":
      return { ...state, unread: !state.unread };
    case "isStarred":
      return { ...state, isStarred: !state.isStarred };

    case "STAR":
      return {
        ...state,
        updatedMails: state.updatedMails.map((mail) =>
          mail.mId === action.payload
            ? { ...mail, isStarred: !mail.isStarred }
            : mail
        ),
      };

    case "UNREAD":
      return {
        ...state,
        updatedMails: state.updatedMails.map((mail) =>
          mail.mId === action.payload ? { ...mail, unread: !mail.unread } : mail
        ),
      };

    case "DELETE":
      return {
        ...state,
        updatedMails: state.updatedMails.filter(
          (mail) => mail.mId !== action.payload
        ),
        deletedMails: [
          ...state.deletedMails,
          state.updatedMails.find((email) => email.mId === action.payload),
        ],
      };

    case "SPAM":
      return {
        ...state,
        updatedMails: state.updatedMails.filter(
          (mail) => mail.mId !== action.payload
        ),
        spamMails: [
          ...state.spamMails,
          state.updatedMails.find((email) => email.mId === action.payload),
        ],
      };
    default:
      return state;
  }
};

export function MailProvider({ children }) {
  const [state, dispatch] = useReducer(filterReducer, {
    unread: false,
    isStarred: false,
    updatedMails: mails,
    deletedMails: [],
    spamMails: [],
  });

  const filteredMails = state.updatedMails.filter(
    (mail) =>
      (state.unread ? mail.unread : true) &&
      (state.isStarred ? mail.isStarred : true)
  );

  return (
    <MailContext.Provider value={{ dispatch, filteredMails, state }}>
      {children}
    </MailContext.Provider>
  );
}

export const useMail = () => useContext(MailContext);
