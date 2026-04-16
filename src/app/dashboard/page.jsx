export const metadata = { robots: { index: false, follow: false } };

export default function DashboardPage() {
  return (
    <div className="psi-layout-fullscreen">
      <div className="psi-coming-soon">
        <p className="psi-coming-soon-emoji">📊</p>
        <h1 className="psi-coming-soon-title">Dashboard</h1>
        <p className="psi-coming-soon-desc">Próximamente disponible</p>
      </div>
    </div>
  );
}