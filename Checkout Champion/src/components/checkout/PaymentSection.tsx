import { useEffect, useState } from "react";
import { Barcode, Check, Clock, Copy, CreditCard, FileDown, Plus, Zap } from "lucide-react";
import QRCode from "qrcode";

import { VisaBadge, MastercardBadge, HipercardBadge } from "./CardBrandBadges";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { openBoletoPdf } from "@/lib/boleto-pdf";
import {
  BOLETO_LINE,
  brl,
  maxInstallments,
  methodMeta,
  savedCard,
  type Method,
  type PlanWeeks,
} from "@/lib/checkout";

export type CardErrors = Partial<Record<keyof CardForm, string>>;

export type CardForm = {
  number: string;
  exp: string;
  cvv: string;
  name: string;
  doc: string;
};

type Props = {
  total: number;
  weeks: PlanWeeks;
  method: Method;
  onMethod: (m: Method) => void;
  installments: number;
  onInstallments: (n: number) => void;
  card: CardForm;
  onCard: (c: CardForm) => void;
  errors: CardErrors;
  pix: { code: string; expiresAt: number } | null;
  boletoIssued: boolean;
  useSavedCard: boolean;
  onUseSavedCard: (v: boolean) => void;
  saveCard: boolean;
  onSaveCard: (v: boolean) => void;
  onPayCard: () => void;
  pending: boolean;
  cardFailure: string | null;
  onSwitchToPix: () => void;
  onCopyPix: () => void;
  pixCopied: boolean;
  onCopyBoleto: () => void;
  boletoCopied: boolean;
  activeProfileName?: string;
  activeProfileDoc?: string;
};

const icons: Record<Method, typeof Zap> = {
  pix: Zap,
  card: CreditCard,
  boleto: Barcode,
};

