import React, { useState } from "react";
import { Card, CardContent, TextField, Typography, Box } from "@mui/material";
import Button from "@mui/material/Button";

function QuestionTemplate(props) {
  const [input, setInput] = useState(props.defaultValue);
  const [answer, setAnswer] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setAnswer(props.resolve(input));
  };
  return (
    <div>
      <Typography variant="h4" marginBottom={2} textAlign="center">
        {props.title}
      </Typography>
      <Card>
        <CardContent>
          <Box
            component="form"
            display="flex"
            alignItems="center"
            onSubmit={handleSubmit}
          >
            <TextField
              id="outlined-basic"
              placeholder={props.placeholder}
              label="Input"
              variant="outlined"
              value={input}
              onInput={(e) => setInput(e.target.value)}
            />
            <Box marginLeft={1}>
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </Box>
          </Box>
          <Typography variant="h6">{answer}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default QuestionTemplate;
