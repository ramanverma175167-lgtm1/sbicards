import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // reuse styles

function ForgetCustomerId() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [pan, setPan] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add submission logic here (api call)
    alert(`Mobile: ${mobile}\nPAN: ${pan}`);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Forgot Customer ID</h2>

        <form className="form" onSubmit={handleSubmit}>
          <label>Mobile Number</label>
          <input
            type="text"
            placeholder="Enter your mobile number"
            value={mobile}
            maxLength={10}
            onChange={(e) => setMobile(e.target.value)}
          />

          <label>PAN Card Number</label>
          <input
            type="text"
            placeholder="Enter your PAN card number"
            value={pan}
            maxLength={10}
            onChange={(e) => setPan(e.target.value)}
          />

          <button className="login-btn" type="submit">
            Submit
          </button>

          <button
            className="login-btn"
            type="button"
            style={{ marginTop: "10px", background: "#555" }}
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgetCustomerId;
