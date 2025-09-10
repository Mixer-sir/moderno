import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="container grid gap-8 py-10 md:grid-cols-3">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-sm bg-primary" />
            <span className="text-lg font-bold tracking-wide">MODERNO</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            Ресторан современной кухни. Простой, честный, яркий вкус в чистых формах.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm">
          <div className="space-y-2">
            <div className="font-semibold">Навигация</div>
            <ul className="space-y-1 text-muted-foreground">
              <li>
                <Link className="hover:text-foreground" to="/">Меню</Link>
              </li>
              <li>
                <Link className="hover:text-foreground" to="/about">О нас</Link>
              </li>
              <li>
                <Link className="hover:text-foreground" to="/reserve">Резерв</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <div className="font-semibold">Контакты</div>
            <ul className="space-y-1 text-muted-foreground">
              <li>Ежедневно 10:00–23:00</li>
              <li>ул. Модерна 12, Москва</li>
              <li>+7 (900) 000-00-00</li>
            </ul>
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <div className="font-semibold">Подпишитесь</div>
          <form
            className="flex max-w-sm gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Спасибо! Мы на связи.");
            }}
          >
            <input
              type="email"
              required
              placeholder="Ваш e-mail"
              className="flex-1 rounded-md border border-border bg-background px-3 py-2 outline-none ring-0 focus:border-ring"
            />
            <button
              type="submit"
              className="rounded-md bg-accent px-4 py-2 font-semibold text-accent-foreground"
            >
              Ок
            </button>
          </form>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} MODERNO</p>
        </div>
      </div>
    </footer>
  );
}
