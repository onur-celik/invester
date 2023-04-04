import "./styling/App.css";
import Layout from "./components/Layout";
import { GlobalData, toggleTheme } from "./store/global";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
    const global = useSelector((state: GlobalData) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        let selectedTheme = localStorage.getItem("theme");
        if (selectedTheme && selectedTheme !== global.theme) {
            dispatch(toggleTheme(selectedTheme));
        }
        // eslint-disable-next-line
    }, []);
    return (
        <div id="App" className={global.theme} data-theme={global.theme}>
            <Layout />
        </div>
    );
}

export default App;
