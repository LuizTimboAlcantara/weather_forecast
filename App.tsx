import React from "react";
import Routes from "./src/routes";
import { LocationProvider } from "./src/contexts/location";
import { UserProvider } from "./src/contexts/user";

export default function App() {
  return (
    <UserProvider>
      <LocationProvider>
        <Routes />
      </LocationProvider>
    </UserProvider>
  );
}
