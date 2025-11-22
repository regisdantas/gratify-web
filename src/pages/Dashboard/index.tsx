import React from "react";
import {
  BodyContainer,
  CustomButton,
  DataContainer,
} from "../../styles/global";
import Card from "../../components/Card";
import uuid from "react-uuid";
import { EntryList } from "./styles";
import { database } from "../../services/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  addDoc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { UserAuth } from "../../contexts/AuthContext";
import { isJsonString } from "../../utils";

interface IEntry {
  uid: string;
  id: string;
  content: string;
  date: string;
}

const Dashboard: React.FC = () => {
  const [entries, setEntries] = React.useState<IEntry[]>([]);
  const { user } = UserAuth();

  const selectedDate = new Date().toISOString().split("T")[0];
  const [showAll, setShowAll] = React.useState<boolean>(false);

  async function handleAddNewEntry(event: React.FormEvent<HTMLButtonElement>) {
    const newEntry: IEntry = {
      uid: user.uid,
      id: uuid(),
      content: "",
      date: selectedDate,
    };
    const newEntries = [...entries, newEntry];
    setEntries(newEntries);
    const userDocRef = doc(database, "users", user.uid);
    const entriesRef = collection(userDocRef, "entries");
    await addDoc(entriesRef, newEntry);
  }

  async function fetchEntries() {
    const userDocRef = doc(database, "users", user.uid);
    const entriesRef = collection(userDocRef, "entries");
    const querySnapshot = await getDocs(entriesRef);
    const entries: IEntry[] = [];
    querySnapshot.forEach((doc) => {
      entries.push(doc.data() as IEntry);
    });
    setEntries(entries);
  }

  React.useEffect(() => {
    fetchEntries();
  }, []);

  const handleDeleteEntry = async (id: string) => {
    const newEntries = entries.filter((entry) => entry.id !== id);
    setEntries(newEntries);

    const userDocRef = doc(database, "users", user.uid);
    const entriesRef = collection(userDocRef, "entries");
    const userQuery = query(entriesRef, where("id", "==", id));
    const querySnapshot = await getDocs(userQuery);
    querySnapshot.forEach((document) => {
      deleteDoc(doc(database, `users/${user.uid}/entries`, document.id));
    });
  };

  const handleChangeEntry = async (id: string, content: string) => {
    const newEntries = entries.map((entry) => {
      if (entry.id === id) {
        entry.content = content;
      }
      return entry;
    });
    setEntries(newEntries);

    const changedEntry = entries.find((entry) => entry.id === id);
    if (changedEntry) {
      changedEntry.content = content;
      const userDocRef = doc(database, "users", user.uid);
      const entriesRef = collection(userDocRef, "entries");
      const userQuery = query(entriesRef, where("id", "==", id));
      const querySnapshot = await getDocs(userQuery);
      querySnapshot.forEach((document) => {
        setDoc(
          doc(database, `users/${user.uid}/entries`, document.id),
          changedEntry
        );
      });
    }
  };

  let count = 0;
  return (
    <BodyContainer>
      <DataContainer>
        <EntryList>
          {entries.map((entry, index) => {
            console.log(entry);
            return showAll ||
              entry.date === selectedDate ||
              (isJsonString(entry.content) &&
                JSON.parse(entry.content).fixed === true) ? (
              <Card
                key={entry.id}
                id={entry.id}
                number={(count = count + 1)}
                content={entry.content}
                onDeleteCard={handleDeleteEntry}
                onChangeContent={handleChangeEntry}
              />
            ) : (
              <div key={entry.id}></div>
            );
          })}
        </EntryList>
        <CustomButton color="#04d361" onClick={handleAddNewEntry}>
          Add New
        </CustomButton>
      </DataContainer>
    </BodyContainer>
  );
};

export default Dashboard;
