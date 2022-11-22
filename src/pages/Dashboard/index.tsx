import React from "react";
import { AppContainer } from "../../styles/global";
import { EntryList } from "./styles";
import Header from "../../components/Header";
import Status from "../../components/Status";
import MenuBar from "../../components/MenuBar";
import Card from "../../components/Card";
import { useStatus } from "../../hooks/useStatus";
import uuid from "react-uuid";
import {User} from 'firebase/auth';

interface IEntry {
  id: string;
  content: string;
  date: string;
}

interface IDashboardProps {
  user: User;
}

const Dashboard: React.FC<IDashboardProps> = ({user}:IDashboardProps) => {
  const startDate = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = React.useState<string>(startDate);
  const [entries, setEntries] = React.useState<IEntry[]>([]);
  const [inputStatus, setInputStatus] = useStatus(null);

  const handleDateChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const saveEntries = (newEntries: IEntry[]) => {
    localStorage.setItem("gratify_entries", JSON.stringify(newEntries));
    setEntries(newEntries);
  }

  async function handleAddNewEntry(event: React.FormEvent<HTMLButtonElement>) {
    const newEntry: IEntry = {
      id: uuid(),
      content: "",
      date: selectedDate,
    };
    const newEntries = [...entries, newEntry];
    saveEntries(newEntries);
  }

  React.useEffect(() => {
    const entriesStr = localStorage.getItem("gratify_entries");
    try {
      if (entriesStr) {
        const storedEntries = JSON.parse(entriesStr);
        if (storedEntries && Array.isArray(storedEntries)) {
          setEntries(storedEntries);
        }
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  const handleDeleteEntry = (id: string) => {
    const newEntries = entries.filter(entry => entry.id !== id);
    saveEntries(newEntries);
  }

  const handleChangeEntry = (id: string, content: string) => {
    const newEntries = entries.map((entry) => {
      if (entry.id === id) {
        entry.content = content;
      }
      return entry;
    });
    saveEntries(newEntries);
  }

  return (
    <>
      <Header title="Gratify" />
      <MenuBar user={user}/>
      <Status status={inputStatus} />
      <AppContainer>
        <input
          type="date"
          defaultValue={startDate}
          onChange={handleDateChanged}
        ></input>

      <EntryList>
        {entries.map((entry) => {
          return entry.date === selectedDate ? (
            <Card
              id={entry.id}
              content={entry.content}
              onDeleteCard={handleDeleteEntry}
              onChangeContent={handleChangeEntry}
            />
          ) : (
            <></>
          );
        })}
      </EntryList>
      <button onClick={handleAddNewEntry}>Add New</button>
      </AppContainer>
    </>
  );
};

export default Dashboard;
