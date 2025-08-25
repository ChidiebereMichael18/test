import React from "react";
import { SidebarProvider } from "./context/SidebarContext";
import { BrowserRouter } from "react-router-dom";
import RouterPath from "./router/RouterPath";

function App() {
  return (
    <SidebarProvider>
      <BrowserRouter>
        <RouterPath />
      </BrowserRouter>
    </SidebarProvider>
  );
}

export default App;
