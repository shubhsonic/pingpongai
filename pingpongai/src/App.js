import React, { useEffect } from "react";
import Dashboard from "./Dashboard/Dashboard";
import { connectionWithSocketServer } from "./socketConnection/socketConn";

function App() {
  useEffect(() => {
    connectionWithSocketServer();
  }, []);
  return (
    <div className='App'>
      <Dashboard />
    </div>
  );
}

export default App;
