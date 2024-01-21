
import {FormEvent, useState} from "react";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [attachmentURL, setAttachmentURL] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Assuming the UID is hard-coded for this example
    const uid = "your_user_id_here";

    const postData = {
      title,
      description,
      attachmentURL,
    };

    try {
      const response = await fetch(`http://your-backend-api-url/create-post/${uid}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (response.status === 201) {
        console.log("Post created successfully");
        // Optionally, you can redirect the user or show a success message
      } else {
        console.error("Error creating post");
      }
    } catch (error) {
      console.error("Error creating post", error);
    }
  };

  return (
    <div>
      <h2>Create a Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

        <label>Attachment URL:</label>
        <input type="text" value={attachmentURL} onChange={(e) => setAttachmentURL(e.target.value)} />

        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default PostForm;
