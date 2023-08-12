import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
export const SEED_DATA = {
  // THIS IS A JS VARIABLE
  // THESE ARE JUST TEST DATA
  // WE NEED TO PROGRAMATICALLY POPULATE THESE BY WRITING FIRESTORE SCRIPTS
  users: [
    {
      first_name: "Alice",
      last_name: "Johnson",
      uid: "sQ5hIDZMSJHm8CqXu9iK",
      email: "alice.johnson@example.com",
      active: true,
      gender: "Female",
      display_name: "AliceJ",
      anonymous_name: "AnonAlice",
      dob: "1995-03-12",
      created_by: "system",
      created: 1677688800,
      updated: 1677948000,
      updated_by: "system",
    },
    {
      first_name: "Bob",
      last_name: "Smith",
      uid: "sQ5hIDZMSJHm8CqXu9iL",
      email: "bob.smith@example.com",
      active: true,
      gender: "Male",
      display_name: "BobS",
      anonymous_name: "AnonBob",
      dob: "1990-09-18",
      created_by: "system",
      created: 1677688800,
      updated: 1677948000,
      updated_by: "system",
    },
    {
      first_name: "Eva",
      last_name: "Martinez",
      uid: "sQ5hIDZMSJHm8CqXu9iM",
      email: "eva.martinez@example.com",
      active: true,
      gender: "Female",
      display_name: "EvaM",
      anonymous_name: "AnonEva",
      dob: "1988-12-05",
      created_by: "system",
      created: 1677688800,
      updated: 1677948000,
      updated_by: "system",
    },
    {
      first_name: "Michael",
      last_name: "Brown",
      uid: "sQ5hIDZMSJHm8CqXu9iN",
      email: "michael.brown@example.com",
      active: true,
      gender: "Male",
      display_name: "MichaelB",
      anonymous_name: "AnonMichael",
      dob: "1993-07-22",
      created_by: "system",
      created: 1677688800,
      updated: 1677948000,
      updated_by: "system",
    },
    {
      first_name: "Linda",
      last_name: "Davis",
      uid: "sQ5hIDZMSJHm8CqXu9iP",
      email: "linda.davis@example.com",
      active: true,
      gender: "Female",
      display_name: "LindaD",
      anonymous_name: "AnonLinda",
      dob: "1985-06-10",
      created_by: "system",
      created: 1677688800,
      updated: 1677948000,
      updated_by: "system",
    },
  ],
  entries: [
    {
      created: 1659748800,
      created_by: "sQ5hIDZMSJHm8CqXu9iK",
      active: true,
      updated: 1659848800,
      updated_by: "sQ5hIDZMSJHm8CqXu9iL",
      title: "A Day in Paris",
      body: "Arrived in Paris today. The city is as beautiful as I remember. Walked down the Seine, visited the Louvre, and ended the day at a cozy French bistro. The weather was perfect.",
      uid: "sQ5hIDZMSJHm8CqXu9iAA",
    },
    {
      created: 1659848900,
      created_by: "sQ5hIDZMSJHm8CqXu9iL",
      active: false,
      updated: 1659948900,
      updated_by: "sQ5hIDZMSJHm8CqXu9iM",
      title: "Discovering the Eiffel Tower",
      body: "Today I visited the Eiffel Tower. The view from the top was breath-taking. I could see the entire city. It was a bit crowded, but the experience was worth it.",
      uid: "sQ5hIDZMSJHm8CqXu9iBB",
    },
    {
      created: 1659949000,
      created_by: "sQ5hIDZMSJHm8CqXu9iM",
      active: true,
      updated: 1660049000,
      updated_by: "sQ5hIDZMSJHm8CqXu9iN",
      title: "Versailles, A Day of Opulence",
      body: "Spent the day at Versailles. The palace and gardens were absolutely stunning. The Hall of Mirrors was my favorite. The grandeur and opulence were overwhelming.",
      uid: "sQ5hIDZMSJHm8CqXu9iCC",
    },
    {
      created: 1660049100,
      created_by: "sQ5hIDZMSJHm8CqXu9iN",
      active: false,
      updated: 1660149100,
      updated_by: "sQ5hIDZMSJHm8CqXu9iP",
      title: "Day at the Louvre",
      body: "Today I spent the whole day at the Louvre. There was so much to see, from the Mona Lisa to the ancient Egyptian exhibits. I can't wait to return and explore more.",
      uid: "sQ5hIDZMSJHm8CqXu9iDD",
    },
    {
      created: 1660149200,
      created_by: "sQ5hIDZMSJHm8CqXu9iP",
      active: true,
      updated: 1660249200,
      updated_by: "sQ5hIDZMSJHm8CqXu9iK",
      title: "Montmartre and Sacré-Cœur",
      body: "Today I explored Montmartre, strolled around its charming streets, and visited the beautiful Sacré-Cœur Basilica. The area had a very bohemian feel. The view of Paris from the top was spectacular.",
      uid: "sQ5hIDZMSJHm8CqXu9iEE",
    },
    {
      created: 1660249300,
      created_by: "sQ5hIDZMSJHm8CqXu9iK",
      active: false,
      updated: 1660349300,
      updated_by: "sQ5hIDZMSJHm8CqXu9iL",
      title: "Notre-Dame and Sainte-Chapelle",
      body: "Visited the Notre-Dame and the Sainte-Chapelle. Both were stunningly beautiful. The stained glass windows of the Sainte-Chapelle left me speechless. Notre-Dame, despite the damage, still had a grand presence.",
      uid: "sQ5hIDZMSJHm8CqXu9iFF",
    },
    {
      created: 1660349400,
      created_by: "sQ5hIDZMSJHm8CqXu9iL",
      active: true,
      updated: 1660449400,
      updated_by: "sQ5hIDZMSJHm8CqXu9iM",
      title: "The Art of Picasso",
      body: "Today I visited the Picasso Museum. It was incredible to see his works up close. His talent and the range of styles he mastered are truly amazing. A day well spent.",
      uid: "sQ5hIDZMSJHm8CqXu9iGG",
    },
    {
      created: 1660449500,
      created_by: "sQ5hIDZMSJHm8CqXu9iM",
      active: false,
      updated: 1660549500,
      updated_by: "sQ5hIDZMSJHm8CqXu9iN",
      title: "Exploring the Marais",
      body: "Spent the day wandering in the Marais district. The historic architecture, trendy boutiques, and cozy cafés made it a unique experience. The Place des Vosges was the highlight of the day.",
      uid: "sQ5hIDZMSJHm8CqXu9iHH",
    },
    {
      created: 1660549600,
      created_by: "sQ5hIDZMSJHm8CqXu9iN",
      active: true,
      updated: 1660649600,
      updated_by: "sQ5hIDZMSJHm8CqXu9iP",
      title: "A Boat Ride on the Seine",
      body: "Took a boat ride on the Seine today. It was the perfect way to see the city from a different perspective. The view of the Eiffel Tower from the river was unforgettable.",
      uid: "sQ5hIDZMSJHm8CqXu9iII",
    },
  ],
};

export const seed = async () => {
  for (const collectionName in SEED_DATA) {
    console.log("collectionName", collectionName);
    console.log("entered here");
    let documents = SEED_DATA[collectionName];
    console.log("documents: ", documents);

    for (let i = 0; i < documents.length; i++) {
      let docData = documents[i];

      const { uid } = docData;
      console.log("uid", uid);
      try {
        console.log("reached x before", docData);
        setTimeout(() => {
          console.log("seeding");
        }, 1000);
        await setDoc(doc(db, collectionName, uid), docData);
        console.log("reached x after", docData);
      } catch (error) {
        console.error(`Error seeding document to ${collectionName}: `, error);
      }
    }
  }
};
