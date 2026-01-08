import { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import BookCard from "./BookCard";
import type { Book } from "./BookCard";

const initialCurrentlyReading: Book[] = [
  {
    id: 1,
    title: "React",
    author: "Erica Keswin",
    time: "13-minute read",
    reads: "1.9k",
    image: "/reactbook.jpg",
  },
  {
    id: 3,
    title: "TypeScript",
    author: "Steve Glaveski",
    time: "15-minute read",
    reads: "1.2k",
    image: "/tsbook.jpg",
  },
];

const initialFinished: Book[] = [
  {
    id: 2,
    title: "HTML CSS JavaScript",
    author: "Jim Collins & Bill Lazier",
    time: "13-minute read",
    reads: "2k",
    image: "/jsbook.jpg",
  },
];

const LibraryTabs: React.FC = () => {
  const [tab, setTab] = useState(0);
  const [currentlyReading, setCurrentlyReading] =
    useState<Book[]>(initialCurrentlyReading);
  const [finished, setFinished] = useState<Book[]>(initialFinished);

  const markAsFinished = (id: number) => {
    const book = currentlyReading.find((b) => b.id === id);
    if (!book) return;

    setCurrentlyReading((prev) => prev.filter((b) => b.id !== id));
    setFinished((prev) => [...prev, book]);
  };

  const readAgain = (id: number) => {
    const book = finished.find((b) => b.id === id);
    if (!book) return;

    setFinished((prev) => prev.filter((b) => b.id !== id));
    setCurrentlyReading((prev) => [...prev, book]);
  };

  return (
    <Box>
      <Tabs value={tab} onChange={(_, value) => setTab(value)}>
        <Tab label="Currently reading" />
        <Tab label="Finished" />
      </Tabs>

      <Grid container spacing={3}>
        {tab === 0 &&
          currentlyReading.map((book) => (
            <Grid key={book.id}>
              <BookCard
                book={book}
                isFinished={false}
                onAction={markAsFinished}
              />
            </Grid>
          ))}

        {tab === 1 &&
          finished.map((book) => (
            <Grid key={book.id}>
              <BookCard
                book={book}
                isFinished
                onAction={readAgain}
              />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default LibraryTabs;

