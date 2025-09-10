import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: route not found:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="container py-20">
      <div className="mx-auto max-w-xl rounded-2xl border border-border bg-card p-10 text-center">
        <h1 className="text-6xl font-extrabold tracking-tight">404</h1>
        <p className="mt-3 text-lg text-muted-foreground">Страница не найдена.</p>
        <a
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground"
        >
          На главную
        </a>
      </div>
    </main>
  );
};

export default NotFound;
