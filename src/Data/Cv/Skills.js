const DEV = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

export const SKILLS_DATA = [
  {
    category: 'Lenguajes',
    items: [
      { name: 'HTML5',      icon: `${DEV}/html5/html5-original.svg` },
      { name: 'CSS3',       icon: `${DEV}/css3/css3-original.svg` },
      { name: 'JavaScript', icon: `${DEV}/javascript/javascript-original.svg` },
      { name: 'Java',       icon: `${DEV}/java/java-original.svg` },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React',      icon: `${DEV}/react/react-original.svg` },
      { name: 'Next.js',    icon: `${DEV}/nextjs/nextjs-original.svg` },
      { name: 'Tailwind',   icon: `${DEV}/tailwindcss/tailwindcss-original.svg` },
      { name: 'Bootstrap',  icon: `${DEV}/bootstrap/bootstrap-original.svg` },
      { name: 'Vite',       icon: `${DEV}/vitejs/vitejs-original.svg` },
    ],
  },
  {
    category: 'Backend & BBDD',
    items: [
      { name: 'Node.js',    icon: `${DEV}/nodejs/nodejs-original.svg` },
      { name: 'Express',    icon: `${DEV}/express/express-original.svg` },
      { name: 'MongoDB',    icon: `${DEV}/mongodb/mongodb-original.svg` },
    ],
  },
  {
    category: 'Herramientas',
    items: [
      { name: 'Git',        icon: `${DEV}/git/git-original.svg` },
      { name: 'GitHub',     icon: `${DEV}/github/github-original.svg` },
      { name: 'VS Code',    icon: `${DEV}/vscode/vscode-original.svg` },
      { name: 'IntelliJ',   icon: `${DEV}/intellij/intellij-original.svg` },
      { name: 'Vercel',     icon: `${DEV}/vercel/vercel-original.svg` },
      { name: 'Figma',      icon: `${DEV}/figma/figma-original.svg` },
    ],
  },
  {
    category: 'Marketing & SEO',
    items: [
      { name: 'Google Analytics', icon: `${DEV}/google/google-original.svg` },
      { name: 'WordPress',        icon: `${DEV}/wordpress/wordpress-plain.svg` },
      { name: 'Canva',            icon: `${DEV}/canva/canva-original.svg` },
    ],
  },
];
