import { useState } from "react";
import Form from "../components/cv/form/Form";
import Preview from "../components/cv/preview/Preview";
import Navbar from "../components/Navbar";

function CreateCV() {
    // CV Data Menyimpan seluruh data CV yang sedang dibuat
    // Set CV Data untuk memperbarui data tersebut
    const [cvData, setCvData] = useState({
        profile: {
            namaLengkap: "",
            telepon: "",
            email: "",
            linkedin: "",
            portofolio: "",
            alamat: "",
        },
        summary: "",
        education: [
            {
                id: 1,
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
        experienceWork: [
            {
                id: 1,
                perusahaan: "",
                posisi: "",
                kotaPerusahaan: "",
                statusKerja: "",
                bulanMulai: "",
                tahunMulai: "",
                bulanSelesai: "",
                tahunSelesai: "",
                isPresent: false,
                deskripsi: [""],
            },
        ],
        skills: {
            softSkills: "",
            hardSkills: [""],
            softwareSkills: "",
        },
        portfolio: [
            {
                id: 1,
                namaProject: "",
                role: "",
                bulanMulai: "",
                tahunMulai: "",
                bulanSelesai: "",
                tahunSelesai: "",
                isPresent: false,
                deskripsi: [""],
                linkProject: "",
            },
        ],
        achievement: [
            {
                id: 1,
                prestasi: "",
                penyelenggaraKegiatan: "",
                bulanPrestasi: "",
                tahunPrestasi: "",
                isPresent: false,
                deskripsi: [""],
            },
        ],
        organization: [
            {
                id: 1,
                namaOrganisasi: "",
                jabatanOrganisasi: "",
                kotaOrganisasi: "",
                bulanMulai: "",
                tahunMulai: "",
                bulanSelesai: "",
                tahunSelesai: "",
                isPresent: false,
                deskripsi: [""],
            },
        ],
        volunteer: [
            {
                id: 1,
                event: "",
                jabatanPanitia: "",
                kotaEvent: "",
                bulanMulai: "",
                tahunMulai: "",
                bulanSelesai: "",
                tahunSelesai: "",
                isPresent: false,
                deskripsi: [""],
            },
        ],
        trainingCourse: [
            {
                id: 1,
                pelatihanKursus: "",
                penyelenggaraTrainingCourse: "",
                bulanMulai: "",
                tahunMulai: "",
                bulanSelesai: "",
                tahunSelesai: "",
                isPresent: false,
                deskripsi: [""],
                certificateTrainingCourse: "",
            },
        ],
        certification: [
            {
                id: 1,
                namaSertifikasi: "",
                penyelenggaraSertifikasi: "",
                nomorSertifikat: "",
                bulanSertifikasi: "",
                tahunSertifikasi: "",
            },
        ],
    });

    const [sectionOrder, setSectionOrder] = useState([
        "summary",
        "education",
        "experienceWork",
        "skills",
        "portfolio",
        "achievement",
        "organization",
        "volunteer",
        "trainingCourse",
        "certification",
    ]);

    return (
        <>
            <Navbar />
            <main className="flex h-[calc(100dvh-72px)] overflow-hidden bg-slate-50">
                <Form
                    cvData={cvData}
                    setCvData={setCvData}
                    sectionOrder={sectionOrder}
                    setSectionOrder={setSectionOrder}
                />
                <Preview cvData={cvData} sectionOrder={sectionOrder} />
            </main>
        </>
    );
}

export default CreateCV;
