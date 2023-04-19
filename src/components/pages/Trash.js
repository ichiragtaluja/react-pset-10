import { mails } from "../../data/mails";
import { Link } from "react-router-dom";

export function Trash() {
  return (
    <>
      <h1>Trash</h1>
      {mails.map((mail) => {
        const { mId, unread, isStarred, subject, content, isTrash } = mail;
        return (
          isTrash && (
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
