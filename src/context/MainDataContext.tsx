import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { mainService } from "../services/section/mainService";

interface MainDataContextValue {
    mainData: MainData | null;
}

const MainDataContext = createContext<MainDataContextValue | undefined>(undefined);

export function MainDataProvider({ children }: { children: ReactNode }) {

    const [mainData, setMainData] = useState<MainData | null>(null);

    useEffect(() => {
        const loadDataProfile = async () => {
            const data = await mainService();
            setMainData(data ?? null);
        }

        loadDataProfile();
    }, []);

    return (
        <MainDataContext.Provider value={{ mainData }}>
            {children}
        </MainDataContext.Provider>
    )
}

export function useMainData() {
    const context = useContext(MainDataContext);

    if (!context) {
        throw new Error("useMainData must be used within a MainDataProvider");
    }

    return context;
}