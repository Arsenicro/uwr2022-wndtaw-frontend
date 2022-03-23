import { Button } from "@mui/material";
import Container from "@mui/material/Container/Container";
import React from "react";
import { useTranslation } from "react-i18next";
import { Outlet, Route, Routes } from "react-router-dom";
import TodoList from "./Components/TodoLis/TodoList";

const LanguageChanger = () => {
  const { i18n } = useTranslation();

  const languageChanger = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <Button onClick={() => languageChanger("pl")}>pl</Button>
      <Button onClick={() => languageChanger("en")}>en</Button>
      <Outlet />
    </>
  );
};

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/square" element={<LanguageChanger />}>
          <Route path="todos" element={<TodoList />}></Route>
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
