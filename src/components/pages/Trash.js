import { Link } from "react-router-dom";
import { useMail } from "../../contexts/MailProvider";

export function Trash() {
  const { state, dispatch } = useMail();
  return (
    <>
      <h1>Trash</h1>
      {state?.deletedMails?.map((mail) => {
        const { mId, unread, isStarred, subject, content, isTrash } = mail;
        return (
          <div key={mId}>
            <h3>Subject: {subject}</h3>
            <button onClick={() => dispatch({ type: "STAR", payload: mId })}>
              {!isStarred ? "Star" : "Starred"}
            </button>
            <p>{content}</p>
            <Link>View Details</Link>
          </div>
        );
      })}
    </>
  );
}
