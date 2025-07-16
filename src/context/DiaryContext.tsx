import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export interface Diary {
  id: number;
  date: string;
  weather: string;
  mood: string;
  keyword: string;
  content: string;
}

interface DiaryContextType {
  diaryList: Diary[];
  setDiaryList: React.Dispatch<React.SetStateAction<Diary[]>>;
}

const DiaryContext = createContext<DiaryContextType | undefined>(undefined);

export const DiaryProvider = ({ children }: { children: ReactNode }) => {
  const [diaryList, setDiaryList] = useState<Diary[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("diaryList");
    if (saved) setDiaryList(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("diaryList", JSON.stringify(diaryList));
  }, [diaryList]);

  return (
    <DiaryContext.Provider value={{ diaryList, setDiaryList }}>
      {children}
    </DiaryContext.Provider>
  );
};

export const useDiary = (): DiaryContextType => {
  const context = useContext(DiaryContext);
  if (!context) {
    throw new Error("useDiary must be used within a DiaryProvider");
  }
  return context;
};
