import { Link } from "react-router-dom";
import { useState } from "react";
import DishModal, { Dish } from "@/components/DishModal";
import { motion } from "framer-motion";

type Item = Dish;

const menu: Record<string, Item[]> = {
  Завтраки: [
    { name: "Овсянка с грушей", desc: "миндаль, мёд, лайм", price: "420", image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=1200&auto=format&fit=crop" },
    { name: "Яичница-скрэмбл", desc: "фермерские яйца, зелень", price: "380", image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1200&auto=format&fit=crop" },
    { name: "Сырники", desc: "ванильная сметана, ягодный соус", price: "460", image: "https://images.unsplash.com/photo-1517094421773-0529f29ea451?q=80&w=1200&auto=format&fit=crop" },
  ],
  Закуски: [
    { name: "Тар-тар из лосося", desc: "кунжут, соус юдзу", price: "790", image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop" },
    { name: "Хумус из нута", desc: "масло чили, лаваш", price: "520", tag: "vegan", image: "https://images.unsplash.com/photo-1604908812831-3994bc9b1b48?q=80&w=1200&auto=format&fit=crop" },
    { name: "Бурата", desc: "томаты, базилик, оливковое масло", price: "850", image: "https://images.unsplash.com/photo-1604908554023-59b7ab0d8f3b?q=80&w=1200&auto=format&fit=crop" },
  ],
  "Основные блюда": [
    { name: "Цыплёнок с картофелем", desc: "соус демиглас", price: "980", image: "https://images.unsplash.com/photo-1544025164-5876e0a7a6ec?q=80&w=1200&auto=format&fit=crop" },
    { name: "Паста с белыми грибами", desc: "сливочный соус", price: "940", image: "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?q=80&w=1200&auto=format&fit=crop" },
    { name: "Стейк фланк", desc: "соус перечный", price: "1490", image: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?q=80&w=1200&auto=format&fit=crop" },
  ],
  Десерты: [
    { name: "Чизкейк баскский", desc: "солёная карамель", price: "520", image: "https://images.unsplash.com/photo-1541781286675-4a9b38a163b2?q=80&w=1200&auto=format&fit=crop" },
    { name: "Шоколадный мусс", desc: "флер де сель", price: "480", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476e?q=80&w=1200&auto=format&fit=crop" },
    { name: "Сорбет манго", desc: "мята", price: "390", tag: "vegan", image: "https://images.unsplash.com/photo-1627662236979-8a0d1f2b8f6e?q=80&w=1200&auto=format&fit=crop" },
  ],
  Напитки: [
    { name: "Матча латте", desc: "овсяное молоко", price: "340", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1200&auto=format&fit=crop" },
    { name: "Эспрессо", desc: "одинарный/двойной", price: "190/240", image: "https://images.unsplash.com/photo-1507133750040-4a8f57021548?q=80&w=1200&auto=format&fit=crop" },
    { name: "Лимонад юдзу", desc: "газированная вода", price: "360", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1200&auto=format&fit=crop" },
  ],
};

function Section({ title, items, onSelect }: { title: string; items: Item[]; onSelect: (dish: Item) => void }) {
  return (
    <section id={title} className="scroll-mt-24">
      <div className="mb-4 flex items-end justify-between">
        <h3 className="text-2xl font-extrabold tracking-tight">{title}</h3>
      </div>
      <div className="grid gap-3">
        {items.map((i) => (
          <button
            type="button"
            onClick={() => onSelect(i)}
            key={i.name}
            className="group grid grid-cols-[1fr_auto] items-start gap-3 rounded-xl border border-border bg-card p-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-ring hover:shadow-md"
          >
            <div>
              <div className="flex items-center gap-2">
                <div className="text-base font-semibold group-hover:underline decoration-2 decoration-primary/60 underline-offset-4">{i.name}</div>
                {i.tag && (
                  <span className="rounded-full bg-secondary px-2 py-0.5 text-xs uppercase tracking-wide text-secondary-foreground">
                    {i.tag}
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{i.desc}</p>
            </div>
            <div className="text-right text-lg font-bold tabular-nums">{i.price} ₽</div>
          </button>
        ))}
      </div>
    </section>
  );
}

export default function Index() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Item | null>(null);

  const onSelect = (dish: Item) => {
    setSelected(dish);
    setOpen(true);
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-background to-secondary">
        <div className="container grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          <div>
            <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs uppercase tracking-wide text-muted-foreground backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-accent" /> Новое меню сезона
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }} className="mt-4 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
              Современный вкус в чистых формах
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.12 }} className="mt-5 max-w-xl text-lg text-muted-foreground">
              Флэт‑эстетика, яркие акценты и честные продукты. Меню, где каждая деталь
              на своём месте.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.18 }} className="mt-8 flex flex-wrap gap-3">
              <a href="#Меню" className="inline-flex items-center rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]">
                Смотреть меню
              </a>
              <Link
                to="/reserve"
                className="inline-flex items-center rounded-md border border-border bg-background px-5 py-3 font-semibold transition-all hover:-translate-y-0.5 hover:border-ring"
              >
                Забронировать стол
              </Link>
            </motion.div>
          </div>

          {/* Geometric composition */}
          <div className="grid grid-cols-6 grid-rows-6 gap-2">
            <div className="col-span-4 row-span-3 rounded-xl bg-primary animate-float" />
            <div className="col-span-2 row-span-3 rounded-xl bg-accent animate-float [animation-delay:.2s]" />
            <div className="col-span-2 row-span-3 rounded-xl bg-secondary animate-float [animation-delay:.4s]" />
            <div className="col-span-4 row-span-3 rounded-xl bg-card animate-float [animation-delay:.6s]" />
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
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-ring"
            >
              {k}
            </a>
          ))}
        </div>
      </section>

      {/* Sections */}
      <section className="container grid gap-10 py-14">
        {Object.entries(menu).map(([t, items]) => (
          <Section key={t} title={t} items={items} onSelect={onSelect} />
        ))}
      </section>

      {/* Banner CTA */}
      <section className="border-y border-border/60 bg-accent">
        <div className="container flex flex-col items-center justify-between gap-6 py-10 text-accent-foreground md:flex-row">
          <div className="text-2xl font-extrabold">Сезонный сет‑меню — только в этом месяце</div>
          <Link
            to="/reserve"
            className="inline-flex items-center rounded-md bg-accent-foreground px-5 py-3 font-semibold text-accent transition-transform duration-200 hover:-translate-y-0.5"
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

      <DishModal open={open} onOpenChange={setOpen} dish={selected} />
    </main>
  );
}
