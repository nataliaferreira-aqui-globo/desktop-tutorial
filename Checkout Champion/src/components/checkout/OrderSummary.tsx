import { useState } from "react";
import { Plus, Check, Tag, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addOns, brl, order } from "@/lib/checkout";

type Props = {
  subtotal: number;
  discount: number;
  total: number;
  coupon: string | null;
  couponError: string | null;
  onApplyCoupon: (code: string) => void;
  onRemoveCoupon: () => void;
  selectedAddOns: string[];
  onToggleAddOn: (id: string) => void;
};

export function OrderSummary({
  subtotal,
  discount,
  total,
  coupon,
  couponError,
  onApplyCoupon,
  onRemoveCoupon,
  selectedAddOns,
  onToggleAddOn,
}: Props) {
  const [openCoupon, setOpenCoupon] = useState(false);
  const [code, setCode] = useState("");

  return (
    <>
      <div className="rounded-2xl border border-border bg-background p-5 sm:p-6 shadow-xs">
        <h2 className="text-base font-bold text-foreground tracking-tight">Resumo do pedido</h2>

        <dl className="mt-4 grid gap-2.5 text-xs sm:text-sm">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3">
            <dt className="min-w-0 text-muted-foreground font-medium">{order.campaign}</dt>
            <dd className="font-semibold text-foreground">{brl(subtotal)}</dd>
          </div>
          {discount > 0 && (
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3 text-success">
              <dt className="min-w-0 font-medium">Desconto</dt>
              <dd className="font-bold">−{brl(discount)}</dd>
            </div>
          )}
        </dl>

        <div className="mt-4 border-t border-border/70 pt-3.5">
          {coupon ? (
            <div className="flex items-center gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-muted/80 px-3 py-1 font-semibold text-xs border border-border">
                <Tag className="size-3 text-brand" aria-hidden /> {coupon}
                <button onClick={onRemoveCoupon} aria-label={`Remover cupom ${coupon}`} className="ml-0.5">
                  <X className="size-3 text-muted-foreground hover:text-foreground" aria-hidden />
                </button>
              </span>
              <span className="text-xs text-success font-semibold">cupom aplicado</span>
            </div>
          ) : (
            <>
              <button
                className="text-xs font-semibold text-brand hover:underline"
                onClick={() => setOpenCoupon((v) => !v)}
              >
                + Adicionar cupom promocional
              </button>
              {openCoupon && (
                <div className="mt-2">
                  <div className="flex gap-2">
                    <Input
                      aria-label="Código do cupom"
                      placeholder="Ex: BZZLD30"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      className="h-9 text-xs"
                    />
                    <Button variant="secondary" size="sm" className="h-9 text-xs px-3 font-semibold" onClick={() => onApplyCoupon(code)}>
                      Aplicar
                    </Button>
                  </div>
                  {couponError && (
                    <p role="alert" className="mt-1.5 text-xs text-destructive">
                      {couponError}
                    </p>
                  )}
                </div>
              )}
            </>
          )}
        </div>

        <div className="mt-5 border-t border-border pt-4">
          <div className="flex items-baseline justify-between gap-3">
            <p className="font-semibold text-sm text-muted-foreground">Total</p>
            <p className="shrink-0 text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">{brl(total)}</p>
          </div>
        </div>

        {/* Bloco abaixo da linha divisória do preço */}
        <div className="mt-4 border-t border-border/80 pt-3.5">
          <p className="text-xs text-muted-foreground font-medium">
            {order.weeks} semanas · {order.startNote}
          </p>
        </div>

        {/* Linha separadora delimitando a informação para não misturar com o upsell */}
        <div className="mt-4 border-t border-border/80 pt-5">
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
            Quer incluir no mesmo pedido?
          </p>
          <ul className="grid gap-2">
            {addOns.map((a) => {
              const on = selectedAddOns.includes(a.id);
              return (
                <li key={a.id}>
                  <button
                    onClick={() => onToggleAddOn(a.id)}
                    aria-pressed={on}
                    className={`grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-xl border p-3 text-left transition-all ${
                      on
                        ? "border-brand bg-accent/60 shadow-xs"
                        : "border-border bg-background hover:bg-muted/40 hover:border-border/80"
                    }`}
                  >
                    <span className="min-w-0 truncate text-xs font-medium text-foreground">{a.title}</span>
                    <span className="flex shrink-0 items-center gap-1.5 text-xs font-bold">
                      {brl(a.price)}
                      {on ? (
                        <Check className="size-4 text-brand" aria-hidden />
                      ) : (
                        <Plus className="size-4 text-muted-foreground" aria-hidden />
                      )}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
