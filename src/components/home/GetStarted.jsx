import { Link } from "react-router-dom";

function GetStarted() {
    return (
        <section className="mt-24 px-5 sm:mt-32 sm:px-8 lg:mt-50 lg:px-16 xl:px-48">
            <div className="flex justify-center rounded-3xl bg-linear-to-r from-[#00295F] from-0% via-[#0952B3] via-70% to-[#117BCC] to-100% px-5 py-12 sm:rounded-4xl sm:px-8 sm:py-14 lg:px-14 lg:py-18">
                <div className="w-full max-w-156">
                    <h3 className="font-primary text-center text-3xl leading-tight font-semibold tracking-tighter text-white sm:text-4xl lg:text-[52px] lg:leading-16">
                        Mulai karir anda dengan CV profesional.
                    </h3>
                    <p className="font-primary mt-6 text-center text-base text-[#FDFDFD]">
                        Susun CV anda dengan mudah, gratis, dan privasi.
                    </p>
                    <div className="mt-10 text-center">
                        <Link
                            to="/create-cv"
                            className="font-primary text-primary group inline-flex items-center gap-1.5 rounded-full bg-white px-6 py-3 text-base font-medium transition-all duration-300 hover:bg-[#ECECEC] hover:shadow-[0_4px_10px_rgba(18,24,29,0.15)]"
                        >
                            Build Now
                            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M5 12h14m-6 6l6-6m-6-6l6 6"
                                    />
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
