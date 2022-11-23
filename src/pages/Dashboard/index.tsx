import React from "react";
import { BodyContainer, CustomButton } from "../../styles/global";
import { DateContainer, EntryList } from "./styles";
import Status from "../../components/Status";
import MenuBar from "../../components/MenuBar";
import Card from "../../components/Card";
import { useStatus } from "../../hooks/useStatus";
import uuid from "react-uuid";
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

interface IEntry {
  user_id: string;
  id: string;
  content: string;
  date: string;
}

const Dashboard: React.FC = () => {
  const startDate = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = React.useState<string>(startDate);
  const [entries, setEntries] = React.useState<IEntry[]>([]);
  const [inputStatus, setInputStatus] = useStatus(null);
  const dateRef = React.useRef<HTMLInputElement>(null);

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

  const saveEntries = (newEntries: IEntry[]) => {
    localStorage.setItem("gratify_entries", JSON.stringify(newEntries));
    setEntries(newEntries);
  }

  async function handleAddNewEntry(event: React.FormEvent<HTMLButtonElement>) {
    const newEntry: IEntry = {
      user_id: "1",
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
      <BodyContainer>
      <MenuBar/>
      <Status status={inputStatus} />
      <DateContainer>
      <FiArrowLeft size={30} onClick={() => handleDateIncDec(-1)}/>
        <input
          ref={dateRef}
          type="date"
          defaultValue={startDate}
          onChange={handleDateChanged}
        ></input>
      <FiArrowRight size={30} onClick={() => handleDateIncDec(1)}/>
      </DateContainer>
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
      <CustomButton color="orange" onClick={handleAddNewEntry}>Add New</CustomButton>
      </BodyContainer>
  );
};

export default Dashboard;
