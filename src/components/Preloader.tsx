import NyantaBlackIcon from "../assets/icons/nyanta-black.svg";
import NyantaWhiteIcon from "../assets/icons/nyanta-white.svg";

import useDarkMode from "../hooks/useDarkMode";

export default function Preloader({ isLoading }: PropsPreloader) {

    const { theme } = useDarkMode();

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-700
                ${isLoading ? "opacity-100" : "opacity-0 pointer-events-none"}    
            `}
        >
            <div className="flex flex-col items-center gap-4">
                <div className="w-1/4 h-1/4 rounded-full animate-loading-spin">
                    <img className="rounded-full" src={theme ? NyantaWhiteIcon : NyantaBlackIcon} alt="nyanta-white-logo"/>
                </div>
                <p className="text-on-background font-mono text-sm tracking-widest">
                    LOADING
                </p>
            </div>
        </div>
    );
}