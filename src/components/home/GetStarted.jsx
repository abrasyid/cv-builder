import { Link } from "react-router-dom";

function GetStarted() {
    return (
        <section className="mt-50 px-48">
            <div className="flex justify-center bg-linear-to-r from-[#00295F] from-0% via-[#0952B3] via-70% to-[#117BCC] to-100% px-14 pt-18 pb-18 rounded-4xl">
                <div className="w-156">
                    <h3 className="font-primary text-white text-center font-semibold text-[52px] leading-16 tracking-tighter">Mulai karir anda dengan CV profesional.</h3>
                    <p className="mt-6 font-primary text-[#FDFDFD] text-center text-base">Susun CV anda dengan mudah, gratis, dan privasi.</p>
                    <div className="mt-10 text-center">
                        <Link
                            to="/create-cv"
                            className="font-primary inline-flex items-center gap-1.5 text-primary text-base font-medium bg-white group transition-all duration-300 hover:bg-[#ECECEC] hover:shadow-[0_4px_10px_rgba(18,24,29,0.15)] px-6 py-3 rounded-full"
                        >
                            Build Now
                            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-6 6l6-6m-6-6l6 6" />
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GetStarted;
