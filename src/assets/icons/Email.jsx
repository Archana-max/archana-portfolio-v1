import React from "react";
import "./Social_Icons.css";

const buildMailto = ({ email, subject, body }) => {
  const params = [];
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  const query = params.length ? `?${params.join("&")}` : "";
  return `mailto:${email}${query}`;
};

const EmailIcon = ({
  email = "archanamoorthy32@gmail.com",
  subject,
  body,
  onClick,
  ariaLabel = "Send email",
  title,
}) => {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
      return;
    }
    const href = buildMailto({ email, subject, body });
    // Use window.location to trigger the OS/default mail client
    window.location.href = href;
  };

  const computedTitle = title || (email ? `Email ${email}` : "Email");

  return (
    <button
      type="button"
      className="social_icons"
      aria-label={ariaLabel}
      title={computedTitle}
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-mail"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    </button>
  );
};

export default EmailIcon;
