import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Header from "./components/Header";
import Home from "./pages/Home";
import Cadastrar from "./pages/Cadastrar";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Cadastrar />} path="/cadastrar" />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
