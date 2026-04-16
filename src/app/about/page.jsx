import { AboutOrigen } from '@/components/Layout/AboutPsiqfly/AboutOrigen';
import { HowTo } from '@/components/Layout/AboutPsiqfly/HowTo';
import { CtaFinal } from '@/components/Layout/AboutPsiqfly/CTAFinal';
import { FeaturesGrid } from '@/components/Layout/FeaturesGrid';

export const metadata = {
  title: 'Sobre PsiQFly | PsiQFly',
  description: 'Recurso didáctico para el entrenamiento del razonamiento clínico y debiasing.',
};

export default function AboutPage() {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <h1 className="text-3xl font-extrabold text-slate-800">Sobre <span className="bg-gradient-to-r from-[#634AE6] to-[#E245B6] bg-clip-text text-transparent">PsiQFly</span></h1>
      </div>
      <AboutOrigen />
      <FeaturesGrid />
      <HowTo />
      <CtaFinal />
    </div>
  );
}
