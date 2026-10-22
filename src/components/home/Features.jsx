function Features() {
    return (
        <section
            id="features"
            className="mt-40 scroll-mt-10 space-y-15 border-b border-[#E7ECF2] bg-[#FAFBFD] px-36 pt-30 pb-40"
        >
            <div className="justify-items-start">
                <h2 className="font-primary text-primary text-4xl font-semibold tracking-tight">
                    Apa yang dilakukan CV Builder?
                </h2>
            </div>
            <div className="grid grid-cols-3 gap-x-12">
                <div>
                    <h2 className="font-primary bg-[linear-gradient(to_bottom,#0B60EA_0%,#6C9FF0_60%,#D0E4FF_100%)] bg-clip-text text-[52px] font-bold tracking-tight text-transparent">
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
                    <h2 className="font-primary bg-[linear-gradient(to_bottom,#0B60EA_0%,#6C9FF0_60%,#D0E4FF_100%)] bg-clip-text text-[52px] font-bold tracking-tight text-transparent">
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
                    <h2 className="font-primary bg-[linear-gradient(to_bottom,#0B60EA_0%,#6C9FF0_60%,#D0E4FF_100%)] bg-clip-text text-[52px] font-bold tracking-tight text-transparent">
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
