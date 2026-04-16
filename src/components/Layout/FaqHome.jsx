'use client';
import { FAQAccordion } from '@/components/blog/ui/FAQAccordion';

const items = [
  {
    q: '¿Sustituye PsiQFly a las prácticas con pacientes de carne y hueso?',
    a: 'Para nada. Es como un simulador de vuelo para psicólogos: te sirve para entrenar las maniobras difíciles en un entorno seguro antes de despegar con un paciente real.',
  },
  {
    q: '¿Los casos que voy a ver han pasado de verdad?',
    a: 'Son casos inventados pero muy realistas. Se han diseñado con cuidado para que te encuentres con las mismas dudas y retos que verás en una consulta de psicología real.',
  },
  {
    q: 'Acabo de terminar la carrera y me da miedo equivocarme, ¿esto es para mí?',
    a: 'Exactamente para eso nació PsiQFly. Te ayudamos a ganar esa seguridad que solo da la experiencia, pero sin la presión de cometer errores con personas reales.',
  },
  {
    q: '¿Qué voy a aprender exactamente al usar la app?',
    a: 'Aprenderás a conectar los datos que te cuenta el paciente para dar con el diagnóstico correcto, a no dejarte llevar por las primeras impresiones y a usar los cuestionarios de siempre de forma profesional.',
  },
  {
    q: '¿Qué son los avisos que saltan mientras trabajo en un caso?',
    a: 'Son como una voz de la conciencia que te avisa si estás yendo demasiado rápido o si te estás olvidando de algo importante, ayudándote a pensar mejor antes de decidir.',
  },
  {
    q: '¿Voy a poder usar los test típicos de ansiedad y depresión?',
    a: 'Sí, tendrás a mano las herramientas que más se usan en España (como el PHQ-9 o el GAD-7) para que aprendas a elegir cuál toca en cada momento y cómo interpretar los puntos de corte.',
  },
  {
    q: '¿Por qué hay una sección de "autocuidado" si lo que quiero es aprender a diagnosticar?',
    a: 'Porque si tú estás estresado o cansado, es mucho más fácil que te equivoques. Te enseñamos estrategias para estar a tope antes de tomar una decisión importante.',
  },
  {
    q: '¿Cómo sé si lo estoy haciendo bien o mal?',
    a: 'Tienes un panel de control personal donde verás si tus diagnósticos son acertados, cuánto tiempo tardas y si estás aprendiendo a controlar tus propios sesgos.',
  },
  {
    q: '¿Mis datos y mis notas están seguros en la web?',
    a: 'Totalmente. Cumplimos con todas las leyes de privacidad para que tu proceso de aprendizaje sea privado y seguro.',
  },
  {
    q: '¿Necesito que mi profesor me dé permiso para entrar?',
    a: 'PsiQFly funciona muy bien si tu tutor te guía, pero el sistema está pensado para que tú mismo puedas practicar, recibir feedback y mejorar a tu ritmo.',
  },
];

export const FaqHome = () => (
  <section className="max-w-3xl mx-auto px-6 py-16">
    <FAQAccordion title="Preguntas frecuentes" items={items} />
  </section>
);
