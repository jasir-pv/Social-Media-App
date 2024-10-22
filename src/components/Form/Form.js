import React from 'react';
import { TextField, Button, Paper } from '@mui/material';

const Form = () => {
  return (
    <Paper
      sx={{
        padding: 2, // This replaces `theme.spacing(2)` from your previous styles
      }}
    >
      <form
        autoComplete="off"
        noValidate
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          sx={{ margin: 1 }} // This replaces `theme.spacing(1)`
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={4}
          sx={{ margin: 1 }} // This replaces `theme.spacing(1)`
        />
        <div
          sx={{
            width: '97%',
            margin: '10px 0', // Similar to your fileInput styling
          }}
        >
          <input type="file" />
        </div>
        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
          sx={{ marginBottom: 2 }} // Replaces `theme.spacing(1)` from `buttonSubmit`
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
