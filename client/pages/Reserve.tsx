import { useState } from "react";

export default function Reserve() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="container py-14">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-extrabold tracking-tight">Резерв</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Забронируйте стол онлайн. Мы подтвердим заявку по телефону или e‑mail.
        </p>

        {!submitted ? (
          <form
            className="mt-8 grid gap-4 rounded-2xl border border-border bg-card p-6"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div className="grid gap-2">
              <label className="text-sm font-medium">Имя</label>
              <input
                className="rounded-md border border-border bg-background px-3 py-2 outline-none focus:border-ring"
                required
                placeholder="Ваше имя"
              />
            </div>
            <div className="grid gap-2 md:grid-cols-2">
              <div className="grid gap-2">
                <label className="text-sm font-medium">Телефон</label>
                <input
                  type="tel"
                  required
                  className="rounded-md border border-border bg-background px-3 py-2 outline-none focus:border-ring"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">E‑mail</label>
                <input
                  type="email"
                  className="rounded-md border border-border bg-background px-3 py-2 outline-none focus:border-ring"
                  placeholder="name@example.com"
                />
              </div>
            </div>
            <div className="grid gap-2 md:grid-cols-2">
              <div className="grid gap-2">
                <label className="text-sm font-medium">Дата</label>
                <input
                  type="date"
                  required
                  className="rounded-md border border-border bg-background px-3 py-2 outline-none focus:border-ring"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">Время</label>
                <input
                  type="time"
                  required
                  className="rounded-md border border-border bg-background px-3 py-2 outline-none focus:border-ring"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium">Гостей</label>
              <input
                type="number"
                min={1}
                max={12}
                defaultValue={2}
                className="w-32 rounded-md border border-border bg-background px-3 py-2 outline-none focus:border-ring"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium">Комментарий</label>
              <textarea
                rows={3}
                className="rounded-md border border-border bg-background px-3 py-2 outline-none focus:border-ring"
                placeholder="Пожелания, аллергии и т. д."
              />
            </div>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 font-semibold text-primary-foreground"
            >
              Отправить заявку
            </button>
          </form>
        ) : (
          <div className="mt-8 rounded-2xl border border-border bg-card p-6">
            <div className="text-xl font-semibold">Спасибо!</div>
            <p className="mt-2 text-muted-foreground">
              Мы получили вашу заявку и свяжемся в ближайшее время.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
