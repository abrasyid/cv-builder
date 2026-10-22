import FormatCV from "../FormatCV";
import { cn } from "../../../utils/cn";
import { useLayoutEffect, useRef, useState } from "react";

function Preview({ cvData, sectionOrder }) {
    // Buka dialog print
    const handlePrint = () => {
        window.print();
    };

    // Memperbarui tinggi preview
    const previewRef = useRef(null);
    const [previewHeight, setPreviewHeight] = useState(0);

    useLayoutEffect(() => {
        const element = previewRef.current;

        if (!element) return;

        const updateHeight = () => {
            setPreviewHeight(element.offsetHeight * 0.8);
        };

        updateHeight();

        const observer = new ResizeObserver(updateHeight);
        observer.observe(element);

        return () => observer.disconnect();
    }, [cvData]);

    return (
        <section
            id="preview"
            className="min-h-0 w-[60%] scrollbar-thin justify-items-center overflow-y-auto py-20"
        >
            {/* Preview */}
            <div className="no-print" style={{ height: previewHeight || undefined }}>
                <div ref={previewRef} className="origin-top scale-[0.8]">
                    <div className="cv-page-guide min-h-[280mm] w-196 rounded-xl border border-[#E7ECF2] bg-white px-8 pt-10 pb-8 shadow-[0_8px_24px_rgba(18,24,29,0.08)]">
                        <FormatCV cvData={cvData} sectionOrder={sectionOrder} />
                    </div>
                </div>
            </div>
            {/* Window Print */}
            <div className="print-area print-only">
                <FormatCV cvData={cvData} sectionOrder={sectionOrder} />
            </div>
            <div className="mt-8 flex space-x-4">
                <button
                    type="button"
                    onClick={handlePrint}
                    className="font-primary bg-primary group inline-flex cursor-pointer items-center gap-2 rounded-3xl px-7 py-3 text-[15px] text-white transition-all duration-300 hover:bg-[#292E33] hover:shadow-[0_4px_10px_rgba(18,24,29,0.15)]"
                >
                    Preview
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M12 19c7.63 0 9.93-6.62 9.95-6.68c.07-.21.07-.43 0-.63c-.02-.07-2.32-6.68-9.95-6.68s-9.93 6.61-9.95 6.67c-.07.21-.07.43 0 .63c.02.07 2.32 6.68 9.95 6.68Zm0-10c1.64 0 3 1.36 3 3s-1.36 3-3 3s-3-1.36-3-3s1.36-3 3-3"
                            />
                        </svg>
                    </span>
                </button>
                <button
                    type="button"
                    onClick={handlePrint}
                    className="font-primary group inline-flex cursor-pointer items-center gap-2 rounded-3xl bg-red-700 px-7 py-3 text-[15px] text-white transition-all duration-300 hover:bg-[#C54C46] hover:shadow-[0_4px_10px_rgba(18,24,29,0.15)]"
                >
                    Unduh PDF
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M12 8.5a1.5 1.5 0 0 0 1.5 1.5H20v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6zm-.001 3.5a1 1 0 0 0-.969.755l-.018.09l-.075.467a5 5 0 0 1-1.795 3.112l-.37.299a1 1 0 0 0 .989 1.71l.442-.17a5 5 0 0 1 3.593 0l.442.17a1 1 0 0 0 .989-1.71l-.37-.3a5 5 0 0 1-1.795-3.11l-.075-.468A1 1 0 0 0 12 12m2-9.956a2 2 0 0 1 1 .542L19.414 7a2 2 0 0 1 .541 1H14z"
                            />
                        </svg>
                    </span>
                </button>
            </div>
        </section>
    );
}

export default Preview;
