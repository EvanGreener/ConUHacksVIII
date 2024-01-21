import React from "react";
import { useState } from "react";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { FIREBASE_AUTH } from "../../FirebaseConfig";

const Login = () => {
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
      <h1>Login</h1>

      <div style={{ display: "inline-block" }}>
        <div style={{ marginBottom: "10px" }}>
          <input
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            type="text"
            placeholder="Email"
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ddd",
            }}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <input
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            type="password"
            placeholder="Password"
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
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
