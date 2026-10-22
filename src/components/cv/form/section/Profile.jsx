function Profile({ cvData, setCvData }) {
    const profile = cvData.profile;

    const handleChange = (field, value) => {
        setCvData((prev) => ({
            ...prev,
            profile: {
                ...prev.profile,
                [field]: value,
            },
        }));
    };

    return (
        <div id="profil" className="rounded-2xl border border-[#E7ECF2] bg-white p-5">
            <h1 className="font-primary text-primary mb-4 text-[22px] font-bold tracking-tight">
                Profil Anda
            </h1>
            <div className="space-y-4">
                <div className="space-y-2">
                    <label
                        htmlFor="namaLengkap"
                        className="font-primary text-primary block text-[13px] font-medium"
                    >
                        Nama
                    </label>
                    <input
                        type="text"
                        id="namaLengkap"
                        name="namaLengkap"
                        value={profile.namaLengkap}
                        onChange={(event) => handleChange("namaLengkap", event.target.value)}
                        placeholder="Nama lengkap"
                        className="font-primary text-primary placeholder:text-primary/45 w-full rounded-lg border border-[#E7ECF2] bg-[#FAFBFD] px-3.75 py-2.25 text-sm transition-all duration-200 focus:border-[#0B60EA] focus:ring-3 focus:ring-[#0B60EA]/15 focus:outline-none"
                    />
                </div>
                <div className="grid grid-cols-2 space-x-4">
                    <div className="space-y-2">
                        <label
                            htmlFor="telepon"
                            className="font-primary text-primary block text-[13px] font-medium"
                        >
                            Nomor Telepon
                        </label>
                        <input
                            type="text"
                            id="telepon"
                            name="telepon"
                            value={profile.telepon}
                            onChange={(event) => handleChange("telepon", event.target.value)}
                            placeholder="+62 81234567890"
                            className="font-primary text-primary placeholder:text-primary/45 w-full rounded-lg border border-[#E7ECF2] bg-[#FAFBFD] px-3.75 py-2.25 text-sm transition-all duration-200 focus:border-[#0B60EA] focus:ring-3 focus:ring-[#0B60EA]/15 focus:outline-none"
                        />
                    </div>
                    <div className="space-y-2">
                        <label
                            htmlFor="email"
                            className="font-primary text-primary block text-[13px] font-medium"
                        >
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={profile.email}
                            onChange={(event) => handleChange("email", event.target.value)}
                            placeholder="example@gmail.com"
                            className="font-primary text-primary placeholder:text-primary/45 w-full rounded-lg border border-[#E7ECF2] bg-[#FAFBFD] px-3.75 py-2.25 text-sm transition-all duration-200 focus:border-[#0B60EA] focus:ring-3 focus:ring-[#0B60EA]/15 focus:outline-none"
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label
                        htmlFor="linkedin"
                        className="font-primary text-primary block text-[13px] font-medium"
                    >
                        Linkedin
                    </label>
                    <input
                        type="url"
                        id="linkedin"
                        name="linkedin"
                        value={profile.linkedin}
                        onChange={(event) => handleChange("linkedin", event.target.value)}
                        placeholder="https://linkedin.com/in/username"
                        className="font-primary text-primary placeholder:text-primary/45 w-full rounded-lg border border-[#E7ECF2] bg-[#FAFBFD] px-3.75 py-2.25 text-sm transition-all duration-200 focus:border-[#0B60EA] focus:ring-3 focus:ring-[#0B60EA]/15 focus:outline-none"
                    />
                </div>
                <div className="space-y-2">
                    <label
                        htmlFor="portofolio"
                        className="font-primary text-primary block text-[13px] font-medium"
                    >
                        Portofolio
                    </label>
                    <input
                        type="url"
                        id="portofolio"
                        name="portofolio"
                        value={profile.portofolio}
                        onChange={(event) => handleChange("portofolio", event.target.value)}
                        placeholder="https://yourwebsite.com"
                        className="font-primary text-primary placeholder:text-primary/45 w-full rounded-lg border border-[#E7ECF2] bg-[#FAFBFD] px-3.75 py-2.25 text-sm transition-all duration-200 focus:border-[#0B60EA] focus:ring-3 focus:ring-[#0B60EA]/15 focus:outline-none"
                    />
                </div>
                <div className="space-y-2">
                    <label
                        htmlFor="alamat"
                        className="font-primary text-primary block text-[13px] font-medium"
                    >
                        Alamat
                    </label>
                    <textarea
                        name="alamat"
                        id="alamat"
                        value={profile.alamat}
                        onChange={(event) => handleChange("alamat", event.target.value)}
                        placeholder="Jl. Sudirman No.456, Jakarta"
                        className="font-primary text-primary placeholder:text-primary/45 w-full rounded-lg border border-[#E7ECF2] bg-[#FAFBFD] px-3.75 py-2.25 text-sm transition-all duration-200 focus:border-[#0B60EA] focus:ring-3 focus:ring-[#0B60EA]/15 focus:outline-none"
                    ></textarea>
                </div>
            </div>
        </div>
    );
}

export default Profile;
