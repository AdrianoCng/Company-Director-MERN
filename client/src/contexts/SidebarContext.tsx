import { createContext, useContext, useState } from "react";

// Types
import { ISidebarContext } from "../types/sidebarContext.types";

const SidebarContext = createContext<ISidebarContext | undefined>(undefined);

export const useSidebarContext = () => {
    const context = useContext(SidebarContext);

    if (context === undefined) {
        throw new Error("useSidebarContext must be used within a SidebarProvider");
    }

    return context;
};

interface Props {
    children: React.ReactNode;
}
const SidebarProvider = ({ children }: Props) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toogleSidebar = () => {
        setIsCollapsed((prev) => !prev);
    };

    return (
        <SidebarContext.Provider
            value={{
                isCollapsed,
                toogleSidebar,
            }}
        >
            {children}
        </SidebarContext.Provider>
    );
};

export default SidebarProvider;
