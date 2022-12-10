import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Contacts from "../components/Contacts";

export default function Root() {
  return (
    <>
     <div id="body">
      <div id="header">
        <Header />
      </div>
      <div id="outlet">
        <Outlet />
      </div>
      <div id="footer">
        <Contacts/>
      </div>
    </div>
    </>
  );
}