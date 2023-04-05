import { Home, Plus, Box, Trash2 } from "react-feather";
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
    const {
        createNewDashboard,
        getLocalDashboards,
        getLocalActiveDashboard,
        saveDashboards,
    } = useDashboard();
    const { createLayout } = useBoard();

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

    function handleDeleteDashboard(dashboardId: string) {
        if (
            window.confirm(
                "Are you certain that you wish to delete this dashboard? Please be aware that all of the data associated with it will be permanently lost. Would you like to proceed with this action?"
            )
        ) {
            const filteredDashboards = dashboards.filter(
                (dashB) => dashB.id != dashboardId
            );

            const save = saveDashboards(filteredDashboards);

            if (save) {
                dispatch(setDashboards(filteredDashboards));
                dispatch(setActiveDashboard("home"));
            }
        }
    }

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
                >
                    <div
                        className="dashboard-btn-tooltip"
                        onClick={() => {
                            handleDeleteDashboard(dashB.id);
                        }}
                    >
                        <Trash2 size={12} />
                    </div>
                    <div
                        className="dashboard-btn-button"
                        onClick={(e) => {
                            dispatch(setActiveDashboard(dashB.id));
                        }}
                    >
                        <Box size={12} />
                    </div>
                </div>
            ))}
            <div
                className="dashboard-btn add-button"
                onClick={createNewDashboard}
            >
                <Plus size={16} />
            </div>
        </div>
    );
}
