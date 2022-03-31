import React from "react";
import {ContainerScreen} from "./components/containerScreen/ContainerScreen";
import {NavigateContainer} from "./components/navigate/NavigateContainer";
import style from './App.module.scss';

function App() {
    return (
      <div className={style.app}>
          <NavigateContainer/>
          <ContainerScreen/>
      </div>
  );
}

export default App;
