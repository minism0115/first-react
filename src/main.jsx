import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Library from "./chapter_03/Library.jsx";
import Clock from "./chapter_04/Clock.jsx";
import CommentList from "./chanter_05/CommentList.jsx";
import NotificationList from "./chaptor_06/NotificationList.jsx";
import Accommodate from "./chapter_07/Accommodate.jsx";
import ConfirmButton from "./chapter_08/ConfirmButton.jsx";
import ConfirmButton2 from "./chapter_08/ConfirmButton2.jsx";
import LandingPage from "./chapter_09/LandingPage.jsx";
import AttendanceBook from "./chapter_10/AttendanceBook.jsx";
import SignUp from "./chapter_11/SignUp.jsx";
import Calculator from "./chapter_12/Calculator.jsx";

// setInterval(() => {
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Calculator />
    <SignUp />
    <AttendanceBook />
    <LandingPage />
    <ConfirmButton />
    <ConfirmButton2 />
    <Clock />
    <Accommodate />
    <Library />
    <CommentList />
    <NotificationList />
  </React.StrictMode>
);
// });
