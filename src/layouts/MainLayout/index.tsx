
import React from "react";

type MainLayoutProps = {
    children: React.ReactNode;
};

const MainLayout = (props: MainLayoutProps) => {
    const { children } = props;
    return (
        <div>
            MainLayout
            {children}
        </div>
    );
};

export default MainLayout;
