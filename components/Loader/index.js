import React, { useContext } from "react";
import { LoaderToggle } from "@/contexts/loader.context.js";
export default function Loader({ children }) {
  const isLoading = useContext(LoaderToggle);
  return (
    <div>
      <div className="loader-background">
        {isLoading && <div className="loader"></div>}
      </div>
      <div>{children}</div>
    </div>
  );
}
