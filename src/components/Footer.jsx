import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="mt-40 bg-[#0F0F0F] px-36">
            <div className="justify-items-center pt-18 pb-14">
                <div className="w-140 space-y-3.5">
                    <h3 className="font-primary text-center text-3xl font-bold tracking-tight text-white">
                        CV Builder
                    </h3>
                    <p className="font-primary text-center text-sm leading-6 text-[#BFBFBF]">
                        Website gratis untuk menghasilkan CV ATS-friendly. Informasi yang diberikan
                        hanya berjalan di browser dan tetap berada di perangkat pengguna.
                    </p>
                </div>
                <div className="mt-12 flex space-x-6">
                    <a
                        href="#steps"
                        className="font-primary text-sm text-[#BFBFBF] transition duration-300 hover:text-white"
                    >
                        Steps
                    </a>
                    <a
                        href="#features"
                        className="font-primary text-sm text-[#BFBFBF] transition duration-300 hover:text-white"
                    >
                        Features
                    </a>
                    <Link
                        to="/create-cv"
                        className="font-primary text-sm text-[#BFBFBF] transition duration-300 hover:text-white"
                    >
                        Build CV
                    </Link>
                    <a
                        href="#feedback"
                        className="font-primary text-sm text-[#BFBFBF] transition duration-300 hover:text-white"
                    >
                        Feedback
                    </a>
                </div>
            </div>
            <div className="flex justify-between border-t border-[#474747] pt-7 pb-7">
                <p className="font-primary text-sm text-[#BFBFBF]">
                    ©2026 CV Builder. Developed by Abdul Rasyid.
                </p>
                <div className="flex space-x-4">
                    <a href="https://github.com/abrasyid" target="_blank">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-[#BFBFBF] transition-colors duration-300 hover:text-white"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                        >
                            <g
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                            >
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" />
                                <path d="M9 18c-4.51 2-5-2-7-2" />
                            </g>
                        </svg>
                    </a>
                    <a href="https://linkedin.com/in/abdulrasyid7/">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-[#BFBFBF] transition-colors duration-300 hover:text-white"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                        >
                            <g
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                            >
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z" />
                                <circle cx="4" cy="4" r="2" />
                            </g>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/_abrasyid/" target="_blank">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-[#BFBFBF] transition-colors duration-300 hover:text-white"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                        >
                            <g
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                            >
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01" />
                            </g>
                        </svg>
                    </a>
                    <a href="">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-[#BFBFBF] transition-colors duration-300 hover:text-white"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                        >
                            <g
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                            >
                                <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                                <rect width="20" height="16" x="2" y="4" rx="2" />
                            </g>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
