import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { BASE_API_URL } from "../../backendConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const createRegularUser = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  introduction: string,
  education: string,
  occupation: string
): Promise<void> => {
  try {
    const response = await createUserWithEmailAndPassword(
      FIREBASE_AUTH,
      email,
      password
    );
    const user = response.user;

    if (FIREBASE_AUTH.currentUser) {
      const idToken = await FIREBASE_AUTH.currentUser.getIdToken();
      const response = await fetch(`${BASE_API_URL}/sign-up-regular`, {
        headers: {
          Authorization: idToken,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          uid: user.uid,
          firstName,
          lastName,
          introduction,
          education,
          occupation,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to create user.");
      }
    }
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

export const createResearcherUser = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  introduction: string,
  fieldOfReasearch: string,
  locationType: string,
  locationName: string
): Promise<void> => {
  try {
    const response = await createUserWithEmailAndPassword(
      FIREBASE_AUTH,
      email,
      password
    );
    const user = response.user;
    if (FIREBASE_AUTH.currentUser) {
      const idToken = await FIREBASE_AUTH.currentUser.getIdToken();
      const response = await fetch(`${BASE_API_URL}/sign-up-researcher`, {
        headers: {
          Authorization: idToken,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          uid: user.uid,
          firstName,
          lastName,
          introduction,
          fieldOfReasearch,
          locationName,
          locationType,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to create user.");
      }
    }
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};
