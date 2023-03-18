import React, { useState } from "react";
//mui
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [isExpand, setExpand] = React.useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((previousNote) => {
      return {
        ...previousNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function expand() {
    setExpand(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpand ? (
          <input
            name="title"
            value={note.title}
            onChange={handleChange}
            placeholder="Title"
          />
        ) : null}

        <textarea
          name="content"
          value={note.content}
          onChange={handleChange}
          placeholder="Take a note.."
          rows={isExpand ? "4" : "1"}
          onClick={expand}
        />

        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
}

export default CreateArea;
