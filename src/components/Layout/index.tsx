import Header from "./Header";
import Board from "../Board/Board";
import AddWidget from "./AddWidget";

export default function Layout() {
    return (
        <div id="Layout">
            <Header />
            <Board />
            <AddWidget />
        </div>
    );
}
