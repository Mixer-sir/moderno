import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { motion } from "framer-motion";

export type Dish = {
  name: string;
  desc: string;
  price: string;
  tag?: string;
  image?: string;
  details?: string;
};

export default function DishModal({ open, onOpenChange, dish }: { open: boolean; onOpenChange: (v: boolean) => void; dish: Dish | null; }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl overflow-hidden p-0">
        {dish && (
          <div className="grid gap-0 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              className="relative aspect-[4/3] overflow-hidden bg-secondary"
            >
              {dish.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={dish.image} alt={dish.name} className="h-full w-full object-cover" />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20" />
              )}
            </motion.div>
            <div className="p-6">
              <DialogHeader>
                <DialogTitle className="text-2xl font-extrabold">{dish.name}</DialogTitle>
                <DialogDescription className="text-base">
                  {dish.desc}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 space-y-3">
                {dish.details && <p className="text-sm text-muted-foreground">{dish.details}</p>}
                {dish.tag && (
                  <span className="inline-flex items-center rounded-full bg-secondary px-2 py-0.5 text-xs uppercase tracking-wide text-secondary-foreground">
                    {dish.tag}
                  </span>
                )}
                <div className="text-2xl font-extrabold">{dish.price} ₽</div>
              </div>
              <div className="mt-6 flex gap-2">
                <button
                  onClick={() => onOpenChange(false)}
                  className="inline-flex items-center rounded-md bg-primary px-4 py-2 font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]"
                >
                  Закрыть
                </button>
                <button
                  className="inline-flex items-center rounded-md border border-border bg-background px-4 py-2 font-semibold transition-colors hover:border-ring"
                  onClick={() => alert("Добавлено в заказ")}
                >
                  Добавить в заказ
                </button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
