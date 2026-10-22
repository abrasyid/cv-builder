function FormatCV({ cvData, sectionOrder = [] }) {
    return (
        <article className="flex flex-col">
            <section id="profil">
                <h1 className="font-arial text-center text-2xl font-bold uppercase">
                    {cvData.profile.namaLengkap}
                </h1>
                <div className="-mt-1 flex items-center justify-center space-x-1">
                    {cvData.profile.telepon && (
                        <div>
                            <a href="" className="font-arial text-xs text-zinc-500">
                                {cvData.profile.telepon}
                            </a>
                        </div>
                    )}

                    {cvData.profile.telepon && cvData.profile.email && (
                        <div className="text-sm">|</div>
                    )}

                    {cvData.profile.email && (
                        <div>
                            <a
                                href={`mailto:${cvData.profile.email}`}
                                className="font-arial text-xs text-zinc-500"
                            >
                                {cvData.profile.email}
                            </a>
                        </div>
                    )}

                    {(cvData.profile.telepon || cvData.profile.email) &&
                        (cvData.profile.linkedin || cvData.profile.portofolio) && (
                            <div className="text-sm">|</div>
                        )}

                    {cvData.profile.linkedin && (
                        <div>
                            <a
                                href={cvData.profile.linkedin}
                                className="font-arial text-xs text-zinc-500"
                                target="_blank"
                            >
                                {cvData.profile.linkedin}
                            </a>
                        </div>
                    )}

                    {cvData.profile.linkedin && cvData.profile.portofolio && (
                        <div className="text-sm">|</div>
                    )}

                    {cvData.profile.portofolio && (
                        <div>
                            <a
                                href={cvData.profile.portofolio}
                                className="font-arial text-xs text-zinc-500"
                                target="_blank"
                            >
                                {cvData.profile.portofolio}
                            </a>
                        </div>
                    )}
                </div>

                {cvData.profile.alamat && (
                    <p className="font-arial mt-0.5 text-center text-xs text-zinc-500">
                        {cvData.profile.alamat}
                    </p>
                )}
            </section>
            {cvData.summary && (
                <section
                    id="ringkasan-diri"
                    style={{ order: sectionOrder.indexOf("summary") }}
                    className="mt-2"
                >
                    <p className="font-arial text-justify text-xs">{cvData.summary}</p>
                </section>
            )}
            {(cvData?.education ?? []).some((entry) => entry.institusi?.trim()) && (
                <section
                    id="pendidikan"
                    style={{ order: sectionOrder.indexOf("education") }}
                    className="mt-3"
                >
                    <h1 className="font-arial text-lg font-bold tracking-tight">Pendidikan</h1>
                    <hr className="-mt-0.5" />
                    <div className="mt-2.5 space-y-2.75">
                        {(cvData?.education ?? [])
                            .filter((entry) => entry.institusi?.trim())

                            .map((entry) => {
                                const deskripsi = (entry.deskripsi ?? []).filter(
                                    (item) => item.trim() !== "",
                                );

                                return (
                                    <div key={entry.id} className="space-y-0.75">
                                        <div className="space-y-0.5">
                                            <div className="flex justify-between space-x-4">
                                                <div className="flex space-x-1">
                                                    {entry.institusi && (
                                                        <h2 className="font-arial min-w-0 text-xs font-bold">
                                                            {entry.institusi}
                                                        </h2>
                                                    )}

                                                    {entry.institusi && entry.kotaInstitusi && (
                                                        <p className="font-arial text-xs">-</p>
                                                    )}

                                                    {entry.kotaInstitusi && (
                                                        <p className="font-arial text-xs font-bold whitespace-nowrap text-zinc-500">
                                                            {entry.kotaInstitusi},{" "}
                                                            <span>Indonesia</span>
                                                        </p>
                                                    )}
                                                </div>

                                                <div>
                                                    <p className="font-arial shrink-0 text-xs whitespace-nowrap">
                                                        {entry.bulanMulai && (
                                                            <span>{entry.bulanMulai}</span>
                                                        )}{" "}
                                                        {entry.tahunMulai && (
                                                            <span>{entry.tahunMulai}</span>
                                                        )}{" "}
                                                        {(entry.bulanMulai || entry.tahunMulai) &&
                                                            (entry.isPresent ||
                                                                entry.bulanSelesai ||
                                                                entry.tahunSelesai) &&
                                                            " - "}
                                                        {entry.isPresent ? (
                                                            <span>Present</span>
                                                        ) : (
                                                            <>
                                                                {entry.bulanSelesai && (
                                                                    <span>
                                                                        {entry.bulanSelesai}
                                                                    </span>
                                                                )}{" "}
                                                                {entry.tahunSelesai && (
                                                                    <span>
                                                                        {entry.tahunSelesai}
                                                                    </span>
                                                                )}
                                                            </>
                                                        )}
                                                    </p>
                                                </div>
                                            </div>

                                            <div>
                                                {(entry.gelar || entry.score) && (
                                                    <p className="font-arial text-xs italic">
                                                        {entry.gelar}
                                                        {entry.gelar && entry.score && ", "}
                                                        {entry.score && (
                                                            <>
                                                                <span>{entry.score}</span>
                                                                /4.00
                                                            </>
                                                        )}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        {deskripsi.length > 0 && (
                                            <div className="pl-5">
                                                <ul className="list-outside list-disc space-y-px">
                                                    {deskripsi.map((item, index) => (
                                                        <li
                                                            key={`${entry.id}-deskripsi-${index}`}
                                                            className="font-arial text-justify text-xs leading-4.25"
                                                        >
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                    </div>
                </section>
            )}
            {(cvData?.experienceWork ?? []).some((entry) => entry.perusahaan?.trim()) && (
                <section
                    id="pengalaman-kerja"
                    style={{ order: sectionOrder.indexOf("experienceWork") }}
                    className="mt-3"
                >
                    <h1 className="font-arial text-lg font-bold tracking-tight">
                        Pengalaman Kerja
                    </h1>
                    <hr className="-mt-0.5" />
                    <div className="mt-2.5 space-y-2.75">
                        {(cvData?.experienceWork ?? [])
                            .filter((entry) => entry.perusahaan?.trim())

                            .map((entry) => {
                                const deskripsi = (entry.deskripsi ?? []).filter(
                                    (item) => item.trim() !== "",
                                );

                                return (
                                    <div key={entry.id} className="space-y-0.75">
                                        <div className="space-y-0.5">
                                            <div className="flex justify-between space-x-4">
                                                <div className="flex space-x-1">
                                                    {entry.perusahaan && (
                                                        <h2 className="font-arial min-w-0 text-xs font-bold">
                                                            {entry.perusahaan}
                                                        </h2>
                                                    )}

                                                    {entry.perusahaan && entry.kotaPerusahaan && (
                                                        <p className="font-arial text-xs">-</p>
                                                    )}

                                                    {entry.kotaPerusahaan && (
                                                        <p className="font-arial text-xs font-bold text-zinc-500">
                                                            {entry.kotaPerusahaan}
                                                        </p>
                                                    )}
                                                </div>

                                                <div>
                                                    <p className="font-arial shrink-0 text-xs whitespace-nowrap">
                                                        {entry.bulanMulai && (
                                                            <span>{entry.bulanMulai}</span>
                                                        )}{" "}
                                                        {entry.tahunMulai && (
                                                            <span>{entry.tahunMulai}</span>
                                                        )}{" "}
                                                        {(entry.bulanMulai || entry.tahunMulai) &&
                                                            (entry.isPresent ||
                                                                entry.bulanSelesai ||
                                                                entry.tahunSelesai) &&
                                                            " - "}
                                                        {entry.isPresent ? (
                                                            <span>Present</span>
                                                        ) : (
                                                            <>
                                                                {entry.bulanSelesai && (
                                                                    <span>
                                                                        {entry.bulanSelesai}
                                                                    </span>
                                                                )}{" "}
                                                                {entry.tahunSelesai && (
                                                                    <span>
                                                                        {entry.tahunSelesai}
                                                                    </span>
                                                                )}
                                                            </>
                                                        )}
                                                    </p>
                                                </div>
                                            </div>

                                            <div>
                                                {(entry.posisi || entry.statusKerja) && (
                                                    <p className="font-arial text-xs italic">
                                                        {entry.posisi}
                                                        {entry.posisi && entry.statusKerja && ", "}
                                                        {entry.statusKerja && (
                                                            <span>{entry.statusKerja}</span>
                                                        )}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        {deskripsi.length > 0 && (
                                            <div className="pl-5">
                                                <ul className="list-outside list-disc space-y-px">
                                                    {deskripsi.map((item, index) => (
                                                        <li
                                                            key={`${entry.id}-deskripsi-${index}`}
                                                            className="font-arial text-justify text-xs leading-4.25"
                                                        >
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                    </div>
                </section>
            )}
            {(cvData.skills.softSkills.trim() ||
                cvData.skills.hardSkills.some((skill) => skill.trim()) ||
                cvData.skills.softwareSkills.trim()) && (
                <section
                    id="keahlian"
                    style={{ order: sectionOrder.indexOf("skills") }}
                    className="mt-3"
                >
                    <h1 className="font-arial text-lg font-bold tracking-tight">Keahlian</h1>
                    <hr className="-mt-0.5" />
                    <div className="mt-2.5 space-y-1">
                        <div>
                            {cvData.skills.softSkills.trim() && (
                                <h2 className="font-arial text-justify text-xs font-bold">
                                    Soft Skill:{" "}
                                    <span className="font-normal">{cvData.skills.softSkills}</span>
                                </h2>
                            )}
                        </div>

                        {cvData.skills.hardSkills.some((skill) => skill.trim()) && (
                            <div className="space-y-1">
                                <h2 className="font-arial text-xs font-bold">Hard Skill:</h2>
                                <div className="pl-5">
                                    <ul className="list-outside list-disc space-y-px">
                                        {cvData.skills.hardSkills
                                            .filter((skill) => skill.trim())
                                            .map((skill, index) => (
                                                <li
                                                    key={index}
                                                    className="font-arial text-justify text-xs leading-4.25"
                                                >
                                                    {skill}
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                        <div>
                            {cvData.skills.softwareSkills.trim() && (
                                <h2 className="font-arial text-justify text-xs font-bold">
                                    Software & Tools:{" "}
                                    <span className="font-normal">
                                        {cvData.skills.softwareSkills}
                                    </span>
                                </h2>
                            )}
                        </div>
                    </div>
                </section>
            )}
            {(cvData?.portfolio ?? []).some((entry) => entry.namaProject?.trim()) && (
                <section
                    id="portofolio"
                    style={{
                        order: sectionOrder.indexOf("portfolio"),
                    }}
                    className="mt-3"
                >
                    <h1 className="font-arial text-lg font-bold tracking-tight">Portofolio</h1>
                    <hr className="-mt-0.5" />
                    <div className="mt-2.5 space-y-2.75">
                        {(cvData?.portfolio ?? [])
                            .filter((entry) => entry.namaProject?.trim())

                            .map((entry) => {
                                const deskripsi = (entry.deskripsi ?? []).filter(
                                    (item) => item.trim() !== "",
                                );

                                return (
                                    <div key={entry.id} className="space-y-0.75">
                                        <div className="space-y-0.5">
                                            <div className="flex justify-between space-x-4">
                                                <div className="flex items-center">
                                                    {entry.namaProject && (
                                                        <h2 className="font-arial min-w-0 text-xs font-bold">
                                                            {entry.namaProject}
                                                        </h2>
                                                    )}
                                                </div>

                                                <div>
                                                    <p className="font-arial shrink-0 text-xs whitespace-nowrap">
                                                        {entry.bulanMulai && (
                                                            <span>{entry.bulanMulai}</span>
                                                        )}{" "}
                                                        {entry.tahunMulai && (
                                                            <span>{entry.tahunMulai}</span>
                                                        )}{" "}
                                                        {(entry.bulanMulai || entry.tahunMulai) &&
                                                            (entry.isPresent ||
                                                                entry.bulanSelesai ||
                                                                entry.tahunSelesai) &&
                                                            " - "}
                                                        {entry.isPresent ? (
                                                            <span>Present</span>
                                                        ) : (
                                                            <>
                                                                {entry.bulanSelesai && (
                                                                    <span>
                                                                        {entry.bulanSelesai}
                                                                    </span>
                                                                )}{" "}
                                                                {entry.tahunSelesai && (
                                                                    <span>
                                                                        {entry.tahunSelesai}
                                                                    </span>
                                                                )}
                                                            </>
                                                        )}
                                                    </p>
                                                </div>
                                            </div>

                                            <div>
                                                {entry.role && (
                                                    <p className="font-arial text-xs italic">
                                                        {entry.role}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        {deskripsi.length > 0 && (
                                            <div className="pl-5">
                                                <ul className="list-outside list-disc space-y-px">
                                                    {deskripsi.map((item, index) => (
                                                        <li
                                                            key={`${entry.id}-deskripsi-${index}`}
                                                            className="font-arial text-justify text-xs leading-4.25"
                                                        >
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {entry.linkProject && (
                                            <a
                                                href={entry.linkProject}
                                                target="_blank"
                                                className="flex w-fit items-center space-x-1.25"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="12"
                                                    height="12"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M9 17H7A5 5 0 0 1 7 7h2m6 0h2a5 5 0 1 1 0 10h-2m-7-5h8"
                                                    />
                                                </svg>
                                                <span className="font-arial text-xs">
                                                    {entry.linkProject}
                                                </span>
                                            </a>
                                        )}
                                    </div>
                                );
                            })}
                    </div>
                </section>
            )}
            {(cvData?.achievement ?? []).some((entry) => entry.prestasi?.trim()) && (
                <section
                    id="pencapaian"
                    style={{
                        order: sectionOrder.indexOf("achievement"),
                    }}
                    className="mt-3"
                >
                    <h1 className="font-arial text-lg font-bold tracking-tight">Pencapaian</h1>
                    <hr className="-mt-0.5" />
                    <div className="mt-2.5 space-y-2.75">
                        {(cvData?.achievement ?? [])
                            .filter((entry) => entry.prestasi?.trim())

                            .map((entry) => {
                                const deskripsi = (entry.deskripsi ?? []).filter(
                                    (item) => item.trim() !== "",
                                );

                                return (
                                    <div key={entry.id} className="space-y-0.75">
                                        <div className="space-y-0.5">
                                            <div className="flex justify-between space-x-4">
                                                <div className="flex items-center">
                                                    {entry.prestasi && (
                                                        <h2 className="font-arial min-w-0 text-xs font-bold">
                                                            {entry.prestasi}
                                                        </h2>
                                                    )}
                                                </div>
                                                <div>
                                                    {(entry.bulanPrestasi ||
                                                        entry.tahunPrestasi) && (
                                                        <p className="font-arial shrink-0 text-xs whitespace-nowrap">
                                                            {entry.bulanPrestasi && (
                                                                <span>{entry.bulanPrestasi}</span>
                                                            )}{" "}
                                                            {entry.tahunPrestasi && (
                                                                <span>{entry.tahunPrestasi}</span>
                                                            )}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>

                                            <div>
                                                {entry.penyelenggaraKegiatan && (
                                                    <p className="font-arial text-xs">
                                                        {entry.penyelenggaraKegiatan}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        {deskripsi.length > 0 && (
                                            <div className="pl-5">
                                                <ul className="list-outside list-disc space-y-px">
                                                    {deskripsi.map((item, index) => (
                                                        <li
                                                            key={`${entry.id}-deskripsi-${index}`}
                                                            className="font-arial text-justify text-xs leading-4.25"
                                                        >
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                    </div>
                </section>
            )}
            {(cvData?.organization ?? []).some((entry) => entry.namaOrganisasi?.trim()) && (
                <section
                    id="pengalaman-organisasi"
                    style={{
                        order: sectionOrder.indexOf("organization"),
                    }}
                    className="mt-3"
                >
                    <h1 className="font-arial text-lg font-bold tracking-tight">Organisasi</h1>
                    <hr className="-mt-0.5" />
                    <div className="mt-2.5 space-y-2.75">
                        {(cvData?.organization ?? [])
                            .filter((entry) => entry.namaOrganisasi?.trim())

                            .map((entry) => {
                                const deskripsi = (entry.deskripsi ?? []).filter(
                                    (item) => item.trim() !== "",
                                );

                                return (
                                    <div key={entry.id} className="space-y-0.75">
                                        <div className="space-y-0.5">
                                            <div className="flex justify-between space-x-4">
                                                <div className="flex space-x-1">
                                                    {entry.namaOrganisasi && (
                                                        <h2 className="font-arial min-w-0 text-xs font-bold">
                                                            {entry.namaOrganisasi}
                                                        </h2>
                                                    )}

                                                    {entry.namaOrganisasi &&
                                                        entry.kotaOrganisasi && (
                                                            <p className="font-arial text-xs">-</p>
                                                        )}

                                                    {entry.kotaOrganisasi && (
                                                        <p className="font-arial text-xs font-bold text-zinc-500">
                                                            {entry.kotaOrganisasi}
                                                        </p>
                                                    )}
                                                </div>

                                                <div>
                                                    <p className="font-arial shrink-0 text-xs whitespace-nowrap">
                                                        {entry.bulanMulai && (
                                                            <span>{entry.bulanMulai}</span>
                                                        )}{" "}
                                                        {entry.tahunMulai && (
                                                            <span>{entry.tahunMulai}</span>
                                                        )}{" "}
                                                        {(entry.bulanMulai || entry.tahunMulai) &&
                                                            (entry.isPresent ||
                                                                entry.bulanSelesai ||
                                                                entry.tahunSelesai) &&
                                                            " - "}
                                                        {entry.isPresent ? (
                                                            <span>Present</span>
                                                        ) : (
                                                            <>
                                                                {entry.bulanSelesai && (
                                                                    <span>
                                                                        {entry.bulanSelesai}
                                                                    </span>
                                                                )}{" "}
                                                                {entry.tahunSelesai && (
                                                                    <span>
                                                                        {entry.tahunSelesai}
                                                                    </span>
                                                                )}
                                                            </>
                                                        )}
                                                    </p>
                                                </div>
                                            </div>

                                            <div>
                                                {entry.jabatanOrganisasi && (
                                                    <p className="font-arial text-xs italic">
                                                        {entry.jabatanOrganisasi}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        {deskripsi.length > 0 && (
                                            <div className="pl-5">
                                                <ul className="list-outside list-disc space-y-px">
                                                    {deskripsi.map((item, index) => (
                                                        <li
                                                            key={`${entry.id}-deskripsi-${index}`}
                                                            className="font-arial text-justify text-xs leading-4.25"
                                                        >
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                    </div>
                </section>
            )}
            {(cvData?.volunteer ?? []).some((entry) => entry.event?.trim()) && (
                <section
                    id="kepanitiaan"
                    style={{
                        order: sectionOrder.indexOf("volunteer"),
                    }}
                    className="mt-3"
                >
                    <h1 className="font-arial text-lg font-bold tracking-tight">Kepanitiaan</h1>
                    <hr className="-mt-0.5" />
                    <div className="mt-2.5 space-y-2.75">
                        {(cvData?.volunteer ?? [])
                            .filter((entry) => entry.event?.trim())

                            .map((entry) => {
                                const deskripsi = (entry.deskripsi ?? []).filter(
                                    (item) => item.trim() !== "",
                                );

                                return (
                                    <div className="space-y-0.75">
                                        <div className="space-y-0.5">
                                            <div className="flex justify-between space-x-4">
                                                <div className="flex space-x-1">
                                                    {entry.event && (
                                                        <h2 className="font-arial min-w-0 text-xs font-bold">
                                                            {entry.event}
                                                        </h2>
                                                    )}

                                                    {entry.event && entry.kotaEvent && (
                                                        <p className="font-arial text-xs">-</p>
                                                    )}

                                                    {entry.kotaEvent && (
                                                        <p className="font-arial text-xs font-bold text-zinc-500">
                                                            {entry.kotaEvent}
                                                        </p>
                                                    )}
                                                </div>

                                                <div>
                                                    <p className="font-arial shrink-0 text-xs whitespace-nowrap">
                                                        {entry.bulanMulai && (
                                                            <span>{entry.bulanMulai}</span>
                                                        )}{" "}
                                                        {entry.tahunMulai && (
                                                            <span>{entry.tahunMulai}</span>
                                                        )}{" "}
                                                        {(entry.bulanMulai || entry.tahunMulai) &&
                                                            (entry.isPresent ||
                                                                entry.bulanSelesai ||
                                                                entry.tahunSelesai) &&
                                                            " - "}
                                                        {entry.isPresent ? (
                                                            <span>Present</span>
                                                        ) : (
                                                            <>
                                                                {entry.bulanSelesai && (
                                                                    <span>
                                                                        {entry.bulanSelesai}
                                                                    </span>
                                                                )}{" "}
                                                                {entry.tahunSelesai && (
                                                                    <span>
                                                                        {entry.tahunSelesai}
                                                                    </span>
                                                                )}
                                                            </>
                                                        )}
                                                    </p>
                                                </div>
                                            </div>

                                            <div>
                                                {entry.jabatanPanitia && (
                                                    <p className="font-arial text-xs italic">
                                                        {entry.jabatanPanitia}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        {deskripsi.length > 0 && (
                                            <div className="pl-5">
                                                <ul className="list-outside list-disc space-y-px">
                                                    {deskripsi.map((item, index) => (
                                                        <li
                                                            key={`${entry.id}-deskripsi-${index}`}
                                                            className="font-arial text-justify text-xs leading-4.25"
                                                        >
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                    </div>
                </section>
            )}
            {(cvData?.trainingCourse ?? []).some((entry) => entry.pelatihanKursus?.trim()) && (
                <section
                    id="pelatihan"
                    style={{
                        order: sectionOrder.indexOf("trainingCourse"),
                    }}
                    className="mt-3"
                >
                    <h1 className="font-arial text-lg font-bold tracking-tight">
                        Pelatihan & Kursus
                    </h1>
                    <hr className="-mt-0.5" />
                    <div className="mt-2.5 space-y-2.75">
                        {(cvData?.trainingCourse ?? [])
                            .filter((entry) => entry.pelatihanKursus?.trim())

                            .map((entry) => {
                                const deskripsi = (entry.deskripsi ?? []).filter(
                                    (item) => item.trim() !== "",
                                );

                                return (
                                    <div className="space-y-0.75">
                                        <div className="space-y-0.5">
                                            <div className="flex justify-between space-x-4">
                                                <div className="flex items-center">
                                                    {entry.pelatihanKursus && (
                                                        <h2 className="font-arial min-w-0 text-xs font-bold">
                                                            {entry.pelatihanKursus}
                                                        </h2>
                                                    )}
                                                </div>

                                                <div>
                                                    <p className="font-arial shrink-0 text-xs whitespace-nowrap">
                                                        {entry.bulanMulai && (
                                                            <span>{entry.bulanMulai}</span>
                                                        )}{" "}
                                                        {entry.tahunMulai && (
                                                            <span>{entry.tahunMulai}</span>
                                                        )}{" "}
                                                        {(entry.bulanMulai || entry.tahunMulai) &&
                                                            (entry.isPresent ||
                                                                entry.bulanSelesai ||
                                                                entry.tahunSelesai) &&
                                                            " - "}
                                                        {entry.isPresent ? (
                                                            <span>Present</span>
                                                        ) : (
                                                            <>
                                                                {entry.bulanSelesai && (
                                                                    <span>
                                                                        {entry.bulanSelesai}
                                                                    </span>
                                                                )}{" "}
                                                                {entry.tahunSelesai && (
                                                                    <span>
                                                                        {entry.tahunSelesai}
                                                                    </span>
                                                                )}
                                                            </>
                                                        )}
                                                    </p>
                                                </div>
                                            </div>

                                            <div>
                                                {entry.penyelenggaraTrainingCourse && (
                                                    <p className="font-arial text-xs italic">
                                                        {entry.penyelenggaraTrainingCourse}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        {deskripsi.length > 0 && (
                                            <div className="pl-5">
                                                <ul className="list-outside list-disc space-y-px">
                                                    {deskripsi.map((item, index) => (
                                                        <li
                                                            key={`${entry.id}-deskripsi-${index}`}
                                                            className="font-arial text-justify text-xs leading-4.25"
                                                        >
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {entry.certificateTrainingCourse && (
                                            <a
                                                href={entry.certificateTrainingCourse}
                                                target="_blank"
                                                className="flex w-fit items-center space-x-1.25"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="12"
                                                    height="12"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                                    />
                                                </svg>
                                                <span className="font-arial text-xs italic">
                                                    {entry.certificateTrainingCourse}
                                                </span>
                                            </a>
                                        )}
                                    </div>
                                );
                            })}
                    </div>
                </section>
            )}
            {(cvData?.certification ?? []).some((entry) => entry.namaSertifikasi?.trim()) && (
                <section
                    id="sertifikasi"
                    style={{
                        order: sectionOrder.indexOf("certification"),
                    }}
                    className="mt-3"
                >
                    <h1 className="font-arial text-lg font-bold tracking-tight">Sertifikasi</h1>
                    <hr className="-mt-0.5" />
                    <div className="mt-2.5 space-y-1.75">
                        {(cvData?.certification ?? [])
                            .filter((entry) => entry.namaSertifikasi?.trim())

                            .map((entry) => {
                                return (
                                    <div className="flex justify-between space-x-4">
                                        <div>
                                            {(entry.namaSertifikasi ||
                                                entry.penyelenggaraSertifikasi ||
                                                entry.nomorSertifikat) && (
                                                <h2 className="font-arial min-w-0 text-xs font-bold">
                                                    {entry.namaSertifikasi}
                                                    {entry.namaSertifikasi &&
                                                        entry.penyelenggaraSertifikasi &&
                                                        ", "}
                                                    {entry.penyelenggaraSertifikasi && (
                                                        <span className="font-normal">
                                                            {entry.penyelenggaraSertifikasi}
                                                            {entry.penyelenggaraSertifikasi &&
                                                                entry.nomorSertifikat &&
                                                                ", "}
                                                        </span>
                                                    )}

                                                    {entry.nomorSertifikat && (
                                                        <span className="font-normal">
                                                            Nomor: {entry.nomorSertifikat}
                                                        </span>
                                                    )}
                                                </h2>
                                            )}
                                        </div>
                                        <div>
                                            {(entry.bulanSertifikasi || entry.tahunSertifikasi) && (
                                                <p className="font-arial shrink-0 text-xs whitespace-nowrap">
                                                    {entry.bulanSertifikasi && (
                                                        <span>{entry.bulanSertifikasi}</span>
                                                    )}{" "}
                                                    {entry.tahunSertifikasi && (
                                                        <span>{entry.tahunSertifikasi}</span>
                                                    )}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </section>
            )}
        </article>
    );
}

export default FormatCV;
