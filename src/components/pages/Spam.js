import { Link } from "react-router-dom";
import { useMail } from "../../contexts/MailProvider";

export function Spam() {
  const { state } = useMail();
  return (
    <>
      <h1>Spam</h1>
      {state?.spamMails?.map((mail) => {
        const { mId, unread, isStarred, subject, content, isSpam } = mail;
        return (
          <div className="card" key={mId}>
            <h3>Subject: {subject}</h3>

            <p>{content}</p>

            {/* <Link className="card-view-details" to={`/individual-email/${mId}`}>
              View Details
            </Link> */}
          </div>
        );
      })}
    </>
  );
}
