import React from 'react';
import { Form, EntryList, Entry } from './styles';
import Header from '../../components/Header';
import Status from '../../components/Status';
import { useStatus } from '../../hooks/useStatus';
import uuid from 'react-uuid';

interface IEntry {
  id: string;
  content: string;
  date: string;
}

const Dashboard: React.FC = () => {
  const startDate = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = React.useState<string>(startDate);
  const [entries, setEntries] = React.useState<IEntry[]>([]);
  const [newEntryContent, setNewEntryContent] = React.useState<string>('');
  const contentInputRef = React.useRef<HTMLInputElement | null>(null);
  const [inputStatus, setInputStatus] = useStatus(null);

  const handleDateChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  function handleNewEntryChanged(
    event: React.ChangeEvent<HTMLInputElement>,
  ): void {
    setNewEntryContent(event.target.value);
  }

  async function handleNewEntryAdded(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newEntry: IEntry = {
      id: uuid(),
      content: newEntryContent,
      date: selectedDate,
    };
    const newEntries = [...entries, newEntry];
    console.log(newEntries);
    localStorage.setItem('gratify_entries', JSON.stringify(newEntries));
    setEntries(newEntries);
    setNewEntryContent('');
    if (contentInputRef.current) {
      contentInputRef.current.value = '';
    }
  }

  React.useEffect(() => {
    const entriesStr = localStorage.getItem('gratify_entries');
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

  return (
    <>
      <Header title="Gratify" />
      <Status status={inputStatus} />
      <Form onSubmit={handleNewEntryAdded}>
        <input
          type="date"
          defaultValue={startDate}
          onChange={handleDateChanged}
        ></input>
        <input
          type="text"
          ref={contentInputRef}
          placeholder="What are you grateful for this day?"
          onChange={handleNewEntryChanged}
        />
      </Form>
      <EntryList>
        {entries.map(entry => {
          return entry.date === selectedDate ? (
            <Entry key={entry.id}>{entry.content}</Entry>
          ) : (
            <></>
          );
        })}
      </EntryList>
    </>
  );
};

export default Dashboard;
