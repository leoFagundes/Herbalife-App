import { FiAlertCircle } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center fixed bottom-0 left-0 h-10 p-4 w-screen bg-white-secondary/70 backdrop-blur-sm shadow-card z-40 pointer-events-none">
      <p className="flex items-center gap-1 text-sm italic font-normal">
        <FiAlertCircle className="min-w-8" />
        Este site é uma iniciativa pessoal e não representa a Herbalife
        oficialmente.{" "}
      </p>
    </footer>
  );
}
