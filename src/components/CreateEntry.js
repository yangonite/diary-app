import React, { useState } from "react";
import { Input, Button } from "antd";
import { collection, addDoc } from "firebase/firestore"; // Import Firestore functions
import { auth, db } from "../firebase"; // Import auth and db from your firebase.js

const { TextArea } = Input;

const handleDiaryInput = async (text, userId) => {
  try {
    const diaryInputsRef = collection(db, "diaryInputs");
    const docRef = await addDoc(diaryInputsRef, {
      text: text,
      createdAt: new Date(),
      userId: userId,
    });
    console.log("Text saved to the new document successfully!");
  } catch (error) {
    console.error("Error saving text to the new document:", error);
  }
};

export default function AddDiary() {
  const [text, setText] = useState(""); // State to hold the input text

  const onChange = (e) => {
    setText(e.target.value); // Update the text state when input changes
  };

  const onSave = () => {
    const userId = auth.currentUser.uid; // Get the current user's ID
    // handleDiaryInput(text, userId); // Pass the userId to handleDiaryInput function

    console.log("Saved!", text);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div style={{ width: "50%", marginBottom: "1rem" }}>
        <TextArea
          style={{ width: "100%", height: "500px" }} // Adjust the height as needed
          onChange={onChange}
          placeholder="Can resize"
        />
      </div>
      <Button type="primary" onClick={onSave}>
        Save
      </Button>
    </div>
  );
}
