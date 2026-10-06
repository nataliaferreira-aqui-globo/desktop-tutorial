export type PlanWeeks = 2 | 4 | 12 | 24;
export type Method = "pix" | "card" | "boleto";
export type ProfileKind = "pf" | "pj";

export type BillingProfile = {
  kind: ProfileKind;
  name: string;
  doc: string;
  address: string;
  registered: boolean;
  locked?: boolean;
};

export type AddOn = {
  id: string;
  title: string;
  detail: string;
  price: number;
};

export const brl = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export const order = {
  campaign: "Campanha OOH — 12 pontos",
  weeks: 12 as PlanWeeks,
  startNote: "Final previsto: terça-feira, 15/09",
  subtotal: 1797,
};

export const addOns: AddOn[] = [
  {
    id: "prod",
    title: "Criação de arte pelo estúdio",
    detail: "Peça adaptada para todos os formatos do plano",
    price: 290,
  },
];

/** Cupons de exemplo do protótipo */
export const coupons: Record<string, { off: number; label: string }> = {
  BZZLD30: { off: 0.3, label: "Desconto na campanha (30%)" },
  AQUI10: { off: 0.1, label: "Desconto na campanha (10%)" },
};

/** Regras de parcelamento por valor e duração do plano */
export function maxInstallments(total: number, weeks: PlanWeeks) {
  if (weeks === 24) return 6;
  if (weeks === 12) return 3;
  return total >= 2000 ? 3 : 1;
}

export function installmentReason(total: number, weeks: PlanWeeks) {
  if (weeks === 24) return "Campanhas de 24 semanas: até 6x sem juros.";
  if (weeks === 12) return "Campanhas de 12 semanas: até 3x sem juros.";
  return total >= 2000
    ? "Pedidos acima de R$ 2.000 em planos de 2 ou 4 semanas: até 3x sem juros."
    : "Pedidos até R$ 1.999 em planos de 2 ou 4 semanas são à vista.";
}

export const BOLETO_MIN = 1200;

export const BOLETO_LINE = "34191.79001 01043.510047 91020.150008 9 12340000125790";

/** Bandeiras aceitas (Rede) */
export const cardBrands = [
  "Visa",
  "Mastercard",
  "Diners",
  "Discover",
  "Hiper",
  "Hipercard",
  "JCB",
  "Credz",
] as const;

/** Cartão salvo do protótipo */
export const savedCard = {
  brand: "Visa",
  last4: "4242",
  exp: "08/29",
};

export function boletoAvailable(total: number) {
  return total >= BOLETO_MIN;
}

export const methodMeta: Record<
  Method,
  { label: string; speed: string; blurb: string }
> = {
  pix: {
    label: "Pix",
    speed: "Aprovação na hora",
    blurb: "Copie o código e pague em até 15 minutos. A produção começa na sequência.",
  },
  card: {
    label: "Cartão de crédito",
    speed: "Aprovação em até 2h",
    blurb: "Visa, Mastercard, Diners, Discover, Hiper, Hipercard, JCB e Credz.",
  },
  boleto: {
    label: "Boleto bancário",
    speed: "Compensa em até 2 dias úteis",
    blurb:
      "Vencimento em 1 dia útil. A produção começa após a confirmação bancária e o pedido é cancelado se não for pago.",
  },
};

export function luhn(num: string) {
  const digits = num.replace(/\D/g, "");
  if (digits.length < 13) return false;
  let sum = 0;
  let alt = false;
  for (let i = digits.length - 1; i >= 0; i--) {
    let d = Number(digits[i]);
    if (alt) {
      d *= 2;
      if (d > 9) d -= 9;
    }
    sum += d;
    alt = !alt;
  }
  return sum % 10 === 0;
}

export function validateExpiry(value: string) {
  const m = value.match(/^(\d{2})\/(\d{2})$/);
  if (!m) return "Use o formato MM/AA";
  const month = Number(m[1]);
  const year = 2000 + Number(m[2]);
  if (month < 1 || month > 12) return "Mês inválido";
  const now = new Date();
  const end = new Date(year, month, 0, 23, 59, 59);
  if (end < now) return "Cartão vencido — confira a validade";
  return null;
}
