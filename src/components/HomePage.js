import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Layout, Menu, Button, Card } from "antd";
import video from "../videos/video.mp4";
import diaryData from "./diarydata.json";
import { seed } from "../data/seed";
import { doc, setDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import {
  HomeOutlined,
  UserOutlined,
  FileOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

const handleSeed = async () => {
  // handle the seeding of data
  let ctx = "handleSeed";
  console.log("handleSeed");

  setTimeout(async () => {
    console.log("seeding");
  }, 1000);
  const snapshot = await getDocs(collection(db, "users"));
  console.log("snapshot", snapshot);
  snapshot.forEach((doc) => {
    console.log(doc.data());
  });

  // Add a new document in collection "cities"
  // const data = {
  //   prop: "value",
  //   // other properties
  // };

  // const docRef = doc(db, "collection", "docId");
  // setDoc(docRef, data)
  //   .then(() => console.log("Document successfully written!"))
  //   .catch((error) => console.error("Error writing document: ", error));

  // await setDoc(doc(db, "cities", "LA"), {
  //   name: "Los Angeles",
  //   state: "CA",
  //   country: "USA",
  // });
};

export default function HomePage() {
  const [current, setCurrent] = useState("login");
  const { currentUser } = useAuth();

  const getItems = () => {
    if (currentUser) {
      console.log("current user rn:", { currentUser });
      return [
        {
          label: <div>{currentUser}</div>,
          key: "user-uid",
        },
      ];
    } else {
      // User is not logged in, display login and sign up buttons
      return [
        {
          label: (
            <div className="home-nav-buttons">
              <Button type="primary" danger onClick={handleSeed}>
                Seed
              </Button>

              <Button type="primary">
                <Link to="/signup"> Sign up</Link>
              </Button>

              <Button type="primary">
                <Link to="/login"> Login</Link>
              </Button>
            </div>
          ),
          key: "login-signup",
        },
      ];
    }
  };

  return (
    <div>
      <Header>
        <Menu
          onClick={() => {}}
          mode="horizontal"
          theme="dark"
          items={getItems()}
        />
      </Header>
      <div className="video-container">
        <video className="home-video" src={video} autoPlay loop muted />
      </div>
      <div className="title-container">
        {/* <img
          src="https://artprojectsforkids.org/wp-content/uploads/2023/02/Book-Coloring-Page.jpg.webp"
          className="home-left-image"
          alt="Left Image"
        /> */}

        <h1 className="home-title">My Portfolio</h1>
        <p className="home-text">
          Express your thoughts and memories
          <br />
          Connect with like-minded friends
          <br />
          Unlock the power of self-reflection
        </p>
      </div>

      <div className="card-container">
        {diaryData.map((item, index) => (
          <Card
            hoverable
            className="home-card"
            key={index}
            title={<div className="home-card-title">{item.title}</div>}
          >
            <p>Created by: {item.created_by}</p>
            <p>Created at: {item.created_at}</p>
            <p>Updated at: {item.updated_at}</p>
            <p>Updated by: {item.updated_by}</p>
            <p>Diary ID: {item.diary_id}</p>
            <p>Is Public: {item.is_public ? "Yes" : "No"}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
