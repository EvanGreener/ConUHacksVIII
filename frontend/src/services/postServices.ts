import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { BASE_API_URL } from "../../backendConfig";
import { Post } from "../types/postTypes";

export const createPost = async (
  title: string,
  description: string,
  attachmentURL: string | undefined
): Promise<Post | undefined> => {
  try {
    if (!FIREBASE_AUTH.currentUser) {
      console.error("No current user found");
      return undefined; // Explicitly returning undefined
    }
    const idToken = await FIREBASE_AUTH.currentUser.getIdToken();
    const response = await fetch(
      `${BASE_API_URL}/posts/create-post/${FIREBASE_AUTH.currentUser.uid}`,
      {
        headers: {
          Authorization: idToken,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ title, description, attachmentURL }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to create post.");
    }
    return await response.json();
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};
