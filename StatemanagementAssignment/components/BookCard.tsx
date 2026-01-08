import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

export interface Book {
  id: number;
  title: string;
  author: string;
  time: string;
  reads: string;
  image: string;
}

interface BookCardProps {
  book: Book;
  isFinished: boolean;
  onAction: (id: number) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, isFinished, onAction }) => {
  return (
    <Card sx={{ width: 260 }}>
      <CardMedia
        component="img"
        height="180"
        image={book.image}
        alt={book.title}
      />

      <CardContent>
        <Typography variant="subtitle1" fontWeight="bold">
          {book.title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {book.author}
        </Typography>

        <Typography variant="caption" display="block" mt={1}>
          {book.time} · {book.reads} reads
        </Typography>

        <Button
          fullWidth
          variant="text"
          color="primary"
          sx={{ mt: 2 }}
          onClick={() => onAction(book.id)}
        >
          {isFinished ? "Read again" : "Finished"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default BookCard;

