import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, linkTo }) {
  const navigate = useNavigate();
  const className = "text-sm text-blue-500 hover:text-blue-600 hover:underline";

  if (linkTo === "-1") {
    return (
      <button onClick={() => navigate(-1)} className={className}>
        &larr; Go back
      </button>
    );
  }

  return (
    <Link to={linkTo} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;
