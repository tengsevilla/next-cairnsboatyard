"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { toast } from "react-hot-toast";;
import emailjs from "emailjs-com";

// Define your schema using Zod
const FormSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(7, "Phone number is required"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

// Infer the type from the schema
type FormData = z.infer<typeof FormSchema>;

const FormContact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(FormSchema),
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);

        try {
            await handleSendEmail(data);
            console.log("Successfully sent:", data);

            toast.success("Message sent successfully! 🚀");
            reset();
        } catch {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleSendEmail = async (formData: FormData) => {
        try {
            // Send it via EmailJS
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '',           // Replace with your EmailJS Service ID
                process.env.NEXT_PUBLIC_EMAILJS_USER_TEMPLATE_ID ?? '',     // Replace with your EmailJS Template ID
                {
                    email: formData.email,                      // 👈 the email of the person you are sending to
                    user_name: formData.name,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_USER_ID ?? ''        // Replace with your EmailJS public user ID
            );

            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '',           // Replace with your EmailJS Service ID
                process.env.NEXT_PUBLIC_EMAILJS_CLIENT_TEMPLATE_ID ?? '',     // Replace with your EmailJS Template ID
                {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_USER_ID ?? ''        // Replace with your EmailJS public user ID
            );

        } catch(error) {
            console.error('Error sending email', error);
        }
    };

    return (
        <div className="max-w-5xl mx-auto bg-primary text-white rounded-xl p-8 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Left: Heading & Contact Person */}
            <div>
                <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
                <p className="text-white/90 mb-6">
                    Whether you’d like to schedule a tour or bounce a question off us,
                    we’re here to help
                </p>

                <div className="flex flex-col items-start">
                    <Image
                        src="https://picsum.photos/320/380" // Replace with your image
                        alt="Monica"
                        width={100}
                        height={100}
                        className="rounded-lg object-cover mb-3"
                    />
                    <p className="font-semibold">John Doe</p>
                    <p className="text-white/70 text-sm">Boat Specialist</p>
                </div>
            </div>

            {/* Right: Form Fields */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
                <div>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                        {...register("name")}
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                        {...register("email")}
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                    <input
                        type="tel"
                        placeholder="+1 (999) 999-9999"
                        className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                        {...register("phone")}
                    />
                    {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>}
                </div>

                <div>
                    <textarea
                        placeholder="Please write your question"
                        rows={4}
                        className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                        {...register("message")}
                    ></textarea>
                    {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
                </div>

                <button
                    type="submit"
                    className="w-full bg-white text-primary font-semibold py-2 rounded-full hover:bg-white/90 transition"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Sending..." : "Send"}
                </button>
            </form>
        </div>
    );
};

export default FormContact;