export function PaymentSection({
  total,
  weeks,
  method,
  onMethod,
  installments,
  onInstallments,
  card,
  onCard,
  errors,
  pix,
  useSavedCard,
  onUseSavedCard,
  saveCard,
  onSaveCard,
  onPayCard,
  pending,
  cardFailure,
  onSwitchToPix,
  onCopyPix,
  pixCopied,
  onCopyBoleto,
  boletoCopied,
  activeProfileName,
  activeProfileDoc,
}: Props) {
  const max = maxInstallments(total, weeks);

  return (
    <section
      aria-label="Forma de pagamento"
      className="rounded-2xl border border-border bg-background p-4 sm:p-5 shadow-xs"
    >
      <div className="mb-4">
        <h2 className="text-base font-bold text-foreground tracking-tight">
          Como você quer pagar?
        </h2>
        <p className="mt-0.5 text-xs text-muted-foreground font-medium">
          Escolha uma opção. Dá para mudar antes de confirmar.
        </p>
      </div>

      <div className="grid gap-3">
        {(["pix", "card", "boleto"] as Method[]).map((m) => {
          const Icon = icons[m];
          const selected = method === m;

          return (
            <div
              key={m}
              className={`rounded-2xl transition-all duration-200 overflow-hidden ${
                selected
                  ? "border-2 border-brand ring-2 ring-brand/10 bg-card shadow-xs"
                  : "border border-border bg-background hover:bg-muted/20 hover:border-border/80"
              }`}
            >
              {/* Botão de seleção com ícone obedecendo o border-radius do contêiner (ex: Imagem 4) */}
              <button
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => onMethod(m)}
                className="flex w-full items-center gap-3.5 p-3.5 sm:p-4 text-left transition-colors"
              >
                {/* Ícone com border-radius harmônico equilibrando com os textos (Imagem 4) */}
                <div
                  className={`size-11 sm:size-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    selected ? "bg-slate-900 text-white shadow-xs" : "bg-muted text-muted-foreground"
                  }`}
                >
                  <Icon className="size-5" aria-hidden />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm sm:text-base text-foreground">
                      {methodMeta[m].label}
                    </span>
                    {m === "pix" && (
                      <span
                        className={`${
                          selected ? "hidden sm:inline-flex" : "inline-flex"
                        } rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-600`}
                      >
                        Aprovação na hora
                      </span>
                    )}
                    {m === "card" && max > 1 && (
                      <span
                        className={`${
                          selected ? "hidden sm:inline-flex" : "inline-flex"
                        } rounded-full bg-brand/10 px-2 py-0.5 text-[10px] font-bold text-brand`}
                      >
                        Até {max}x sem juros
                      </span>
                    )}
                  </div>
                  <span className="block text-xs text-muted-foreground truncate mt-0.5">
                    {m === "card" ? "Visa, Mastercard, Hipercard e outros" : methodMeta[m].speed}
                  </span>
                </div>

                {/* Indicador circular de seleção (Imagem 4 e 5) */}
                <div
                  className={`size-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                    selected ? "border-brand bg-background" : "border-muted-foreground/30"
                  }`}
                  aria-hidden
                >
                  {selected && <div className="size-2.5 rounded-full bg-brand" />}
                </div>
              </button>

              {/* Contêiner selecionado circulado pela cor dominante (Imagem 5) */}
              {selected && (
                <div className="border-t border-border/70 p-4 sm:p-5 bg-muted/10">
                  {m === "pix" && (
                    <PixPanel pix={pix} onCopyPix={onCopyPix} pixCopied={pixCopied} />
                  )}
                  {m === "card" && (
                    <CardPanel
                      total={total}
                      max={max}
                      installments={installments}
                      onInstallments={onInstallments}
                      card={card}
                      onCard={onCard}
                      errors={errors}
                      useSavedCard={useSavedCard}
                      onUseSavedCard={onUseSavedCard}
                      saveCard={saveCard}
                      onSaveCard={onSaveCard}
                      onPayCard={onPayCard}
                      pending={pending}
                      cardFailure={cardFailure}
                      onSwitchToPix={onSwitchToPix}
                    />
                  )}
                  {m === "boleto" && (
                    <BoletoPanel
                      total={total}
                      onCopyBoleto={onCopyBoleto}
                      boletoCopied={boletoCopied}
                      activeProfileName={activeProfileName}
                      activeProfileDoc={activeProfileDoc}
                    />
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function BrandRow() {
  return (
    <span
      className="flex items-center gap-1.5"
      aria-label="Bandeiras aceitas: Visa, Mastercard e Hipercard"
    >
      <VisaBadge />
      <MastercardBadge />
      <HipercardBadge />
    </span>
  );
}

function PixPanel({
  pix,
  onCopyPix,
  pixCopied,
}: {
  pix: { code: string; expiresAt: number } | null;
  onCopyPix: () => void;
  pixCopied: boolean;
}) {
  const [left, setLeft] = useState(15 * 60);
  const [qr, setQr] = useState<string | null>(null);

  useEffect(() => {
    if (!pix) return;
    const t = setInterval(
      () => setLeft(Math.max(0, Math.round((pix.expiresAt - Date.now()) / 1000))),
      1000,
    );
    return () => clearInterval(t);
  }, [pix]);

  useEffect(() => {
    if (!pix) return;
    let alive = true;
    QRCode.toDataURL(pix.code, { margin: 0, width: 220 })
      .then((url) => alive && setQr(url))
      .catch(() => undefined);
    return () => {
      alive = false;
    };
  }, [pix]);

  if (!pix) {
    return (
      <div className="grid gap-3">
        <p className="text-sm text-muted-foreground">
          Você recebe um código para colar no app do banco. Prazo: 15 minutos.
        </p>
        <Button
          size="lg"
          className="min-h-11 w-full text-sm font-bold bg-brand hover:bg-brand/90 text-white shadow-sm"
          onClick={onCopyPix}
        >
          <Copy className="mr-2 size-4" />
          Copiar código pix
        </Button>
      </div>
    );
  }

  const mm = String(Math.floor(left / 60)).padStart(2, "0");
  const ss = String(left % 60).padStart(2, "0");

  return (
    <div className="grid gap-3.5">
      <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
        <div className="min-w-0">
          <p className="rounded-xl bg-muted px-3.5 py-3 font-mono text-xs break-all text-muted-foreground select-all border border-border">
            {pix.code}
          </p>
          <p
            className="mt-2.5 flex items-center gap-1.5 text-xs text-muted-foreground font-medium"
            aria-live="polite"
          >
            <Clock className="size-3.5 text-brand" aria-hidden /> expira em {mm}:{ss}
          </p>
        </div>
        {qr && (
          <div className="hidden sm:block">
            <img
              src={qr}
              alt="QR Code do Pix"
              className="size-24 rounded-xl border border-border bg-background p-1.5 shadow-2xs"
            />
            <p className="mt-1 text-center text-[10px] text-muted-foreground">ou escaneie</p>
          </div>
        )}
      </div>

      <Button
        size="lg"
        className="min-h-11 w-full text-sm font-bold bg-brand hover:bg-brand/90 text-white shadow-sm transition-all"
        onClick={onCopyPix}
      >
        {pixCopied ? (
          <>
            <Check className="mr-2 size-4" />
            Código Pix copiado!
          </>
        ) : (
          <>
            <Copy className="mr-2 size-4" />
            Copiar código pix
          </>
        )}
      </Button>
    </div>
  );
}

function InstallmentSelector({
  max,
  installments,
  onInstallments,
  total,
}: {
  max: number;
  installments: number;
  onInstallments: (n: number) => void;
  total: number;
}) {
  if (max <= 1) return null;
  return (
    <div>
      <Label htmlFor="parcelas" className="text-xs font-semibold text-foreground">
        Parcelamento
      </Label>
      <select
        id="parcelas"
        value={installments}
        onChange={(e) => onInstallments(Number(e.target.value))}
        className="mt-1 h-10 w-full rounded-xl border border-border bg-background px-3 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-brand"
      >
        {Array.from({ length: max }, (_, i) => i + 1).map((n) => (
          <option key={n} value={n}>
            {n}x de {brl(total / n)} {n === 1 ? "à vista" : "sem juros"}
          </option>
        ))}
      </select>
    </div>
  );
}

function CardPanel({
  total,
  max,
  installments,
  onInstallments,
  card,
  onCard,
  errors,
  useSavedCard,
  onUseSavedCard,
  saveCard,
  onSaveCard,
  onPayCard,
  pending,
  cardFailure,
  onSwitchToPix,
}: {
  total: number;
  max: number;
  installments: number;
  onInstallments: (n: number) => void;
  card: CardForm;
  onCard: (c: CardForm) => void;
  errors: CardErrors;
  useSavedCard: boolean;
  onUseSavedCard: (v: boolean) => void;
  saveCard: boolean;
  onSaveCard: (v: boolean) => void;
  onPayCard: () => void;
  pending: boolean;
  cardFailure: string | null;
  onSwitchToPix: () => void;
}) {
  const set = (k: keyof CardForm) => (v: string) => onCard({ ...card, [k]: v });

  return (
    <div className="grid gap-3 pt-0.5">
      <div className="flex items-center justify-between pb-0.5">
        <span className="text-xs text-muted-foreground font-medium">Bandeiras aceitas</span>
        <BrandRow />
      </div>

      {useSavedCard ? (
        <div className="grid gap-2.5">
          {/* Card do cartão de crédito salvo com ícone da bandeira (Visa) no extremo esquerdo */}
          <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-xl border-2 border-brand/60 bg-accent/40 p-3 shadow-2xs">
            <div className="flex h-7 w-11 shrink-0 items-center justify-center rounded border border-border/80 bg-background shadow-2xs">
              <VisaBadge />
            </div>
            <div className="min-w-0">
              <span className="block truncate text-xs sm:text-sm font-bold text-foreground">
                {savedCard.brand} •••• {savedCard.last4}
              </span>
              <span className="block text-[11px] text-muted-foreground font-medium">
                Cartão salvo · validade {savedCard.exp}
              </span>
            </div>
            <div className="size-5 rounded-full border-2 border-brand flex items-center justify-center shrink-0">
              <div className="size-2.5 rounded-full bg-brand" />
            </div>
          </div>

          {/* "Usar outro cartão" como botão secundário logo abaixo do card de cartão de crédito salvo */}
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => onUseSavedCard(false)}
            className="h-9 w-full rounded-xl text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/60 border-dashed"
          >
            + Usar outro cartão
          </Button>

          {/* Parcelamento ANTES do CVV */}
          <InstallmentSelector
            max={max}
            installments={installments}
            onInstallments={onInstallments}
            total={total}
          />

          {/* CVV do cartão salvo */}
          <CardField
            id="cc-cvv"
            label="CVV do cartão salvo"
            autoComplete="cc-csc"
            inputMode="numeric"
            placeholder="000"
            value={card.cvv}
            error={errors.cvv ?? undefined}
            onChange={(v) => set("cvv")(v.replace(/\D/g, "").slice(0, 4))}
          />
        </div>
      ) : (
        <div className="grid gap-2.5">
          <div className="flex items-center justify-between pb-0.5">
            <span className="text-xs font-bold text-foreground">Novo cartão de crédito</span>
            <button
              type="button"
              onClick={() => onUseSavedCard(true)}
              className="text-xs font-semibold text-brand hover:underline"
            >
              ← Voltar ao cartão salvo ({savedCard.brand} •••• {savedCard.last4})
            </button>
          </div>

          {/* Parcelamento ANTES do número do cartão */}
          <InstallmentSelector
            max={max}
            installments={installments}
            onInstallments={onInstallments}
            total={total}
          />

          <CardField
            id="cc-number"
            label="Número do cartão"
            autoComplete="cc-number"
            inputMode="numeric"
            placeholder="0000 0000 0000 0000"
            value={card.number}
            error={errors.number ?? undefined}
            onChange={(v) =>
              set("number")(v.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim())
            }
          />
          <div className="grid grid-cols-2 gap-2">
            <CardField
              id="cc-exp"
              label="Validade"
              autoComplete="cc-exp"
              inputMode="numeric"
              placeholder="MM/AA"
              value={card.exp}
              error={errors.exp ?? undefined}
              onChange={(v) => {
                const d = v.replace(/\D/g, "").slice(0, 4);
                set("exp")(d.length > 2 ? `${d.slice(0, 2)}/${d.slice(2)}` : d);
              }}
            />
            <CardField
              id="cc-cvv"
              label="CVV"
              autoComplete="cc-csc"
              inputMode="numeric"
              placeholder="000"
              value={card.cvv}
              error={errors.cvv ?? undefined}
              onChange={(v) => set("cvv")(v.replace(/\D/g, "").slice(0, 4))}
            />
          </div>
          <CardField
            id="cc-name"
            label="Nome no cartão"
            autoComplete="cc-name"
            placeholder="Nome impresso no cartão"
            value={card.name}
            error={errors.name ?? undefined}
            onChange={set("name")}
          />
          <CardField
            id="cc-doc"
            label="CPF/CNPJ do titular"
            inputMode="numeric"
            placeholder="000.000.000-00"
            value={card.doc}
            error={errors.doc ?? undefined}
            onChange={set("doc")}
          />
          <label className="flex items-center gap-2 text-xs text-muted-foreground pt-0.5">
            <Checkbox
              checked={saveCard}
              onCheckedChange={(v) => onSaveCard(v === true)}
              aria-label="Salvar cartão"
            />
            Salvar cartão para as próximas campanhas
          </label>
        </div>
      )}

      {cardFailure && (
        <div role="alert" className="mt-1.5 grid gap-2 rounded-xl bg-destructive/10 p-3 text-xs">
          <p className="font-semibold text-destructive">{cardFailure}</p>
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-full text-xs font-semibold"
            onClick={onSwitchToPix}
          >
            Pagar com Pix
          </Button>
        </div>
      )}

      <Button
        size="lg"
        className="mt-2 min-h-11 w-full text-sm font-bold bg-brand hover:bg-brand/90 text-white shadow-sm transition-all"
        onClick={onPayCard}
        disabled={pending}
      >
        {pending
          ? "Processando…"
          : `Pagar ${installments > 1 ? `${installments}x de ${brl(total / installments)}` : brl(total)}`}
      </Button>
    </div>
  );
}

function CardField({
  id,
  label,
  value,
  onChange,
  error,
  ...rest
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string | undefined;
  placeholder?: string;
  inputMode?: "numeric";
  autoComplete?: string;
}) {
  return (
    <div>
      <Label htmlFor={id} className="text-xs font-semibold text-foreground">
        {label}
      </Label>
      <Input
        id={id}
        {...rest}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-err` : undefined}
        className={`mt-1 h-10 text-xs ${error ? "border-destructive" : ""}`}
      />
      {error && (
        <p id={`${id}-err`} role="alert" className="mt-0.5 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

function BoletoPanel({
  total,
  onCopyBoleto,
  boletoCopied,
  activeProfileName,
  activeProfileDoc,
}: {
  total: number;
  onCopyBoleto: () => void;
  boletoCopied: boolean;
  activeProfileName?: string;
  activeProfileDoc?: string;
}) {
  return (
    <div className="grid gap-3.5">
      <p className="text-xs text-muted-foreground leading-relaxed">
        Vencimento em 1 dia útil após a emissão. A campanha entra em produção após a confirmação
        bancária em até 2 dias úteis.
      </p>

      <div className="rounded-xl bg-muted px-3.5 py-3 font-mono text-xs break-all text-muted-foreground select-all border border-border">
        {BOLETO_LINE}
      </div>

      <div className="grid gap-2.5 sm:grid-cols-2">
        <Button
          size="lg"
          className="min-h-11 w-full text-xs sm:text-sm font-bold bg-brand hover:bg-brand/90 text-white shadow-sm transition-all"
          onClick={() =>
            openBoletoPdf({
              total,
              customerName: activeProfileName,
              customerDoc: activeProfileDoc,
            })
          }
        >
          <FileDown className="mr-2 size-4" />
          Gerar boleto em PDF
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="min-h-11 w-full text-xs font-semibold hover:bg-muted/50"
          onClick={onCopyBoleto}
        >
          {boletoCopied ? (
            <>
              <Check className="mr-2 size-4 text-brand" />
              Código copiado!
            </>
          ) : (
            <>
              <Copy className="mr-2 size-3.5 text-muted-foreground" />
              Copiar código de barras
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
