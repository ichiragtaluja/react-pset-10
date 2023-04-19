import { useMail } from "../../contexts/MailProvider";
import { Link } from "react-router-dom";

export function Inbox() {
  const { mails, dispatch } = useMail();

  return (
    <>
      <h1>Inbox</h1>

      <label>
        <input
          onChange={(event) => dispatch({ type: event.target.value })}
          value="unread"
          type="checkbox"
        />
        Show unread mails
      </label>

      <label>
        <input
          onChange={(event) => dispatch({ type: event.target.value })}
          value="isStarred"
          type="checkbox"
        />
        Show starred mails
      </label>

      {mails.map((mail) => {
        const { mId, unread, isStarred, subject, content } = mail;
        return (
          <div key={mId}>
            <h3>Subject: {subject}</h3>
            <button>Star</button>
            <p>{content}</p>
            <Link>View Details</Link>
            <button>Delete</button>
            <button>Mark as Unread</button>
            <button>Report as Spam</button>
          </div>
        );
      })}
    </>
  );
}
