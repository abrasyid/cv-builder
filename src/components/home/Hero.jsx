import { Link } from "react-router-dom";
import heroImage from "../../assets/images/undraw_resume_jrgi.svg";
import { cn } from "../../utils/cn";

function Hero() {
    return (
        <section
            id="home"
            className={cn(
                "mt-10 flex flex-col gap-10 scroll-mt-40 px-5 pb-12",
                "sm:px-8 lg:mt-20 lg:flex-row lg:justify-between lg:space-x-10 lg:px-16 lg:pb-20 xl:px-36",
                "shadow-[0_1px_4px_rgba(18,24,29,0.05)]",
            )}
        >
            <div className="w-full lg:w-150">
                <p
                    className={cn(
                        "inline-block",
                        "font-primary text-sm font-medium text-[#414D55]",
                        "py-2 pr-3.5 pl-3",
                        "rounded-4xl border border-[#E7ECF2]",
                        "shadow-[0_4px_12px_rgba(18,24,29,0.05)]",
                    )}
                >
                    ✨ CV profesional lebih mudah
                </p>
                <h1 className="text-primary font-primary mt-8 text-4xl leading-tight font-semibold tracking-tight sm:text-5xl lg:mt-18 lg:text-[56px] lg:leading-17">
                    Bangun CV profesional anda secara gratis
                </h1>
                <p className="font-primary mt-6 text-base leading-7 font-normal text-[#55636B] lg:mt-9">
                    CV Builder adalah website untuk menghasilkan CV tanpa proses rumit. Informasi
                    yang anda berikan bersifat pribadi dan tidak disimpan. Wujudkan CV anda dengan
                    mengisi data dan unduh dengan pdf.{" "}
                </p>
                <div className="mt-8 lg:mt-10">
                    <Link
                        to="/create-cv"
                        className={cn(
                            "inline-flex items-center",
                            "font-primary text-base text-white",
                            "bg-primary gap-1.5 px-6.5 py-3.5",
                            "rounded-4xl",
                            "group transition-all duration-300",
                            "hover:bg-[#292E33] hover:shadow-[0_4px_10px_rgba(18,24,29,0.15)]",
                        )}
                    >
                        Get Started
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
            <div className="w-full max-w-124 self-center">
                <img src={heroImage} alt="Hero Image" className="w-full" />
            </div>
        </section>
    );
}

export default Hero;
