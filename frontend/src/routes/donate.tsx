import React from "react";
import { useState } from "react";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { FIREBASE_AUTH } from "../../FirebaseConfig";

const donate = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Donation Amount</h1>

      <div style={{ display: "inline-block" }}>
        <div style={{ marginBottom: "10px" }}>
          <input
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            type="text"
            placeholder="Amount"
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ddd",
            }}
          />
        </div>

        <button
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#007bff",
            color: "white",
            cursor: "pointer",
          }}
          onClick={signIn}
        >
          Donate
        </button>
      </div>
    </div>
  );
};

export default donate;
