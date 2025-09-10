import { Link } from "react-router-dom";

type Item = { name: string; desc: string; price: string; tag?: string };

const menu: Record<string, Item[]> = {
  Завтраки: [
    { name: "Овсянка с грушей", desc: "миндаль, мёд, лайм", price: "420" },
    { name: "Яичница-скрэмбл", desc: "фермерские яйца, зелень", price: "380" },
    { name: "Сырники", desc: "ванильная сметана, ягодный соус", price: "460" },
  ],
  Закуски: [
    { name: "Тар-тар из лосося", desc: "кунжут, соус юдзу", price: "790" },
    { name: "Хумус из нута", desc: "масло чили, лаваш", price: "520", tag: "vegan" },
    { name: "Бурата", desc: "томаты, базилик, оливковое масло", price: "850" },
  ],
  "Основные блюда": [
    { name: "Цыплёнок с картофелем", desc: "соус демиглас", price: "980" },
    { name: "Паста с белыми грибами", desc: "сливочный соус", price: "940" },
    { name: "Стейк фланк", desc: "соус перечный", price: "1490" },
  ],
  Десерты: [
    { name: "Чизкейк баскский", desc: "солёная карамель", price: "520" },
    { name: "Шоколадный мусс", desc: "флер де сель", price: "480" },
    { name: "Сорбет манго", desc: "мята", price: "390", tag: "vegan" },
  ],
  Напитки: [
    { name: "Матча латте", desc: "овсяное молоко", price: "340" },
    { name: "Эспрессо", desc: "одинарный/двойной", price: "190/240" },
    { name: "Лимонад юдзу", desc: "газированная вода", price: "360" },
  ],
};

function Section({ title, items }: { title: string; items: Item[] }) {
  return (
    <section id={title} className="scroll-mt-24">
      <div className="mb-4 flex items-end justify-between">
        <h3 className="text-2xl font-extrabold tracking-tight">{title}</h3>
      </div>
      <div className="grid gap-3">
        {items.map((i) => (
          <div
            key={i.name}
            className="grid grid-cols-[1fr_auto] items-start gap-3 rounded-xl border border-border bg-card p-4 hover:border-ring"
          >
            <div>
              <div className="flex items-center gap-2">
                <div className="text-base font-semibold">{i.name}</div>
                {i.tag && (
                  <span className="rounded-full bg-secondary px-2 py-0.5 text-xs uppercase tracking-wide text-secondary-foreground">
                    {i.tag}
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{i.desc}</p>
            </div>
            <div className="text-right text-lg font-bold tabular-nums">{i.price} ₽</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Index() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-background to-secondary">
        <div className="container grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs uppercase tracking-wide text-muted-foreground backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-accent" /> Новое меню сезона
            </div>
            <h1 className="mt-4 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
              Современный вкус в чистых формах
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Флэт‑эстетика, яркие акценты и честные продукты. Меню, где каждая деталь
              на своём месте.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#Меню" className="inline-flex items-center rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground">
                Смотреть меню
              </a>
              <Link
                to="/reserve"
                className="inline-flex items-center rounded-md border border-border bg-background px-5 py-3 font-semibold hover:border-ring"
              >
                Забронировать стол
              </Link>
            </div>
          </div>

          {/* Geometric composition */}
          <div className="grid grid-cols-6 grid-rows-6 gap-2">
            <div className="col-span-4 row-span-3 rounded-xl bg-primary" />
            <div className="col-span-2 row-span-3 rounded-xl bg-accent" />
            <div className="col-span-2 row-span-3 rounded-xl bg-secondary" />
            <div className="col-span-4 row-span-3 rounded-xl bg-card" />
          </div>
        </div>
      </section>

      {/* Menu nav */}
      <section id="Меню" className="border-b border-border/60 bg-background/60">
        <div className="container flex flex-wrap items-center gap-2 py-4">
          {Object.keys(menu).map((k) => (
            <a
              key={k}
              href={`#${k}`}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:border-ring"
            >
              {k}
            </a>
          ))}
        </div>
      </section>

      {/* Sections */}
      <section className="container grid gap-10 py-14">
        {Object.entries(menu).map(([t, items]) => (
          <Section key={t} title={t} items={items} />
        ))}
      </section>

      {/* Banner CTA */}
      <section className="border-y border-border/60 bg-accent">
        <div className="container flex flex-col items-center justify-between gap-6 py-10 text-accent-foreground md:flex-row">
          <div className="text-2xl font-extrabold">Сезонный сет‑меню — только в этом месяце</div>
          <Link
            to="/reserve"
            className="inline-flex items-center rounded-md bg-accent-foreground px-5 py-3 font-semibold text-accent hover:opacity-90"
          >
            Забронировать
          </Link>
        </div>
      </section>

      {/* Info */}
      <section className="container grid gap-6 py-14 md:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="text-sm font-semibold text-muted-foreground">Адрес</div>
          <div className="mt-2 text-lg font-semibold">ул. Модерна 12, Москва</div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="text-sm font-semibold text-muted-foreground">Время работы</div>
          <div className="mt-2 text-lg font-semibold">Ежедневно 10:00–23:00</div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="text-sm font-semibold text-muted-foreground">Контакты</div>
          <div className="mt-2 text-lg font-semibold">+7 (900) 000‑00‑00</div>
        </div>
      </section>
    </main>
  );
}
