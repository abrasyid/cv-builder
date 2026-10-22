function Summary({ summary, setCvData, dragHandleProps }) {
    const handleChange = (event) => {
        setCvData((prev) => ({
            ...prev,
            summary: event.target.value,
        }));
    };

    return (
        <div id="deskripsi" className="rounded-2xl border border-[#E7ECF2] bg-white p-3">
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
                            Ringkasan
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
                <div className="mt-4 ml-2.75 space-y-2 border-l-2 border-slate-300 py-2 pr-2 pl-4">
                    <label
                        htmlFor="ringkasanDiri"
                        className="font-primary text-primary block text-[13px] font-medium"
                    >
                        Deskripsi
                    </label>
                    <textarea
                        name="ringkasanDiri"
                        id="ringkasanDiri"
                        value={summary}
                        onChange={handleChange}
                        placeholder="Masukkan deskripsi anda.."
                        className="font-primary text-primary placeholder:text-primary/45 h-30 w-full rounded-lg border border-[#E7ECF2] bg-[#FAFBFD] px-3.75 py-2.25 text-sm transition-all duration-200 focus:border-[#0B60EA] focus:ring-3 focus:ring-[#0B60EA]/15 focus:outline-none"
                    ></textarea>
                </div>
            </details>
        </div>
    );
}

export default Summary;
