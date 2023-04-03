import Header from "./Header";
import Board from "../Board/Board";
import AddWidget from "./AddWidget";
import Sidebar from "./Sidebar";

export default function Layout() {
    return (
        <div id="Layout">
            <Header />
            <div id="Container">
                <Sidebar />
                <div id="BoardContainer">
                    <Board />
                </div>
            </div>
            <AddWidget />
        </div>
    );
}
