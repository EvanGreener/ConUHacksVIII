import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { BASE_API_URL } from "../../backendConfig";

export const sponserPost = async (
  amount: string,
  sponsorUID: string,
  posterUID: string
): Promise<void> => {
  if (!FIREBASE_AUTH.currentUser) {
    console.error("No current user found");
    return undefined; // Explicitly returning undefined
  }
  const idToken = await FIREBASE_AUTH.currentUser.getIdToken();
  const response = await fetch(`${BASE_API_URL}/sponsers/sponsor-post/`, {
    headers: {
      Authorization: idToken,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ amount, sponsorUID, posterUID }),
  });

  if (!response.ok) {
    throw new Error("Failed to sponsor post.");
  }
};
