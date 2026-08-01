// import { createContext, ReactNode, useContext, useMemo } from "react";
// import useSheetData from "../hooks/useSheetData";
// import { getNavSheet } from "../helpers/helper";
// import { Clipboard, Contact, House, Rss, User } from "lucide-react";
// import { useLocation } from "react-router-dom";



// interface NavContextType {
//     navigation: NavItem[];
//     isLoading: boolean;
//     selected: string;
// }


// const NavContext = createContext<NavContextType | undefined>(undefined);

// export function NavProvider({ children }: { children: ReactNode }) {

//     const location = useLocation();

//     const { data: rawHtml, isLoading } = useSheetData();

//     const navigation = useMemo(() => {

//         if (isLoading || !rawHtml) return [];

//         return getNavSheet(rawHtml).filter((item) => NAV_ASSETS.some((nav) => nav.name === item.name))
//             .map((item) => {
//                 const asset = NAV_ASSETS.find((nav) => nav.name === item.name);
//                 return {
//                     ...asset,
//                     ...item,
//                 }

//             }).sort((a, b) => (a?.number ?? 0) - (b?.number ?? 0));

//     }, [rawHtml, isLoading]);

//     const selected = location.pathname;


//     return (
//         <NavContext.Provider value={{ navigation, isLoading, selected }}>
//             {children}
//         </NavContext.Provider>
//     );

// }

// export function useNav() {
//     const context = useContext(NavContext);

//     if (!context) {
//         throw new Error("useNav must use on NavProvider");
//     }

//     return context;
// }