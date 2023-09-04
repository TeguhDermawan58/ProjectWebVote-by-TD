import React from "react";
import "./App.css";
import { GlobalStyles } from "./global";
import { createBrowserRouter,createRoutesFromElements,Route,useOutlet } from "react-router-dom";
import { listRoute } from "./routes";
import Header from "./components/header/header";
import Main from "./container/main";


function App() {
  return (
    <div>
      <Main/>
    </div>
  );

}

const MainPage = () => {
  const outlet = useOutlet()
  return (
    <>
    <GlobalStyles/>
    <Header/>
    {outlet}
    </>
  )
}

export const routes =createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainPage/>} errorElement={<>not found</>}>
      {listRoute.map((item,key) => (
        <Route key={key} element={<item.element/>} path={item.path}/>
        
       ))}
        
    </Route>
  )
)

export default App;
