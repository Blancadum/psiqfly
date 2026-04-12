import masterImg from '@/assets/images/certificates/master-infantojuvenil.webp';
import gradoPsicologiaImg from '@/assets/images/certificates/grado-psicologia.webp';
import gradoPrimariaImg from '@/assets/images/certificates/grado-primaria.webp';
import ironhackImg from '@/assets/images/certificates/diploma-ironhack.webp';
import iaEmpresaImg from '@/assets/images/certificates/ia-empresa.webp';
import inglesImg from '@/assets/images/certificates/ingles-b2.jpg';

export const EDUCATION_DATA = [
  {
    year: '2026',
    title: 'Máster en Psicología Clínica y de la Salud',
    institution: 'ISEP',
    note: 'TFM: PsiQFly® — Tesis clínica publicada',
    link: 'https://www.isep.es/tesina/psiqfly-recurso-didactico-pwa-razonamiento-diagnostico-mitigacion-sesgos-autocuidado-psicologos-noveles/',
    skills: [
      { icon: '🧩', label: 'Razonamiento Diagnóstico', desc: 'Evaluación psicopatológica y criterios DSM-5-TR.' },
      { icon: '🪞', label: 'Mitigación de Sesgos', desc: 'Estrategias de debiasing aplicadas a la práctica clínica.' },
      { icon: '🤝', label: 'Alianza Terapéutica', desc: 'Gestión de la relación y comunicación empática.' },
      { icon: '📊', label: 'Investigación Aplicada', desc: 'Diseño de PsiQFly®, publicado como recurso académico.' },
    ],
  },
  {
    year: '2020',
    title: 'Máster en Psicología Infantojuvenil',
    institution: 'Centro universitario / oficial',
    image: masterImg,
    skills: [
      { icon: '👶', label: 'Psicología Infantojuvenil', desc: 'Evaluación y tratamiento psicológico en población menor de edad.' },
      { icon: '👨‍👩‍👧', label: 'Intervención Familiar', desc: 'Trabajo con el sistema familiar como contexto terapéutico.' },
      { icon: '🏫', label: 'Contexto Escolar', desc: 'Coordinación con centros educativos y equipos psicopedagógicos.' },
    ],
  },
  {
    year: '2019',
    title: 'Grado en Psicología',
    institution: 'UOC',
    image: gradoPsicologiaImg,
    skills: [
      { icon: '🧠', label: 'Psicología Clínica', desc: 'Psicopatología, evaluación y diagnóstico diferencial.' },
      { icon: '👶', label: 'Psicología Infantojuvenil', desc: 'Desarrollo evolutivo y atención psicológica a menores.' },
      { icon: '📋', label: 'Evaluación Psicológica', desc: 'Administración e interpretación de pruebas validadas.' },
      { icon: '🔬', label: 'Metodología de Investigación', desc: 'Diseño de estudios, análisis estadístico y escritura científica.' },
    ],
  },
  {
    year: '2017',
    title: 'Grado en Ciencias de la Educación',
    institution: 'UB',
    image: gradoPrimariaImg,
    skills: [
      { icon: '📚', label: 'Didáctica General', desc: 'Diseño de situaciones de aprendizaje y evaluación educativa.' },
      { icon: '🏫', label: 'Psicología del Desarrollo', desc: 'Estadios evolutivos, aprendizaje significativo y motivación.' },
      { icon: '🤝', label: 'Atención a la Diversidad', desc: 'Inclusión, adaptaciones curriculares y necesidades específicas.' },
      { icon: '🎯', label: 'Orientación Educativa', desc: 'Acompañamiento, tutoría y desarrollo personal del alumnado.' },
    ],
  },
  {
    year: '2023',
    title: 'Full Stack Developer Bootcamp',
    institution: 'Ironhack',
    image: ironhackImg,
    pdf: ironhackImg,
    skills: [
      { icon: '⚛️', label: 'React & Next.js', desc: 'Desarrollo de interfaces modernas y aplicaciones web.' },
      { icon: '🗄️', label: 'Node.js & Bases de datos', desc: 'Backend, APIs REST y gestión de datos.' },
      { icon: '🎨', label: 'UI/UX', desc: 'Diseño centrado en el usuario y experiencia digital.' },
      { icon: '🚀', label: 'Despliegue', desc: 'CI/CD, Vercel y gestión de entornos productivos.' },
    ],
  },
  {
    year: '2024',
    title: 'IA Aplicada a la Empresa',
    institution: 'Certificación oficial',
    image: iaEmpresaImg,
    skills: [
      { icon: '🤖', label: 'IA Generativa', desc: 'Aplicación de modelos de lenguaje en contextos profesionales.' },
      { icon: '📈', label: 'Automatización', desc: 'Optimización de procesos con herramientas de IA.' },
    ],
  },
  {
    year: '2022',
    title: 'Certificado de Inglés B2',
    institution: 'Cambridge / Oficial',
    image: inglesImg,
    skills: [
      { icon: '🌍', label: 'Inglés B2', desc: 'Comprensión y producción escrita y oral en contextos académicos.' },
    ],
  },
];