import React, { useState } from 'react';
import { Box, Button, Typography, Container } from '@mui/material';

interface JournalEntry {
  id: string;
  content: string;
  date: Date;
}

const JournalPage: React.FC = () => {
  const [entries, setEntries] = useState<JournalEntry[]>([]);

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Journal
        </Typography>
        
        {/* TODO: Implement journal entries list */}
        <Box sx={{ mb: 4 }}>
          {entries.length === 0 ? (
            <Typography>No entries yet. Start writing!</Typography>
          ) : (
            entries.map((entry) => (
              <Box key={entry.id} sx={{ mb: 2 }}>
                {/* TODO: Implement journal entry component */}
                <Typography>{entry.content}</Typography>
              </Box>
            ))
          )}
        </Box>

        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            // TODO: Implement new journal entry
          }}
        >
          New Entry
        </Button>
      </Box>
    </Container>
  );
};

export default JournalPage; 