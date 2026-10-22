function Features() {
    return (
        <section id="features" className="mt-40 pt-30 pb-40 bg-[#FAFBFD] border-b border-[#E7ECF2] space-y-15 px-36 scroll-mt-10">
            <div className="justify-items-start">
                <h2 className="font-primary text-primary text-4xl font-semibold tracking-tight">Apa yang dilakukan CV Builder?</h2>
            </div>
            <div className="grid grid-cols-3 gap-x-12">
                <div>
                    <h2 className="font-primary bg-[linear-gradient(to_bottom,#0B60EA_0%,#6C9FF0_60%,#D0E4FF_100%)] bg-clip-text text-transparent text-[52px] font-bold tracking-tight">01</h2>
                    <h3 className="mt-6 font-primary text-primary text-[17px] font-semibold">ATS Friendly</h3>
                    <p className="mt-2.5 font-primary text-[#55636B] text-[15px] leading-6.25">CV dibuat dengan struktur yang sederhana dan mudah dibaca oleh Applicant Tracking System sehingga dapat dikenali dengan baik.</p>
                </div>
                <div>
                    <h2 className="font-primary bg-[linear-gradient(to_bottom,#0B60EA_0%,#6C9FF0_60%,#D0E4FF_100%)] bg-clip-text text-transparent text-[52px] font-bold tracking-tight">02</h2>
                    <h3 className="mt-6 font-primary text-primary text-[17px] font-semibold">Client Side</h3>
                    <p className="mt-2.5 font-primary text-[#55636B] text-[15px] leading-6.25">Proses membuat CV hanya berjalan di sisi browser tanpa bergantung server untuk mengelola data anda.</p>
                </div>
                <div>
                    <h2 className="font-primary bg-[linear-gradient(to_bottom,#0B60EA_0%,#6C9FF0_60%,#D0E4FF_100%)] bg-clip-text text-transparent text-[52px] font-bold tracking-tight">03</h2>
                    <h3 className="mt-6 font-primary text-primary text-[17px] font-semibold">Privacy</h3>
                    <p className="mt-2.5 font-primary text-[#55636B] text-[15px] leading-6.25">Informasi yang anda masukkan tidak disimpan di server. Data tetap berada di perangkat anda sehingga privasi tetap terjaga.</p>
                </div>
            </div>
        </section>
    );
}

export default Features;
