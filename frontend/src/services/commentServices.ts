import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { BASE_API_URL } from "../../backendConfig";
import { Comment } from "../types/commentTypes";

export const createComment = async (
  uid: string,
  pid: string,
  parentComment: string,
  text: string
): Promise<Comment | undefined> => {
  try {
    if (!FIREBASE_AUTH.currentUser) {
      console.error("No current user found");
      return undefined; // Explicitly returning undefined
    }
    const idToken = await FIREBASE_AUTH.currentUser.getIdToken();
    const response = await fetch(`${BASE_API_URL}/comments/create-comment/`, {
      headers: {
        Authorization: idToken,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ uid, pid, parentComment, text }),
    });

    if (!response.ok) {
      throw new Error("Failed to create comment.");
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating comment:", error);
    throw error;
  }
};
