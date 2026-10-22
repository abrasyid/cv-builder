import { useState } from "react";
import { months, years } from "../../../../utils/inputDate";
import BulletTextarea from "../BulletPoint";

function Education({ education, setCvData, dragHandleProps }) {
    const entries = education ?? [];

    const handleChange = (id, field, value) => {
        setCvData((prev) => ({
            ...prev,
            education: prev.education.map((entry) =>
                entry.id === id ? { ...entry, [field]: value } : entry,
            ),
        }));
    };

    const handleAdd = () => {
        setCvData((prev) => {
            const nextId = Math.max(0, ...prev.education.map((entry) => entry.id)) + 1;

            return {
                ...prev,
                education: [
                    ...prev.education,
                    {
                        id: nextId,
                        institusi: "",
                        gelar: "",
                        kotaInstitusi: "",
                        bulanMulai: "",
                        tahunMulai: "",
                        bulanSelesai: "",
                        tahunSelesai: "",
                        isPresent: false,
                        score: "",
                        deskripsi: [""],
                    },
                ],
            };
        });
    };

    const handleRemove = (id) => {
        setCvData((prev) => ({
            ...prev,
            education: prev.education.filter((entry) => entry.id !== id),
        }));
    };

    return (
        <div id="pendidikan" className="rounded-2xl border border-[#E7ECF2] bg-white p-3">
            <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="group flex items-center space-x-4 rounded-lg p-1.25 transition-all duration-200 hover:bg-slate-100">
                    <div {...dragHandleProps} className="cursor-grab active:cursor-grabbing">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            className="text-primary"
                        >
                            <g
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                            >
                                <circle cx="9" cy="12" r="1" />
                                <circle cx="9" cy="5" r="1" />
                                <circle cx="9" cy="19" r="1" />
                                <circle cx="15" cy="12" r="1" />
                                <circle cx="15" cy="5" r="1" />
                                <circle cx="15" cy="19" r="1" />
                            </g>
                        </svg>
                    </div>
                    <div className="flex w-full cursor-pointer justify-between">
                        <h2 className="font-primary text-primary text-base font-semibold">
                            Pendidikan
                        </h2>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            className="text-primary transition-transform duration-300 group-open:-rotate-180"
                        >
                            <path
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m6 9l6 6l6-6"
                            />
                        </svg>
                    </div>
                </summary>

                {entries.map((entry, index) => (
                    <div
                        key={entry.id}
                        className="mt-4 ml-2.75 space-y-4 border-l-2 border-slate-300 py-2 pr-2 pl-4"
                    >
                        <div className="space-y-2">
                            <label
                                htmlFor={`institusi-${entry.id}`}
                                className="font-primary text-primary block text-[13px] font-medium"
                            >
                                Institusi
                            </label>
                            <input
                                type="text"
                                id={`institusi-${entry.id}`}
                                name={`pendidikan[${index}][institusi]`}
                                value={entry.institusi}
                                onChange={(event) =>
                                    handleChange(entry.id, "institusi", event.target.value)
                                }
                                placeholder="Contoh: Universitas Indonesia"
                                className="font-primary text-primary placeholder:text-primary/45 w-full rounded-lg border border-[#E7ECF2] bg-[#FAFBFD] px-3.75 py-2.25 text-sm transition-all duration-200 focus:border-[#0B60EA] focus:ring-3 focus:ring-[#0B60EA]/15 focus:outline-none"
                            />
                        </div>
                        <div className="space-y-2">
                            <label
                                htmlFor={`gelar-${entry.id}`}
                                className="font-primary text-primary block text-[13px] font-medium"
                            >
                                Nama Gelar
                            </label>
                            <input
                                type="text"
                                id={`gelar-${entry.id}`}
                                name={`pendidikan[${index}][gelar]`}
                                value={entry.gelar}
                                onChange={(event) =>
                                    handleChange(entry.id, "gelar", event.target.value)
                                }
                                placeholder="Bachelor of Information System"
                                className="font-primary text-primary placeholder:text-primary/45 w-full rounded-lg border border-[#E7ECF2] bg-[#FAFBFD] px-3.75 py-2.25 text-sm transition-all duration-200 focus:border-[#0B60EA] focus:ring-3 focus:ring-[#0B60EA]/15 focus:outline-none"
                            />
                        </div>
                        <div className="space-y-2">
                            <label
                                htmlFor={`kotaInstitusi-${entry.id}`}
                                className="font-primary text-primary block text-[13px] font-medium"
                            >
                                Kota
                            </label>
                            <input
                                type="text"
                                id={`kotaInstitusi-${entry.id}`}
                                name={`pendidikan[${index}][kotaInstitusi]`}
                                value={entry.kotaInstitusi}
                                onChange={(event) =>
                                    handleChange(entry.id, "kotaInstitusi", event.target.value)
                                }
                                placeholder="Jakarta"
                                className="font-primary text-primary placeholder:text-primary/45 w-full rounded-lg border border-[#E7ECF2] bg-[#FAFBFD] px-3.75 py-2.25 text-sm transition-all duration-200 focus:border-[#0B60EA] focus:ring-3 focus:ring-[#0B60EA]/15 focus:outline-none"
                            />
                        </div>
                        <div className="space-y-2">
                            <label
                                htmlFor={`bulanMulaiPendidikan-${entry.id}`}
                                className="font-primary text-primary block text-[13px] font-medium"
                            >
                                Tanggal
                            </label>
                            <div className="flex-no-wrap flex items-center space-x-1.5">
                                <div className="flex w-[48%] space-x-2">
                                    <select
                                        id={`bulanMulaiPendidikan-${entry.id}`}
                                        name={`pendidikan[${index}][bulanMulai]`}
                                        value={entry.bulanMulai}
                                        onChange={(event) =>
                                            handleChange(entry.id, "bulanMulai", event.target.value)
                                        }
                                        className="font-primary text-primary placeholder:text-primary/45 w-full rounded-lg border border-[#E7ECF2] bg-[#FAFBFD] px-2 py-2.25 text-sm transition-all duration-200 focus:border-[#0B60EA] focus:ring-3 focus:ring-[#0B60EA]/15 focus:outline-none"
                                    >
                                        <option value="">Bulan</option>
                                        {months.map((month) => (
                                            <option key={month} value={month}>
                                                {month}
                                            </option>
                                        ))}
                                    </select>
                                    <select
                                        id={`tahunMulaiPendidikan-${entry.id}`}
                                        name={`pendidikan[${index}][tahunMulai]`}
                                        value={entry.tahunMulai}
                                        onChange={(event) =>
                                            handleChange(entry.id, "tahunMulai", event.target.value)
                                        }
                                        className="font-primary text-primary placeholder:text-primary/45 w-full rounded-lg border border-[#E7ECF2] bg-[#FAFBFD] px-2 py-2.25 text-sm transition-all duration-200 focus:border-[#0B60EA] focus:ring-3 focus:ring-[#0B60EA]/15 focus:outline-none"
                                    >
                                        <option value="">Tahun</option>
                                        {years.map((year) => (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="w-[4%]">
                                    <p className="font-primary text-center text-[13px] font-medium text-slate-400">
                                        to
                                    </p>
                                </div>
                                <div className="flex w-[48%] space-x-2">
                                    <select
                                        id={`bulanSelesaiPendidikan-${entry.id}`}
                                        name={`pendidikan[${index}][bulanSelesai]`}
                                        value={entry.bulanSelesai}
                                        onChange={(event) =>
                                            handleChange(
                                                entry.id,
                                                "bulanSelesai",
                                                event.target.value,
                                            )
                                        }
                                        disabled={entry.isPresent}
                                        className="font-primary text-primary placeholder:text-primary/45 w-full rounded-lg border border-[#E7ECF2] bg-[#FAFBFD] px-2 py-2.25 text-sm transition-all duration-200 focus:border-[#0B60EA] focus:ring-3 focus:ring-[#0B60EA]/15 focus:outline-none disabled:text-gray-400/60"
                                    >
                                        <option value="">Bulan</option>
                                        {months.map((month) => (
                                            <option key={month} value={month}>
                                                {month}
                                            </option>
                                        ))}
                                    </select>
                                    <select
                                        id={`tahunSelesaiPendidikan-${entry.id}`}
                                        name={`pendidikan[${index}][tahunSelesai]`}
                                        value={entry.tahunSelesai}
                                        onChange={(event) =>
                                            handleChange(
                                                entry.id,
                                                "tahunSelesai",
                                                event.target.value,
                                            )
                                        }
                                        disabled={entry.isPresent}
                                        className="font-primary text-primary placeholder:text-primary/45 w-full rounded-lg border border-[#E7ECF2] bg-[#FAFBFD] px-2 py-2.25 text-sm transition-all duration-200 focus:border-[#0B60EA] focus:ring-3 focus:ring-[#0B60EA]/15 focus:outline-none disabled:text-gray-400/60"
                                    >
                                        <option value="">Tahun</option>
                                        {years.map((year) => (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id={`presentPendidikan-${entry.id}`}
                                name={`presentPendidikan-${entry.id}`}
                                checked={entry.isPresent}
                                onChange={(event) =>
                                    handleChange(entry.id, "isPresent", event.target.checked)
                                }
                                className="h-3.5 w-3.5 cursor-pointer"
                            />
                            <label
                                htmlFor={`presentPendidikan-${entry.id}`}
                                className="font-primary cursor-pointer text-[13px] text-gray-500"
                            >
                                Sampai saat ini
                            </label>
                        </div>
                        <div className="space-y-2">
                            <label
                                htmlFor={`score-${entry.id}`}
                                className="font-primary text-primary block text-[13px] font-medium"
                            >
                                Score
                            </label>
                            <input
                                type="text"
                                id={`score-${entry.id}`}
                                name={`pendidikan[${index}][score]`}
                                value={entry.score}
                                onChange={(event) =>
                                    handleChange(entry.id, "score", event.target.value)
                                }
                                placeholder="3.50"
                                className="font-primary text-primary placeholder:text-primary/45 w-full rounded-lg border border-[#E7ECF2] bg-[#FAFBFD] px-3.75 py-2.25 text-sm transition-all duration-200 focus:border-[#0B60EA] focus:ring-3 focus:ring-[#0B60EA]/15 focus:outline-none"
                            />
                        </div>
                        <div className="space-y-2">
                            <label
                                htmlFor=""
                                className="font-primary text-primary block text-[13px] font-medium"
                            >
                                Deskripsi
                            </label>
                            <BulletTextarea
                                value={entry.deskripsi}
                                onChange={(value) => handleChange(entry.id, "deskripsi", value)}
                            />
                        </div>

                        {index > 0 && (
                            <div className="mt-6 flex justify-end">
                                <button
                                    type="button"
                                    onClick={() => handleRemove(entry.id)}
                                    className="font-primary group/add inline-flex cursor-pointer items-center gap-0.75 rounded-lg border border-red-300 bg-red-100 px-3 py-1.5 text-[13px] font-medium tracking-tight text-red-600 transition-all duration-300 hover:border-red-600 hover:bg-red-600 hover:text-white"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        className="text-red-600 transition-colors duration-300 group-hover/add:text-white"
                                    >
                                        <path
                                            fill="currentColor"
                                            fill-rule="evenodd"
                                            d="M8.106 2.553A1 1 0 0 1 9 2h6a1 1 0 0 1 .894.553L17.618 6H20a1 1 0 1 1 0 2h-1v11a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V8H4a1 1 0 0 1 0-2h2.382zM14.382 4l1 2H8.618l1-2zM11 11a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0zm4 0a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                    Hapus Data
                                </button>
                            </div>
                        )}
                    </div>
                ))}
                <div className="mt-5 mb-2 px-2">
                    <button
                        type="button"
                        onClick={handleAdd}
                        className="font-primary group/add inline-flex w-full cursor-pointer items-center justify-center gap-0.75 rounded-lg border border-dashed border-blue-200 bg-white py-2.25 text-[13px] font-medium tracking-tight text-[#0B60EA] transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            className="text-[#0B60EA] transition-colors duration-300 group-hover/add:text-white"
                        >
                            <path
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 12h14m-7-7v14"
                            />
                        </svg>
                        Tambah Data
                    </button>
                </div>
            </details>
        </div>
    );
}

export default Education;
