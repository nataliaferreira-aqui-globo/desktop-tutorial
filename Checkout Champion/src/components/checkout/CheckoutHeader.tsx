import { ArrowLeft, Check, Menu } from "lucide-react";

export function CheckoutHeader() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto max-w-5xl px-4 py-2.5 sm:px-6">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <img
            src="/logo.png"
            alt="Aqui Ads"
            className="h-7 w-auto object-contain sm:h-8"
          />
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg px-2.5 py-1 text-xs font-semibold text-foreground transition-colors hover:bg-muted"
          >
            <span>entrar</span>
            <Menu className="size-4 text-foreground" aria-hidden />
          </button>
        </div>

        <nav
          aria-label="Progresso do checkout"
          className="mt-2 flex items-center justify-between gap-3"
        >
          <ol className="flex min-w-0 items-center gap-2 text-xs">
            <li className="flex items-center gap-1.5 font-semibold text-success">
              <Check className="size-3.5" aria-hidden />
              <span className="hidden sm:inline">Plano de mídia</span>
            </li>
            <li aria-hidden className="h-px w-6 bg-border" />
            <li aria-current="step" className="flex items-center gap-1.5 font-bold text-brand">
              <span className="grid size-4 place-items-center rounded-full bg-brand text-[10px] font-bold text-primary-foreground">
                2
              </span>
              Pagamento
            </li>
          </ol>
          <a
            href="#planos"
            className="flex shrink-0 items-center gap-1 text-xs font-semibold text-muted-foreground underline"
          >
            <ArrowLeft className="size-3.5" aria-hidden /> Voltar ao plano
          </a>
        </nav>
      </div>
    </header>
  );
}
