import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // reuses your existing styles

function ForgotPassword() {
  const navigate = useNavigate();
  const [customerId, setCustomerId] = useState("");

  const handleProceed = (e) => {
    e.preventDefault();
    // Add your logic here (e.g., API call to send OTP/reset link)
    alert(`Proceed with Customer ID: ${customerId}`);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Forgot Password</h2>

        <form className="form" onSubmit={handleProceed}>
          <label>Customer ID</label>
          <input
            type="text"
            placeholder="Enter Customer ID"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
          />

          <a
            className="forgot-link"
            onClick={() => navigate("/ForgetCustomerId")}
          >
            Forgot Customer ID?
          </a>

          <button className="login-btn" type="submit">
            Proceed
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
