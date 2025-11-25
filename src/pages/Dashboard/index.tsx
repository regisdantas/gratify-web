import React from "react";
import {
  BodyContainer,
  FloatingButton,
  DataContainer,
} from "../../styles/global";
import Card from "../../components/Card";
import uuid from "react-uuid";
import { EntryList, DateContainer, MenuBarContainer } from "./styles";
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
import { useDashboard } from "../../contexts/DashboardContext";
import {HeaderPortal} from "../../components/HeaderPortal";
import userImg from "../../assets/user.png";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface IEntry {
  uid: string;
  id: string;
  content: string;
  date: string;
  createdAt: string;
}

const Dashboard: React.FC = () => {
  const { selectedDate, setSelectedDate, showAll, setShowAll } = useDashboard();
  const [entries, setEntries] = React.useState<IEntry[]>([]);
  const { user, logOut } = UserAuth();
  const startDate = new Date().toISOString().split("T")[0];
  const dateRef = React.useRef<HTMLInputElement>(null);

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDateIncDec = (days: number) => {
    const date = new Date(selectedDate);
    date.setDate(date.getDate() + days);
    const dateStr = date.toISOString().split("T")[0];
    setSelectedDate(dateStr);
    if (dateRef !== null && dateRef.current !== null) {
      dateRef.current.value = dateStr;
    }
  };

  const handleDateChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  async function handleAddNewEntry(event: React.FormEvent<HTMLButtonElement>) {
    const newEntry: IEntry = {
      uid: user.uid,
      id: uuid(),
      content: "",
      date: selectedDate,
      createdAt: new Date().toISOString(),
    };
    scrollToTop();
    const newEntries = [...entries, newEntry];
    newEntries.sort((a, b) => {
      if (a.date > b.date) return -1;
      if (a.date < b.date) return 1;
      if (a.createdAt > b.createdAt) return -1;
      if (a.createdAt < b.createdAt) return 1;
      return 0;
    });
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
      let newEntry = doc.data() as IEntry;
      if (!newEntry.createdAt) {
        newEntry.createdAt = newEntry.date;
      }
      entries.push(newEntry);
    });
    entries.sort((a, b) => {
      if (a.date > b.date) return -1;
      if (a.date < b.date) return 1;
      if (a.createdAt > b.createdAt) return -1;
      if (a.createdAt < b.createdAt) return 1;
      return 0;
    });
    setEntries(entries);
  }

  React.useEffect(() => {
    fetchEntries();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
      <HeaderPortal>
        {user !== null &&
          user.displayName !== undefined &&
          user.photoURL !== null &&
          user.photoURL !== undefined ? (
            <DateContainer>
              <FiArrowLeft title="Previous day" size={36} onClick={() => handleDateIncDec(-1)} />
              <input
                title="Select date"
                ref={dateRef}
                type="date"
                defaultValue={startDate}
                onChange={handleDateChanged}
              />
              <FiArrowRight title="Next day" size={36} onClick={() => handleDateIncDec(1)} />
              {showAll ? (
                <FiEyeOff title="Show only selected day" size={36} onClick={() => setShowAll(false)} />
              ) : (
                <FiEye title="Show all notes" size={36} onClick={() => setShowAll(true)} />
              ) }
            </DateContainer>
          ) : null}
          {user !== null &&
        user.displayName !== undefined &&
        user.photoURL !== null &&
        user.photoURL !== undefined ? (
          <MenuBarContainer>
            <img
              title="Logout"
              src={user.photoURL ? user.photoURL : userImg}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = userImg;
              }}
              alt="User photograph"
              onClick={() => handleLogout()}
            />
          </MenuBarContainer>
        ) : null}
      </HeaderPortal>
      <DataContainer>
        <EntryList>
          {entries.map((entry, index) => {
            return showAll ||
              entry.date === selectedDate ||
              (isJsonString(entry.content) &&
                JSON.parse(entry.content).pinned === true) ? (
              <Card
                key={entry.id}
                id={entry.id}
                date={entry.date}
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
        <FloatingButton title="Add new note" color="#04d361" onClick={handleAddNewEntry}>
          +
        </FloatingButton>
      </DataContainer>
    </BodyContainer>
  );
};

export default Dashboard;
