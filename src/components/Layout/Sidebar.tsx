import { Home, Plus, Box } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import {
    GlobalData,
    setActiveDashboard,
    setDashboards,
} from "../../store/global";
import { useEffect, useState } from "react";
import { useDashboard } from "../../hooks/useDashboard";
import { useBoard } from "../../hooks/useBoard";

export default function Sidebar() {
    const dispatch = useDispatch();
    const [activeOne, setActiveOne] = useState<string>("home");
    const { activeDashboard, dashboards } = useSelector(
        (state: GlobalData) => state
    );
    const { createNewDashboard, getLocalDashboards, getLocalActiveDashboard } =
        useDashboard();
    const { createLayout } = useBoard();

    // useEffect(() => {
    //     console.log("\n\n Sidebar, Dashboards watch ====>>>", dashboards);
    // }, [dashboards]);

    useEffect(() => {
        (async () => {
            const localDashboards = await getLocalDashboards();
            dispatch(setDashboards(localDashboards));
            const activeDashboard = await getLocalActiveDashboard();
            dispatch(setActiveDashboard(activeDashboard));
        })();
    }, []);

    useEffect(() => {
        setActiveOne(activeDashboard);
        dispatch(setActiveDashboard(activeDashboard));
        createLayout();
    }, [activeDashboard]);

    return (
        <div id="Sidebar">
            <div
                className={`dashboard-btn ${activeOne === "home" && "active"}`}
                onClick={() => {
                    dispatch(setActiveDashboard("home"));
                }}
            >
                <Home size={12} />
            </div>
            {dashboards.map((dashB, index) => (
                <div
                    key={index}
                    className={`dashboard-btn ${
                        activeOne === dashB.id && "active"
                    }`}
                    onClick={() => {
                        dispatch(setActiveDashboard(dashB.id));
                    }}
                >
                    <Box size={12} />
                </div>
            ))}
            <div className="dashboard-btn active" onClick={createNewDashboard}>
                <Plus size={12} />
            </div>
        </div>
    );
}
