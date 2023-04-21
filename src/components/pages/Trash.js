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
          <div className="card" key={mId}>
            <h3>Subject: {subject}</h3>

            <p>{content}</p>
            <Link className="card-view-details" to={`/individual-email/${mId}`}>
              View Details
            </Link>
          </div>
        );
      })}
    </>
  );
}
