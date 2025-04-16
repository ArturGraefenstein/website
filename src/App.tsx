import "./App.css";

function App() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center font-sans bg-white text-neutral-900 px-8">
      <h1 className="font-bold text-5xl mb-2 tracking-tight">
        Artur Gräfenstein
      </h1>
      <p className="max-w-xl text-center mb-10 text-lg leading-relaxed">
        Web- & Mobile-App-Entwickler mit Fokus auf moderne, performante
        Anwendungen mit React & React Native. Leidenschaft für minimalistische,
        nutzerzentrierte Lösungen.
      </p>
      <div className="flex gap-8 mb-10">
        <a
          href="mailto:kontakt@artur-graefenstein.com"
          className="text-blue-700 font-medium hover:underline"
        >
          E-Mail
        </a>
        <a
          href="https://github.com/arturgraefenstein"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/artur-graefenstein"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          LinkedIn
        </a>
      </div>
      <footer className="text-sm text-neutral-400">
        &copy; {new Date().getFullYear()} Artur Gräfenstein
      </footer>
    </main>
  );
}

export default App;
