import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // Import eye icons
import "./Login.css";

function LoginSection() {
  const [activeTab, setActiveTab] = useState("customer");
  const [cardNumber, setCardNumber] = useState("");
  const [showPin, setShowPin] = useState(false); // Toggle ATM PIN

  const handleCardChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.match(/.{1,4}/g)?.join(" ") || "";
    setCardNumber(value);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Login</h2>

        {/* Tabs */}
        <div className="tabs">
          <button
            className={activeTab === "customer" ? "active" : ""}
            onClick={() => setActiveTab("customer")}
          >
            Customer ID
          </button>
          <button
            className={activeTab === "debit" ? "active" : ""}
            onClick={() => setActiveTab("debit")}
          >
            Debit Card
          </button>
        </div>

        {/* Customer ID Login */}
        {activeTab === "customer" && (
          <div className="form">
            <label>Customer ID</label>
            <input type="text" placeholder="Enter Customer ID" />
            <a href="/ForgetCustomerId" className="forgot-link">Forgot Customer ID?</a>

            <label>Password</label>
            <input type="password" placeholder="Enter Password" />
            <a href="/ForgotPassword" className="forgot-link">Forgot Password?</a>

            <button className="login-btn">Login</button>
          </div>
        )}

        {/* Debit Card Login */}
        {activeTab === "debit" && (
          <div className="form">
            <label>Debit Card Number</label>
            <input
              type="text"
              placeholder="5555 5555 5555 5555"
              value={cardNumber}
              onChange={handleCardChange}
              maxLength={19}
            />

            <label>ATM PIN</label>
            <div className="pin-container">
              <input
                type={showPin ? "text" : "password"}
                placeholder="Enter PIN"
                maxLength={3}
              />
              <span
                className="eye-icon"
                onClick={() => setShowPin((prev) => !prev)}
              >
                {showPin ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </div>

            <button className="login-btn">Login</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginSection;
