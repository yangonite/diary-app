import React, { useEffect, useState } from "react";
import { Card, Button } from "antd";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore"; // Import Firestore functions
import { auth, db } from "../firebase"; // Import auth and db from your firebase.js

const getDiaryEntriesByUser = async (userId) => {
  try {
    const diaryInputsRef = collection(db, "diaryInputs");
    const q = query(diaryInputsRef, where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    const diaryEntries = querySnapshot.docs.map((doc) => doc.data());
    return diaryEntries;
  } catch (error) {
    console.error("Error retrieving diary entries:", error);
    return [];
  }
};

export default function PastDiaries() {
  const [diaryEntries, setDiaryEntries] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(null);

  useEffect(() => {
    const fetchDiaryEntries = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userId = user.uid; // Get the current user's ID
          const entries = await getDiaryEntriesByUser(userId);
          setDiaryEntries(entries);
        }
      } catch (error) {
        console.error("Error retrieving diary entries:", error);
      }
    };

    fetchDiaryEntries();
  }, []);

  const navigateToEntry = (entry) => {
    setSelectedEntry(entry);
  };

  return (
    <div>
      <h2 className="text-center">Past Diary Entries</h2>
      {diaryEntries.map((entry) => (
        <Button
          key={entry.id}
          onClick={() => navigateToEntry(entry)}
          style={{ margin: "0.5rem" }}
        >
          {entry.createdAt.toDate().toLocaleString()}
        </Button>
      ))}
      {selectedEntry && (
        <Card title={selectedEntry.createdAt.toDate().toLocaleString()}>
          <p>{selectedEntry.text}</p>
        </Card>
      )}
    </div>
  );
}
