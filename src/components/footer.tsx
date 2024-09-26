import { FiAlertCircle } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center fixed bottom-0 left-0 h-8 w-screen bg-white-secondary shadow-card">
      <p className="flex items-center gap-1 text-sm italic font-normal">
        <FiAlertCircle />
        Este site é uma iniciativa pessoal e não representa a Herbalife
        oficialmente.{" "}
      </p>
    </footer>
  );
}
