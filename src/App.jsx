import React, { useState } from "react";
import "./App.css";
import Organiser from "./organise";

function App() {
  const [isOrganiserOpen, setIsOrganiserOpen] = useState(false);

  console.log("Current state of isOrganiserOpen:", isOrganiserOpen);

  const openOrganiser = () => setIsOrganiserOpen(true);
  const closeOrganiser = () => setIsOrganiserOpen(false);

  return (
    <>
      <h1>Scrimmage</h1>
      <div className="card">
        <p>Get on the court faster. ⚡</p>
      </div>
      <p>I want to: </p>
      <div className="space-x-4 space-y-4">
        <button
          id="organiseBtn"
          type="button"
          onClick={openOrganiser}
          className="rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Organise
        </button>
        <button
          type="button"
          className="rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Attend
        </button>
      </div>
      <div>
        <Organiser onClose={closeOrganiser} show={isOrganiserOpen} />
      </div>
    </>
  );
}

export default App;
