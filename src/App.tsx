import "./App.css";

function App() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center font-sans bg-gradient-to-br from-blue-50 via-white to-neutral-100 text-neutral-900 px-4 sm:px-8">
      <section className="w-full flex flex-col items-center py-16">
        <h1 className="font-extrabold text-5xl sm:text-6xl mb-2 tracking-tight text-blue-800 drop-shadow-md">
          Artur Gräfenstein
        </h1>
        <p className="max-w-xl text-center mb-6 text-lg leading-relaxed text-neutral-700">
          Web- & Mobile-App-Entwickler mit Fokus auf moderne, performante
          Anwendungen mit React & React Native. Leidenschaft für
          minimalistische, nutzerzentrierte Lösungen.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <a
            href="mailto:kontakt@artur-graefenstein.com"
            className="bg-blue-700 text-white px-5 py-2 rounded shadow hover:bg-blue-800 transition font-medium"
          >
            E-Mail
          </a>
          <a
            href="https://github.com/arturgraefenstein"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-900 text-white px-5 py-2 rounded shadow hover:bg-neutral-800 transition font-medium"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/artur-graefenstein"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-5 py-2 rounded shadow hover:bg-blue-700 transition font-medium"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <section className="w-full max-w-3xl bg-white/80 rounded-xl shadow-xl p-8 mb-16 flex flex-col md:flex-row gap-8 items-center">
        <img
          src="https://source.unsplash.com/160x160/?developer,code"
          alt="Profil"
          className="w-40 h-40 rounded-full object-cover shadow-md border-4 border-blue-100"
        />
        <div>
          <h2 className="text-2xl font-bold mb-2 text-blue-700">Über mich</h2>
          <p className="text-neutral-700 mb-2">
            Ich bin ein leidenschaftlicher Entwickler aus Berlin mit über 8
            Jahren Erfahrung in der Entwicklung von Web- und Mobile-Anwendungen.
            Mein Fokus liegt auf modernen Technologien wie React, React Native
            und TypeScript.
          </p>
          <p className="text-neutral-700 mb-2">
            Neben der technischen Umsetzung lege ich großen Wert auf
            nutzerzentriertes Design und Performance. Ich liebe es, komplexe
            Probleme in elegante, minimalistische Lösungen zu verwandeln.
          </p>
          <p className="text-neutral-700">
            In meiner Freizeit beschäftige ich mich mit UI/UX, Open Source und
            neuen Webtechnologien.
          </p>
        </div>
      </section>

      <section
        id="kontakt"
        className="w-full max-w-2xl bg-gradient-to-r from-blue-100 via-white to-blue-50 rounded-xl shadow-lg p-8 mb-16 flex flex-col items-center"
      >
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Kontakt</h2>
        <form className="w-full flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="px-4 py-2 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="email"
            placeholder="E-Mail"
            className="px-4 py-2 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <textarea
            placeholder="Nachricht"
            rows={4}
            className="px-4 py-2 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-2 rounded shadow hover:bg-blue-800 transition font-medium self-end"
          >
            Senden
          </button>
        </form>
        <p className="text-neutral-500 text-sm mt-4">
          Oder direkt per{" "}
          <a
            href="mailto:kontakt@artur-graefenstein.com"
            className="underline text-blue-700"
          >
            E-Mail
          </a>{" "}
          kontaktieren.
        </p>
      </section>

      <footer className="text-sm text-neutral-400 mb-4">
        &copy; {new Date().getFullYear()} Artur Gräfenstein
      </footer>
    </main>
  );
}

export default App;
