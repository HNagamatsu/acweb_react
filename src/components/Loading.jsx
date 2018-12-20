import React from "react";

//icon
import RefreshIcon from "@material-ui/icons/Refresh";
import { load, loadContainer } from "./load.css";

const Loading = () => (
  <div className={loadContainer}>
    <RefreshIcon className={load} />
  </div>
);
export default Loading;
