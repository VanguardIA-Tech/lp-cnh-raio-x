import { ContextSection } from "@/components/home/context-section";
import { CnhCorporateSection } from "@/components/home/cnh-corporate-section";
import { SuccessStoriesSection } from "@/components/home/success-stories-section";
import { DiagnosisSection } from "@/components/home/diagnosis-section";
import { AuthoritySection } from "@/components/home/authority-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";

// Ordem centralizada das seções da home para fácil reordenação ou feature flags.
// Cada componente já inclui sua própria <section> semântica com id e heading.
export const homeSections = [
  { id: "context", Component: ContextSection },
  { id: "cnh", Component: CnhCorporateSection },
  { id: "success", Component: SuccessStoriesSection },
  { id: "diagnosis", Component: DiagnosisSection },
  { id: "authority", Component: AuthoritySection },
  { id: "final", Component: FinalCtaSection },
] as const;

export type HomeSectionId = typeof homeSections[number]["id"];