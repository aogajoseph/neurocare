export const metadata = {
  title: "Contact Us - Neuro Care Foundation",
  description: "We welcome your thoughts",
};

export default function ContactForm() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-900),var(--color-indigo-900),var(--color-gray-900),var(--color-indigo-900),var(--color-gray-900))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Talk to Us
            </h1>
            <p className="mt-2 px-30 text-sm text-gray-800">
              We welcome your thoughts, suggestions, feedback or anything else you'd like to share with us.
            </p>
          </div>

          {/* Contact form */}
          <form
            action="https://formspree.io/f/mwpojode"
            method="POST"
            className="mx-auto max-w-[500px] space-y-5"
          >

            <div>
              <label
                className="mb-1 block text-sm font-medium text-gray-800"
                htmlFor="fullName"
              >
                Full Names:
              </label>
              <input
                id="fullName"
                name="name"
                type="text"
                className="form-input w-full text-white caret-white border border-[#aa2078] placeholder-[#ececec] placeholder:font-normal placeholder:italic"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label
                className="mb-1 block text-sm font-medium text-gray-800"
                htmlFor="email"
              >
                Email:
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-input w-full text-white caret-white border border-[#aa2078] placeholder-[#ececec] placeholder:font-normal placeholder:italic"
                placeholder="johndoe@email.com"
                required
              />
            </div>

            <div>
              <label
                className="mb-1 block text-sm font-medium text-gray-800"
                htmlFor="message"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="form-input w-full text-white caret-white border border-[#aa2078] placeholder-[#ececec] placeholder:font-normal placeholder:italic"
                placeholder="Type here..."
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="bt w-full bg-[#df0a92] py-[5px] px-4 text-white rounded shadow-sm transition duration-200 hover:bg-transparent hover:text-black border border-[#df0a92]"
              >
                <a href="3">Submit</a>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
