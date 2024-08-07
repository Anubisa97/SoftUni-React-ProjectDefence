import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Navigate, Outlet } from "react-router";

export default function RouterGuard() {
    const { isAuthenticated } = useContext(AuthContext);

    return isAuthenticated
        ? <Outlet />
        : <Navigate to="/login" />

}