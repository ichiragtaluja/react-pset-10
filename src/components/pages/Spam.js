import { Link } from "react-router-dom";
import { useMail } from "../../contexts/MailProvider";
export function Spam() {
  const { state, dispatch } = useMail();
  return (
    <>
      <h1>Spam</h1>
      {state?.spamMails?.map((mail) => {
        const { mId, unread, isStarred, subject, content, isSpam } = mail;
        return (
          <div key={mId}>
            <h3>Subject: {subject}</h3>

            <p>{content}</p>

            <Link>View Details</Link>
          </div>
        );
      })}
    </>
  );
}
