import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />

        {notes.map((noteList) => {
          return (
            <Note
              key={noteList.key}
              title={noteList.title}
              content={noteList.content}
            />
          );
        })}

        <Footer />
      </div>
    );
  }
}

export default App;
