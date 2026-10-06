import { BOLETO_LINE, brl, order } from "./checkout";

type BoletoData = {
  total: number;
  customerName?: string;
  customerDoc?: string;
};

export function openBoletoPdf({
  total,
  customerName = "GLOBO COMUNICACAO E PARTICIPACOES S/A",
  customerDoc = "27.865.757/0069-92",
}: BoletoData) {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dueDate = tomorrow.toLocaleDateString("pt-BR");

  const html = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <title>Boleto Bancário - Aqui Ads</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }
    body { background-color: #f8fafc; padding: 24px; color: #0f172a; }
    .page { max-width: 760px; margin: 0 auto; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 28px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
    .header { display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #0f172a; padding-bottom: 12px; margin-bottom: 20px; }
    .bank-brand { font-size: 22px; font-weight: 800; color: #ea580c; display: flex; align-items: center; gap: 8px; }
    .bank-code { font-size: 20px; font-weight: 800; border-left: 2px solid #cbd5e1; border-right: 2px solid #cbd5e1; padding: 0 12px; }
    .line { font-family: monospace; font-size: 15px; font-weight: 700; color: #1e293b; }
    .grid { display: grid; grid-template-columns: 2fr 1fr; border: 1px solid #94a3b8; margin-bottom: 16px; }
    .cell { border: 1px solid #cbd5e1; padding: 8px 10px; }
    .cell-title { font-size: 10px; font-weight: 700; text-transform: uppercase; color: #64748b; margin-bottom: 3px; }
    .cell-value { font-size: 13px; font-weight: 600; color: #0f172a; }
    .barcode-area { margin-top: 24px; padding-top: 16px; border-top: 1px dashed #cbd5e1; display: flex; flex-direction: column; align-items: flex-start; }
    .barcode { display: flex; height: 58px; gap: 2px; align-items: stretch; margin-top: 12px; }
    .bar { background-color: #000; }
    .actions { margin-top: 24px; display: flex; gap: 12px; }
    .btn { background: #ea580c; color: white; border: none; padding: 10px 20px; font-weight: 700; border-radius: 6px; cursor: pointer; font-size: 14px; }
    .btn-secondary { background: #e2e8f0; color: #1e293b; }
    @media print {
      body { background: white; padding: 0; }
      .page { box-shadow: none; border: none; padding: 0; }
      .actions { display: none !important; }
    }
  </style>
</head>
<body>
  <div class="page">
    <div class="actions">
      <button class="btn" onclick="window.print()">Imprimir / Salvar em PDF</button>
      <button class="btn btn-secondary" onclick="window.close()">Fechar</button>
    </div>

    <div style="height: 16px;"></div>

    <div class="header">
      <div class="bank-brand">
        <span>Aqui Ads</span>
        <span class="bank-code">341-7</span>
      </div>
      <div class="line">${BOLETO_LINE}</div>
    </div>

    <div class="grid">
      <div class="cell">
        <div class="cell-title">Local de Pagamento</div>
        <div class="cell-value">Pagável em qualquer banco ou via Internet Banking até o vencimento</div>
      </div>
      <div class="cell">
        <div class="cell-title">Data de Vencimento</div>
        <div class="cell-value" style="color: #ea580c; font-size: 14px;">${dueDate}</div>
      </div>
      <div class="cell">
        <div class="cell-title">Beneficiário</div>
        <div class="cell-value">Aqui Ads Tecnologia e Publicidade Ltda — CNPJ 27.865.757/0001-90</div>
      </div>
      <div class="cell">
        <div class="cell-title">Valor do Documento</div>
        <div class="cell-value" style="font-size: 15px;">${brl(total)}</div>
      </div>
      <div class="cell">
        <div class="cell-title">Campanha / Referência</div>
        <div class="cell-value">${order.campaign} (${order.weeks} semanas)</div>
      </div>
      <div class="cell">
        <div class="cell-title">Número do Documento</div>
        <div class="cell-value">BOL-${Math.floor(100000 + Math.random() * 900000)}</div>
      </div>
      <div class="cell" style="grid-column: 1 / -1;">
        <div class="cell-title">Pagador</div>
        <div class="cell-value">${customerName} — CPF/CNPJ: ${customerDoc}</div>
      </div>
      <div class="cell" style="grid-column: 1 / -1;">
        <div class="cell-title">Instruções</div>
        <div class="cell-value" style="font-weight: 500; font-size: 12px; color: #475569;">
          - Não receber após 3 dias do vencimento.<br />
          - A veiculação da campanha inicia após a compensação bancária em até 2 dias úteis.<br />
          - Dúvidas: suporte@aquiads.com.br
        </div>
      </div>
    </div>

    <div class="barcode-area">
      <span style="font-size: 11px; color: #64748b;">Código de Barras</span>
      <div class="barcode">
        ${Array.from({ length: 48 })
          .map((_, i) => `<div class="bar" style="width: ${(i % 3 === 0 ? 3 : i % 2 === 0 ? 2 : 1)}px;"></div>`)
          .join("")}
      </div>
    </div>
  </div>
</body>
</html>
  `;

  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const win = window.open(url, "_blank");
  if (!win) {
    window.location.href = url;
  }
}
