function Steps() {
    return (
        <section id="steps" className="mt-50 space-y-15 px-36 scroll-mt-40">
            <div className="justify-items-center">
                <h2 className="font-primary text-primary text-4xl font-semibold tracking-tight">Buat CV anda dalam 3 langkah.</h2>
            </div>
            <div className="grid grid-cols-3 gap-x-6">
                <div className="px-6 py-7 border border-[#E7ECF2] rounded-2xl group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(18,24,29,0.08)]">
                    <div className="bg-blue-50 group-hover:bg-blue-600 transition-colors duration-300 inline-block px-3 py-3 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-600 group-hover:text-white transition-colors duration-300" width="24" height="24" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                fill-rule="evenodd"
                                d="M4.17157 3.17157C3 4.34315 3 6.22876 3 10V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V10C21 6.22876 21 4.34315 19.8284 3.17157C18.6569 2 16.7712 2 13 2H11C7.22876 2 5.34315 2 4.17157 3.17157ZM7.25 8C7.25 7.58579 7.58579 7.25 8 7.25H16C16.4142 7.25 16.75 7.58579 16.75 8C16.75 8.41421 16.4142 8.75 16 8.75H8C7.58579 8.75 7.25 8.41421 7.25 8ZM7.25 12C7.25 11.5858 7.58579 11.25 8 11.25H16C16.4142 11.25 16.75 11.5858 16.75 12C16.75 12.4142 16.4142 12.75 16 12.75H8C7.58579 12.75 7.25 12.4142 7.25 12ZM8 15.25C7.58579 15.25 7.25 15.5858 7.25 16C7.25 16.4142 7.58579 16.75 8 16.75H13C13.4142 16.75 13.75 16.4142 13.75 16C13.75 15.5858 13.4142 15.25 13 15.25H8Z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </div>
                    <h3 className="mt-8 font-primary text-primary text-[17px] font-semibold">Lengkapi Data Anda</h3>
                    <p className="mt-2.5 font-primary text-[#55636B] text-[15px] leading-6.25">Isi informasi pribadi, pendidikan, pengalaman, dan keahlian yang ingin ditampilkan pada CV.</p>
                </div>
                <div className="px-6 py-7 border border-[#E7ECF2] rounded-2xl group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(18,24,29,0.08)]">
                    <div className="bg-blue-50 group-hover:bg-blue-600 transition-colors duration-300 inline-block px-3 py-3 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-600 group-hover:text-white transition-colors duration-300" width="24" height="24" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                fill-rule="evenodd"
                                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </div>
                    <h3 className="mt-8 font-primary text-primary text-[17px] font-semibold">Tinjau Setiap Bagian</h3>
                    <p className="mt-2.5 font-primary text-[#55636B] text-[15px] leading-6.25">Periksa kembali setiap informasi untuk memastikan data yang tercantum sudah lengkap dan sesuai.</p>
                </div>
                <div className="px-6 py-7 border border-[#E7ECF2] rounded-2xl group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(18,24,29,0.08)]">
                    <div className="bg-blue-50 group-hover:bg-blue-600 transition-colors duration-300 inline-block px-3 py-3 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-600 group-hover:text-white transition-colors duration-300" width="24" height="24" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                fill-rule="evenodd"
                                d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12ZM12 6.25C12.4142 6.25 12.75 6.58579 12.75 7V12.1893L14.4697 10.4697C14.7626 10.1768 15.2374 10.1768 15.5303 10.4697C15.8232 10.7626 15.8232 11.2374 15.5303 11.5303L12.5303 14.5303C12.3897 14.671 12.1989 14.75 12 14.75C11.8011 14.75 11.6103 14.671 11.4697 14.5303L8.46967 11.5303C8.17678 11.2374 8.17678 10.7626 8.46967 10.4697C8.76256 10.1768 9.23744 10.1768 9.53033 10.4697L11.25 12.1893V7C11.25 6.58579 11.5858 6.25 12 6.25ZM8 16.25C7.58579 16.25 7.25 16.5858 7.25 17C7.25 17.4142 7.58579 17.75 8 17.75H16C16.4142 17.75 16.75 17.4142 16.75 17C16.75 16.5858 16.4142 16.25 16 16.25H8Z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </div>
                    <h3 className="mt-8 font-primary text-primary text-[17px] font-semibold">Unduh Curriculum Vitae</h3>
                    <p className="mt-2.5 font-primary text-[#55636B] text-[15px] leading-6.25">Setelah data lengkap, unduh CV profesional anda dalam format pdf dan gunakan untuk kebutuhan karier.</p>
                </div>
            </div>
        </section>
    );
}

export default Steps;
