import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Layout from "./components/layout/Layout";
import AllTodos from "./pages/AllTodos";
import RequireAuth from "./components/auth/RequireAuth";
import RedirectToHome from "./components/auth/RedirectToHome";
import InvalidPath from "./components/auth/InvalidPath";
import CreateTodo from "./pages/CreateTodo";
import EditTodo from "./pages/EditTodo";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route
          path="/login"
          exact
          element={
            <RedirectToHome>
              <Login />
            </RedirectToHome>
          }
        />
        <Route
          path="/"
          exact
          element={
            <RequireAuth>
              <AllTodos />
            </RequireAuth>
          }
        />
        <Route
          path="/create-todo-task"
          exact
          element={
            <RequireAuth>
              <CreateTodo />
            </RequireAuth>
          }
        />
        <Route
          path="/update-task/:task_id"
          exact
          element={
            <RequireAuth>
              <EditTodo />
            </RequireAuth>
          }
        />
        <Route path="*" element={<InvalidPath />} />
      </Routes>
    </Layout>
  );
};

export default App;
