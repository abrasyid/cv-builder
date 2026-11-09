import { useState } from "react";
import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Feedback() {
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();
        setStatus(null);

        if (!serviceId || !templateId || !publicKey) {
            setStatus({
                type: "error",
                message: "Form feedback belum dikonfigurasi. Silakan coba lagi nanti.",
            });
            return;
        }

        const form = event.currentTarget;
        setIsSending(true);

        try {
            await emailjs.sendForm(serviceId, templateId, form, { publicKey });
            form.reset();
            setStatus({
                type: "success",
                message: "Terima kasih! Feedback anda berhasil dikirim.",
            });
        } catch (error) {
            console.error("EmailJS feedback submission failed:", error);
            setStatus({
                type: "error",
                message: "Feedback gagal dikirim. Silakan coba lagi beberapa saat.",
            });
        } finally {
            setIsSending(false);
        }
    }

    return (
        <section id="feedback" className="mt-60 scroll-mt-30 justify-items-center px-36">
            <h2 className="font-primary text-primary text-4xl font-semibold tracking-tight">
                Sampaikan feedback anda!
            </h2>
            <p className="font-primary mt-6 w-120 text-center text-base leading-7 text-[#55636B]">
                Tulis saran dan masukan ataupun temuan bug untuk membantu meningkatkan penggunaan CV
                Builder.
            </p>
            <form
                onSubmit={handleSubmit}
                className="mt-16 w-190 rounded-3xl border border-[#E7ECF2] px-8 py-8 shadow-[0_8px_24px_rgba(18,24,29,0.08)]"
            >
                <div className="grid grid-cols-2 space-x-5">
                    <div className="space-y-2">
                        <label
                            htmlFor="name"
                            className="font-primary text-primary block text-sm font-medium"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your name"
                            autoComplete="name"
                            maxLength={100}
                            required
                            className="font-primary text-primary placeholder:text-primary/45 w-full rounded-xl border border-[#E7ECF2] bg-[#FAFBFD] px-3.75 py-2.75 transition-all duration-200 focus:border-[#0B60EA] focus:ring-3 focus:ring-[#0B60EA]/15 focus:outline-none"
                        />
                    </div>
                    <div className="space-y-2">
                        <label
                            htmlFor="email"
                            className="font-primary text-primary block text-sm font-medium"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="example@gmail.com"
                            autoComplete="email"
                            maxLength={254}
                            required
                            className="font-primary text-primary placeholder:text-primary/45 w-full rounded-xl border border-[#E7ECF2] bg-[#FAFBFD] px-3.75 py-2.75 transition-all duration-200 focus:border-[#0B60EA] focus:ring-3 focus:ring-[#0B60EA]/15 focus:outline-none"
                        />
                    </div>
                </div>
                <div className="mt-5 space-y-2">
                    <label
                        htmlFor="feedbacks"
                        className="font-primary text-primary block text-sm font-medium"
                    >
                        Feedback
                    </label>
                    <textarea
                        name="feedbacks"
                        id="feedbacks"
                        placeholder="Berikan saran, masukan, ataupun temuan bug.."
                        maxLength={3000}
                        required
                        className="font-primary text-primary placeholder:text-primary/45 h-40 w-full rounded-xl border border-[#E7ECF2] bg-[#FAFBFD] px-3.75 py-2.75 transition-all duration-200 focus:border-[#0B60EA] focus:ring-3 focus:ring-[#0B60EA]/15 focus:outline-none"
                    ></textarea>
                </div>
                {status && (
                    <p
                        role={status.type === "error" ? "alert" : "status"}
                        className={`font-primary mt-2 text-sm ${
                            status.type === "error" ? "text-red-700" : "text-green-700"
                        }`}
                    >
                        {status.message}
                    </p>
                )}
                <button
                    type="submit"
                    disabled={isSending}
                    className="font-primary bg-primary group mt-8 inline-flex cursor-pointer items-center gap-2.5 rounded-lg px-6 py-3 text-base text-white transition-all duration-300 hover:bg-[#292E33] hover:shadow-[0_4px_10px_rgba(18,24,29,0.15)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {isSending ? "Mengirim..." : "Kirim"}
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 512 512"
                        >
                            <path
                                fill="currentColor"
                                d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480v-83.6c0-4 1.5-7.8 4.2-10.8l167.6-182.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8l-88.3-44.2C7.1 311.3.3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4"
                            />
                        </svg>
                    </span>
                </button>
            </form>
        </section>
    );
}

export default Feedback;
