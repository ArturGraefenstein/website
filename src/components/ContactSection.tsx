import React from "react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="w-full flex flex-col items-center py-16 bg-[#292f36] text-white"
    >
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#12f7d6]">
        Kontakt
      </h2>
      <form className="w-full max-w-md flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          className="px-4 py-2 rounded border border-[#12f7d6] bg-[#23272f] text-white focus:outline-none focus:ring-2 focus:ring-[#12f7d6]"
        />
        <input
          type="email"
          placeholder="E-Mail"
          className="px-4 py-2 rounded border border-[#12f7d6] bg-[#23272f] text-white focus:outline-none focus:ring-2 focus:ring-[#12f7d6]"
        />
        <textarea
          placeholder="Nachricht"
          rows={4}
          className="px-4 py-2 rounded border border-[#12f7d6] bg-[#23272f] text-white focus:outline-none focus:ring-2 focus:ring-[#12f7d6]"
        />
        <button
          type="submit"
          className="bg-[#12f7d6] text-[#292f36] px-6 py-2 rounded font-semibold shadow hover:bg-[#0ed7b5] transition self-end"
        >
          Senden
        </button>
      </form>
      <p className="text-neutral-400 text-sm mt-4">
        Oder direkt per{" "}
        <a href="mailto:sinan@email.com" className="underline text-[#12f7d6]">
          E-Mail
        </a>{" "}
        kontaktieren.
      </p>
    </section>
  );
};

export default ContactSection;
