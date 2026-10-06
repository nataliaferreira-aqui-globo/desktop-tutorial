import { useState } from "react";
import { Check, Lock, Pencil, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { BillingProfile, ProfileKind } from "@/lib/checkout";

type Props = {
  profiles: Record<ProfileKind, BillingProfile>;
  active: ProfileKind;
  onChangeActive: (k: ProfileKind) => void;
  onRegister: (k: ProfileKind, data: Partial<BillingProfile>) => void;
};

export function BillingSection({ profiles, active, onChangeActive, onRegister }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const current = profiles[active];
  const locked = active === "pj" && profiles.pj.locked === true;

  const [form, setForm] = useState({
    name: current.name,
    doc: current.doc,
    phone: "",
    address: current.address,
  });

  const handleStartEditing = () => {
    setForm({
      name: current.name,
      doc: current.doc,
      phone: "",
      address: current.address,
    });
    setIsEditing(true);
  };

  const handleSave = () => {
    onRegister(active, {
      name: form.name.trim() || current.name,
      doc: form.doc.trim() || current.doc,
      address: form.address.trim() || current.address,
      registered: true,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <section aria-label="Dados de faturamento" className="rounded-2xl border border-border bg-background p-4">
      <h2 className="text-sm font-bold">Dados de faturamento</h2>

      <div
        role="tablist"
        aria-label="Tipo de perfil"
        className="mt-2.5 grid grid-cols-2 gap-1 rounded-xl bg-muted p-1"
      >
        {(["pf", "pj"] as ProfileKind[]).map((k) => (
          <button
            key={k}
            role="tab"
            aria-selected={active === k}
            onClick={() => {
              onChangeActive(k);
              setIsEditing(false);
            }}
            className={`min-h-10 rounded-lg text-xs font-semibold transition-colors ${
              active === k ? "bg-background shadow-sm" : "text-muted-foreground"
            }`}
          >
            {k === "pf" ? "Pessoa física" : "Pessoa jurídica"}
          </button>
        ))}
      </div>

      <div className="mt-2.5 rounded-xl border border-border p-3">
        {isEditing && active === "pf" ? (
          /* Formulário inline aberto diretamente na página (sem modal) */
          <div className="grid gap-2.5 animate-in fade-in-50 duration-200">
            <div className="flex items-center justify-between pb-1 border-b border-border">
              <span className="text-xs font-bold text-foreground">
                Editar dados de pessoa física
              </span>
              <button
                type="button"
                onClick={handleCancel}
                className="text-muted-foreground hover:text-foreground p-0.5"
                aria-label="Cancelar edição"
              >
                <X className="size-3.5" />
              </button>
            </div>

            <Field
              id="reg-name"
              label="Nome completo"
              value={form.name}
              placeholder="Digite o nome completo"
              onChange={(v) => setForm({ ...form, name: v })}
            />
            <Field
              id="reg-doc"
              label="CPF"
              value={form.doc}
              placeholder="000.000.000-00"
              onChange={(v) => setForm({ ...form, doc: v })}
            />
            <Field
              id="reg-phone"
              label="Telefone celular (WhatsApp)"
              value={form.phone}
              placeholder="(00) 00000-0000"
              onChange={(v) => setForm({ ...form, phone: v })}
            />
            <Field
              id="reg-address"
              label="Endereço de faturamento"
              value={form.address}
              placeholder="Rua, número, bairro, cidade, UF"
              onChange={(v) => setForm({ ...form, address: v })}
            />

            <div className="mt-1 flex items-center gap-2">
              <Button
                type="button"
                size="sm"
                className="h-9 flex-1 text-xs font-semibold"
                onClick={handleSave}
              >
                <Check className="size-3.5 mr-1" /> Salvar alterações
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="h-9 px-3 text-xs"
                onClick={handleCancel}
              >
                Cancelar
              </Button>
            </div>
          </div>
        ) : (
          /* Visualização padrão dos dados */
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2.5">
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">{current.name}</p>
              <p className="truncate text-xs text-muted-foreground">{current.doc}</p>
              <p className="mt-0.5 truncate text-xs text-muted-foreground">{current.address}</p>
            </div>
            {locked ? (
              <TooltipProvider delayDuration={150}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span
                      tabIndex={0}
                      className="flex shrink-0 cursor-help items-center gap-1 rounded-full border border-border px-2 py-0.5 text-[11px] font-semibold text-muted-foreground"
                    >
                      <Lock className="size-3" aria-hidden /> fixo
                    </span>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-56 text-xs">
                    Perfil de pessoa jurídica já cadastrado. Para alterar razão social, CNPJ ou
                    endereço, fale com o time.
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                className="shrink-0 h-8 px-2 text-xs text-brand hover:text-brand/80"
                aria-label="Editar dados de faturamento"
                onClick={handleStartEditing}
              >
                <Pencil className="size-3 mr-1" aria-hidden /> Editar
              </Button>
            )}
          </div>
        )}

        {locked && (
          <p className="mt-2 border-t border-border pt-2 text-[11px] text-muted-foreground">
            Perfil PJ já cadastrado.{" "}
            <a href="#ajuda" className="font-semibold text-brand underline">
              Falar com o time
            </a>
          </p>
        )}
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  placeholder,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  placeholder?: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <Label htmlFor={id} className="text-[11px] font-semibold text-muted-foreground">
        {label}
      </Label>
      <Input
        id={id}
        className="mt-0.5 h-9 text-xs"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
