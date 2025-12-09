import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // 1️⃣ Cargar idioma desde localStorage o usar "es" por defecto
  const [lang, setLang] = useState(
    localStorage.getItem("lang") || "es"
  );

  // 2️⃣ Guardar idioma cada vez que cambie
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  // 3️⃣ Toggle idioma
  const toggleLang = () => {
    setLang((prev) => (prev === "es" ? "en" : "es"));
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
