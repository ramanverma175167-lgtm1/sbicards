import { useState } from "react";
import "./PaymentForm.css";

export default function PaymentForm() {
  const [cardNumber, setCardNumber] = useState("");

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.match(/.{1,4}/g)?.join(" ") || "";
    setCardNumber(value);
  };

  return (
    <div className="page">
      <div className="card-form">
        <h2>Card Details</h2>

        <label>Name on Card</label>
        <input type="text" placeholder="Name on Card" />

        <label>Card Number</label>
        <input
          type="text"
          placeholder="1234 5678 9012 3456"
          value={cardNumber}
          onChange={handleCardNumberChange}
          maxLength={19}
        />

        <div className="row">
          <div>
            <label>Expiry Month</label>
            <select>
              <option>MM</option>
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i}>{String(i + 1).padStart(2, "0")}</option>
              ))}
            </select>
          </div>

          <div>
            <label>Expiry Year</label>
            <select>
              <option>YY</option>
              {["24", "25", "26", "27", "28", "29"].map((y) => (
                <option key={y}>{y}</option>
              ))}
            </select>
          </div>
        </div>

        <label>CVV</label>
        <input type="password" placeholder="XXX" maxLength={3} />

        <button>Submit</button>
      </div>
    </div>
  );
}
