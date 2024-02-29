import React from "react";
import { useGetLoadingState } from "redux/loadingFullScreen/loadingFullScreenSlice";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";

const LoadingFullScreen = () => {
    const { isLoading } = useGetLoadingState();
    return isLoading ? (
        <Backdrop sx={{ color: "#fff", zIndex: 9999 }} open>
            <CircularProgress color="inherit" />
        </Backdrop>
    ) : null;
};

export default LoadingFullScreen;
