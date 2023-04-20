import { useMail } from "../../contexts/MailProvider";
import { Link } from "react-router-dom";

export function Inbox() {
  const { dispatch, filteredMails } = useMail();

  const totalUnreadEmails = filteredMails.reduce(
    (acc, curr) => (curr.unread ? acc + 1 : acc),
    0
  );

  return (
    <>
      <h1>Inbox</h1>

      <fieldset>
        <legend>Filter</legend>
        <label>
          <input
            onChange={(event) =>
              dispatch({
                type: event.target.value,
                // payload: event.target.checked,
              })
            }
            value="unread"
            type="checkbox"
          />
          Show unread mails
        </label>

        <label>
          <input
            onChange={(event) =>
              dispatch({
                type: event.target.value,
                // payload: event.target.checked,
              })
            }
            value="isStarred"
            type="checkbox"
          />
          Show starred mails
        </label>
      </fieldset>

      <h2>Unread Emails: {totalUnreadEmails}</h2>

      {filteredMails.map((mail) => {
        const { mId, unread, isStarred, subject, content } = mail;
        return (
          <div
            style={{ backgroundColor: unread ? "#f5f5f5" : "" }}
            className=" card"
            key={mId}
          >
            <div className="card-heading">
              <h3>Subject: {subject}</h3>
              <button
                className="card-button-star"
                onClick={() => dispatch({ type: "STAR", payload: mId })}
              >
                {!isStarred ? "Star" : "Starred"}
              </button>
            </div>

            <p className="card-description">{content}</p>
            <Link className="card-view-details" to={`/individual-email/${mId}`}>
              View Details
            </Link>
            <button
              className="card-button-delete"
              onClick={() => dispatch({ type: "DELETE", payload: mId })}
            >
              Delete
            </button>
            <button
              className="card-button-read"
              onClick={() => dispatch({ type: "UNREAD", payload: mId })}
            >
              {!unread ? "Mark as Unread" : "Mark as Read"}
            </button>
            <button
              className="card-button-spam"
              onClick={() => dispatch({ type: "SPAM", payload: mId })}
            >
              Report as Spam
            </button>
          </div>
        );
      })}
    </>
  );
}
