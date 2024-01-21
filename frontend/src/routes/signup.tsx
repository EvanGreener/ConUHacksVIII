import {
  createRegularUser,
  createResearcherUser,
} from "../services/userServices";
import React, { useState } from "react";

const SignUp = () => {
  const [userType, setUserType] = useState<string>("regular");

  // state for both
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [introduction, setIntroduction] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // state for researcher
  const [fieldOfResearch, setFieldOfResearch] = useState<string>("");
  const [locationType, setLocationType] = useState<string>("");
  const [locationName, setLocationName] = useState<string>("");

  // state for regular
  const [education, setEducation] = useState<string>("");
  const [occupation, setOccupation] = useState<string>("");

  const signUp = async () => {
    try {
      if (userType === "regular") {
        // create a new user in the database
        await createRegularUser(
          email,
          password,
          firstName,
          lastName,
          introduction,
          education,
          occupation
        );
      } else {
        await createResearcherUser(
          email,
          password,
          firstName,
          lastName,
          introduction,
          fieldOfResearch,
          locationType,
          locationName
        );
      }
    } catch (e) {
      console.error(e);
    }
  };

  const buttonStyle = {
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Sign Up</h1>
      <div style={{ marginBottom: "20x" }}>
        <label>User Type: </label>
        <select
          onChange={(event) => setUserType(event.target.value)}
          defaultValue="regular"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ddd",
            marginBottom: "10px",
            width: "40%",
          }}
        >
          <option value="regular">Regular</option>
          <option value="researcher">Researcher</option>
        </select>
      </div>

      <div style={{ display: "inline-block" }}>
        {userType === "researcher" && (
          <>
            <div style={{ marginBottom: "10px" }}>
              <input
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                placeholder="Email"
                type="text"
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <input
                onChange={(event) => setPassword(event.target.value)}
                value={password}
                placeholder="Password"
                type="password"
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <input
                onChange={(event) => setFirstName(event.target.value)}
                value={firstName}
                placeholder="First Name"
                type="text"
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <input
                onChange={(event) => setLastName(event.target.value)}
                value={lastName}
                placeholder="Last Name"
                type="text"
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <input
                onChange={(event) => setFieldOfResearch(event.target.value)}
                value={fieldOfResearch}
                placeholder="Field of Research"
                type="text"
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <input
                onChange={(event) => setLocationType(event.target.value)}
                value={locationType}
                placeholder="Location Type"
                type="text"
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <input
                onChange={(event) => setLocationName(event.target.value)}
                value={locationName}
                placeholder="Location Name"
                type="text"
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <textarea
                onChange={(event) => setIntroduction(event.target.value)}
                value={introduction}
                placeholder="Introduction"
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                }}
              ></textarea>
            </div>
          </>
        )}
        {userType === "regular" && (
          <>
            <div style={{ marginBottom: "10px" }}>
              <input
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                placeholder="Email"
                type="text"
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <input
                onChange={(event) => setPassword(event.target.value)}
                value={password}
                placeholder="Password"
                type="password"
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <input
                onChange={(event) => setFirstName(event.target.value)}
                value={firstName}
                placeholder="First Name"
                type="text"
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <input
                onChange={(event) => setLastName(event.target.value)}
                value={lastName}
                placeholder="Last Name"
                type="text"
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <input
                onChange={(event) => setEducation(event.target.value)}
                value={education}
                placeholder="Education"
                type="text"
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <input
                onChange={(event) => setOccupation(event.target.value)}
                value={occupation}
                placeholder="Occupation"
                type="text"
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <textarea
                onChange={(event) => setIntroduction(event.target.value)}
                value={introduction}
                placeholder="Introduction"
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                }}
              ></textarea>
            </div>
          </>
        )}
        <button style={buttonStyle} onClick={signUp}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
