// src/app/page.js
import Home from '../../src/pages/public/Home.jsx';

export default function HomePage() {
    return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900 transition-colors">
        <main className="flex-1">
        {/* Aquí renderizamos tu landing page de psicología */}
        <Home />
        </main>
        </div>
        );
    }
