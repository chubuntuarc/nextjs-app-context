import React from "react";
import { useSesionContext } from '../lib/AppContext'

export default function Navbar() {
  const { userId } = useSesionContext();
  
  return (
    <div>
      <h1>
        {userId ? `Welcome ${userId}` : "Please login"}
      </h1>
    </div>
  );
}