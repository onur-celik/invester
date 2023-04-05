import { useDispatch, useSelector } from "react-redux";
import { GlobalData, setDashboards } from "../store/global";
import { setActiveDashboard } from "../store/global";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

export const useDashboard = () => {
    const dispatch = useDispatch();
    const { dashboards } = useSelector((state: GlobalData) => state);

    const saveDashboards = (dashboardsArr: Dashboard[]) => {
        try {
            localStorage.setItem("dashboards", JSON.stringify(dashboardsArr));
            return true;
        } catch (err: any) {
            throw new Error(err.message);
        }
    };

    const createNewDashboard = async () => {
        const newId = uuidv4();

        const existingDashboards = await getLocalDashboards();
        if (existingDashboards.length > 0) {
            existingDashboards.push({ id: newId, widgets: [], layouts: [] });
            localStorage.setItem(
                "dashboards",
                JSON.stringify(existingDashboards)
            );
            dispatch(setDashboards(existingDashboards));
            dispatch(setActiveDashboard(newId));
        } else {
            let dashboardsTemp = [{ id: newId, widgets: [], layouts: [] }];
            dispatch(setDashboards(dashboardsTemp));
            dispatch(setActiveDashboard(newId));
        }
    };

    const getLocalDashboards = async (): Promise<Dashboard[]> => {
        const dashboards = localStorage.getItem("dashboards");
        if (dashboards) {
            const existingDashboards = JSON.parse(dashboards);
            return existingDashboards;
        } else {
            return [];
        }
    };

    const getLocalActiveDashboard = async (): Promise<string> => {
        const localActiveDashboardId = localStorage.getItem("activeDashboard");
        if (localActiveDashboardId) {
            return localActiveDashboardId;
        }
        return "home";
    };

    return {
        createNewDashboard,
        saveDashboards,
        getLocalDashboards,
        getLocalActiveDashboard,
    };
};
