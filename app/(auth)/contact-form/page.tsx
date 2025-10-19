export const metadata = {
  title: "Contact - Neuro Care Africa",
  description: "We welcome your thoughts",
};

export default function ContactForm() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Talk to Us
            </h1>
            <p className="mt-2 px-30 text-sm text-gray-500">
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
                className="mb-1 block text-sm font-medium text-indigo-200/65"
                htmlFor="fullName"
              >
                Full Names
              </label>
              <input
                id="fullName"
                name="name"
                type="text"
                className="form-input w-full"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label
                className="mb-1 block text-sm font-medium text-indigo-200/65"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-input w-full"
                placeholder="johndoe@email.com"
                required
              />
            </div>

            <div>
              <label
                className="mb-1 block text-sm font-medium text-indigo-200/65"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="form-textarea w-full"
                placeholder="Type here..."
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="btn w-full bg-[#df0a92] py-[5px] px-4 text-white rounded shadow-sm transition duration-200 hover:bg-transparent border border-[#df0a92]"
              >
                <a href="3">Send Message</a>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
