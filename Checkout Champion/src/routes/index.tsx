import { createFileRoute } from "@tanstack/react-router";
import { AquiAdsLandingPage } from "@/components/landing/AquiAdsLandingPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aqui ads | Anuncie na Globo e em OOH" },
      {
        name: "description",
        content:
          "Plataforma oficial da Globo para anúncios em OOH (elevadores, ruas, shoppings), TV Globo, Globoplay, portais de notícia e rádios.",
      },
      { property: "og:title", content: "Aqui ads | Anuncie na Globo e em OOH" },
      {
        property: "og:description",
        content:
          "Simule e anuncie na TV Globo, Globoplay e em mais de 86 mil telas de mídia exterior com inteligência e praticidade.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AquiAdsLandingPage,
});
