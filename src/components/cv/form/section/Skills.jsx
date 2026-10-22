import BulletTextarea from "../BulletPoint";

function Skills({ cvData, setCvData, dragHandleProps }) {
    const skills = cvData.skills;

    const handleChange = (field, value) => {
        setCvData((prev) => ({
            ...prev,
            skills: {
                ...prev.skills,
                [field]: value,
            },
        }));
    };

    return (
        <div id="skills" className="rounded-2xl border border-[#E7ECF2] bg-white p-3">
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
                            Keahlian
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
                <div className="mt-4 ml-2.75 space-y-4 border-l-2 border-slate-300 py-2 pr-2 pl-4">
                    <div className="space-y-2">
                        <label
                            htmlFor="softSkills"
                            className="font-primary text-primary block text-[13px] font-medium"
                        >
                            Soft Skill
                        </label>
                        <textarea
                            id="softSkills"
                            name="softSkills"
                            value={skills.softSkills}
                            onChange={(event) => handleChange("softSkills", event.target.value)}
                            placeholder="Contoh: Adaptif, Kerjasama Tim"
                            className="font-primary text-primary placeholder:text-primary/45 h-20 w-full rounded-lg border border-[#E7ECF2] bg-[#FAFBFD] px-3.75 py-2.25 text-sm transition-all duration-200 focus:border-[#0B60EA] focus:ring-3 focus:ring-[#0B60EA]/15 focus:outline-none"
                        ></textarea>
                    </div>
                    <div className="space-y-2">
                        <label
                            htmlFor=""
                            className="font-primary text-primary block text-[13px] font-medium"
                        >
                            Hard Skill
                        </label>
                        <BulletTextarea
                            value={skills.hardSkills}
                            onChange={(value) => handleChange("hardSkills", value)}
                            placeholder="Frontend Development: Tailwind CSS, JavaScript, React JS"
                        />
                    </div>
                    <div className="space-y-2">
                        <label
                            htmlFor="softwareSkills"
                            className="font-primary text-primary block text-[13px] font-medium"
                        >
                            Software Skill
                        </label>
                        <textarea
                            id="softwareSkills"
                            name="softwareSkills"
                            value={skills.softwareSkills}
                            onChange={(event) => handleChange("softwareSkills", event.target.value)}
                            placeholder="Contoh: Figma, VS Code, Git Bash"
                            className="font-primary text-primary placeholder:text-primary/45 h-20 w-full rounded-lg border border-[#E7ECF2] bg-[#FAFBFD] px-3.75 py-2.25 text-sm transition-all duration-200 focus:border-[#0B60EA] focus:ring-3 focus:ring-[#0B60EA]/15 focus:outline-none"
                        ></textarea>
                    </div>
                </div>
            </details>
        </div>
    );
}

export default Skills;
