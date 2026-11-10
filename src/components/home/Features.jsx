function Features() {
    return (
        <section
            id="features"
            className="mt-24 scroll-mt-24 space-y-8 border-b border-[#E7ECF2] bg-[#FAFBFD] px-5 pt-16 pb-20 sm:mt-32 sm:space-y-10 sm:px-8 sm:pt-20 sm:pb-24 lg:mt-40 lg:scroll-mt-10 lg:space-y-15 lg:px-16 lg:pt-30 lg:pb-40 xl:px-36"
        >
            <div className="justify-items-start">
                <h2 className="font-primary text-primary text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
                    Apa yang dilakukan CV Builder?
                </h2>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-12">
                <div>
                    <h2 className="font-primary bg-[linear-gradient(to_bottom,#0B60EA_0%,#6C9FF0_60%,#D0E4FF_100%)] bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-[52px]">
                        01
                    </h2>
                    <h3 className="font-primary text-primary mt-6 text-[17px] font-semibold">
                        ATS Friendly
                    </h3>
                    <p className="font-primary mt-2.5 text-[15px] leading-6.25 text-[#55636B]">
                        CV dibuat dengan struktur yang sederhana dan mudah dibaca oleh Applicant
                        Tracking System sehingga dapat dikenali dengan baik.
                    </p>
                </div>
                <div>
                    <h2 className="font-primary bg-[linear-gradient(to_bottom,#0B60EA_0%,#6C9FF0_60%,#D0E4FF_100%)] bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-[52px]">
                        02
                    </h2>
                    <h3 className="font-primary text-primary mt-6 text-[17px] font-semibold">
                        Client Side
                    </h3>
                    <p className="font-primary mt-2.5 text-[15px] leading-6.25 text-[#55636B]">
                        Proses membuat CV hanya berjalan di sisi browser tanpa bergantung server
                        untuk mengelola data anda.
                    </p>
                </div>
                <div>
                    <h2 className="font-primary bg-[linear-gradient(to_bottom,#0B60EA_0%,#6C9FF0_60%,#D0E4FF_100%)] bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-[52px]">
                        03
                    </h2>
                    <h3 className="font-primary text-primary mt-6 text-[17px] font-semibold">
                        Privacy
                    </h3>
                    <p className="font-primary mt-2.5 text-[15px] leading-6.25 text-[#55636B]">
                        Informasi yang anda masukkan tidak disimpan di server. Data tetap berada di
                        perangkat anda sehingga privasi tetap terjaga.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Features;
