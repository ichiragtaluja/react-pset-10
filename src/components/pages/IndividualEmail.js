import { useParams } from "react-router-dom";
import { useMail } from "../../contexts/MailProvider";
import { mails } from "../../data/mails";

export function IndividualEmail() {
  const { emailId } = useParams();
  const { dispatch } = useMail();

  const selectedMail = mails.find((email) => email.mId === emailId);

  const { mId, unread, isStarred, subject, content } = selectedMail;
  return (
    selectedMail && (
      <div className="card" key={mId}>
        <h3>Subject: {subject}</h3>

        <p>{content}</p>

        {/* <button
          className="card-button-read"
          onClick={() => dispatch({ type: "UNREAD", payload: mId })}
        >
          {!unread ? "Mark as Unread" : "Mark as Read"}
        </button> */}
      </div>
    )
  );
}
