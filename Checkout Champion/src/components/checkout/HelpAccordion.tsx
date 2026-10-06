import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    id: "prazos",
    q: "Prazos de cada forma de pagamento",
    a: [
      "Pix: confirmação na hora, código válido por 15 minutos.",
      "Cartão: aprovação em até 2 horas.",
      "Boleto: vence em 1 dia útil e compensa em até 2 dias úteis.",
    ],
  },
  {
    id: "parcelas",
    q: "Regras de parcelamento",
    a: [
      "Até R$ 1.999 em planos de 2 ou 4 semanas: à vista.",
      "Acima de R$ 2.000 em 2 ou 4 semanas: até 3x sem juros.",
      "Planos de 12 semanas: até 3x sem juros. 24 semanas: até 6x sem juros.",
      "Visa, Mastercard, Diners, Discover, Hiper, Hipercard, JCB e Credz.",
    ],
  },
  {
    id: "veiculacao",
    q: "Quando a campanha começa",
    a: [
      "Mídia estática de rua entra sempre às terças-feiras, sujeito a disponibilidade e após o pagamento.",
      "Após arte aprovada, 48 horas no formato digital para começar.",
      "Telas em transporte, elevadores, lojas e shoppings entram em qualquer dia.",
      "Todo plano passa por aprovação da Aqui Ads e dos parceiros.",
    ],
  },
  {
    id: "cupom",
    q: "Cupons",
    a: ["O cupom é aplicado aqui, antes de gerar o pagamento. Depois disso é preciso criar um novo plano."],
  },
];

export function HelpAccordion() {
  return (
    <section id="ajuda" aria-label="Dúvidas frequentes" className="rounded-2xl border border-border bg-background px-4">
      <Accordion type="single" collapsible>
        {items.map((it) => (
          <AccordionItem key={it.id} value={it.id} className="last:border-b-0">
            <AccordionTrigger className="py-3 text-sm font-semibold">{it.q}</AccordionTrigger>
            <AccordionContent>
              <ul className="grid gap-1.5 text-sm text-muted-foreground">
                {it.a.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span aria-hidden className="text-brand">
                      •
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
