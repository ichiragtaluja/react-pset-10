import { mails } from "../../data/mails";
import { Link
 } from "react-router-dom";
export function Spam() {
  return (
    <>
      <h1>Spam</h1>
      {mails.map((mail) => {
        const { mId, unread, isStarred, subject, content, isSpam } = mail;
        return (
          isSpam && (
            <div key={mId}>
              <h3>Subject: {subject}</h3>
              <p>{content}</p>
              <Link>View Details</Link>
              <button>Delete</button>
              <button>Mark as Unread</button>
              <button>Report as Spam</button>
            </div>
          )
        );
      })}
    </>
  );
}
