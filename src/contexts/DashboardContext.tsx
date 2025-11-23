import {createContext, useContext, useEffect, useState} from "react";

interface IDashboardContext {
    showAll: boolean;
    setShowAll: React.Dispatch<React.SetStateAction<boolean>>;
    selectedDate: string;
    setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
}

const DashboardContext = createContext({} as IDashboardContext);

interface IDashboardProps {
    children: JSX.Element;
}

export const DashboardContextProvider = ({children}: IDashboardProps) => {
    const [showAll, setShowAll] = useState<boolean>(false);
    const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split("T")[0]);
    return (
        <DashboardContext.Provider value={{showAll, setShowAll, selectedDate, setSelectedDate}}>
            {children}
        </DashboardContext.Provider>
    )
};

export const useDashboard = () => {
    return useContext(DashboardContext);
};
