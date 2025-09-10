export default function About() {
  return (
    <main className="container py-14">
      <section className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight">О нас</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          MODERNO — это уважение к продукту и форме. Мы соединяем локальные
          ингредиенты и современные техники, чтобы вкус оставался в центре
          внимания. Минимализм в подаче, максимум в аромате.
        </p>
        <div className="mt-10 grid gap-6 rounded-2xl border border-border bg-card p-6 md:grid-cols-2">
          <div>
            <div className="text-sm font-semibold text-muted-foreground">Подход</div>
            <p className="mt-2">
              Просто��а без упрощений. Мы выбираем чистые сочетания, четкие акценты и
              понятные композиции — как в дизайне, так и на тарелке.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold text-muted-foreground">Пространство</div>
            <p className="mt-2">
              Свет, геометрия и теплые оттенки. Интерьер в стиле флэт с отсылками к
              модернизму задает настроение для вечера.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
