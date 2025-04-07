import Image from "next/image";

const FormContact = () => {
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
            <form className="space-y-4 w-full">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <input
                    type="tel"
                    placeholder="+1 (999) 999-9999"
                    className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <textarea
                    placeholder="Please write your question (optional)"
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                ></textarea>
                <button
                    type="submit"
                    className="w-full bg-white text-primary font-semibold py-2 rounded-full hover:bg-white/90 transition"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default FormContact;
