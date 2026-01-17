import { useState } from "react";

type Language = {
  code: string;
  label: string;
};

type Props = {
  onChange?: (lang: string) => void;
};

const LANGUAGES: Language[] = [
  { code: "pt", label: "Português" },
  { code: "de", label: "Deutsch" },
];

export default function LanguageDropdown({ onChange }: Props) {
  const storedLanguage = localStorage.getItem('lang') ||'pt'
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<Language>(
    LANGUAGES.find((lang) => lang.code === storedLanguage) ?? LANGUAGES[0]
  );

  function selectLanguage(lang: Language) {
    setCurrent(lang);
    setOpen(false);
    onChange?.(lang.code);
  }

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 rounded-2xl border px-4 py-2 shadow-sm hover:bg-gray-50 transition"
      >
        <span className="text-sm font-medium">{current.label}</span>
        <span className="text-xs">▼</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 rounded-2xl border bg-white shadow-lg overflow-hidden z-50">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => selectLanguage(lang)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition ${
                current.code === lang.code ? "bg-gray-100 font-medium" : ""
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
