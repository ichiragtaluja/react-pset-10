import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Inbox } from "./components/pages/Inbox";
import { Spam } from "./components/pages/Spam";
import { Trash } from "./components/pages/Trash";
import { Header } from "./components/pages/Header";
import { IndividualEmail } from "./components/pages/IndividualEmail";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Inbox />} />
        <Route path="/spam" element={<Spam />} />
        <Route path="/trash" element={<Trash />} />
        <Route
          path="/individual-email/:emailId"
          element={<IndividualEmail />}
        />
      </Routes>
    </div>
  );
}

export default App;
