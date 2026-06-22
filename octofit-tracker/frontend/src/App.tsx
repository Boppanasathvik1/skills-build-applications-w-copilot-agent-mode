import { Navigate, Link, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <header className="hero-panel container py-4 py-lg-5">
        <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-4 mb-5">
          <div>
            <p className="eyebrow mb-2">OctoFit Tracker</p>
            <h1 className="display-4 fw-semibold mb-3">
              Track activity, build teams, and climb the leaderboard.
            </h1>
            <p className="lead text-body-secondary mb-0">
              React 19 and Vite power the presentation tier, while the API tier
              sits on port 8000 and MongoDB stays on 27017.
            </p>
          </div>

          <div className="action-stack d-flex flex-wrap gap-3">
            <Link className="btn btn-light btn-lg" to="/dashboard">
              Open dashboard
            </Link>
            <a className="btn btn-outline-light btn-lg" href="http://localhost:8000/api/health">
              Check API
            </a>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </header>
    </div>
  )
}

function Overview() {
  return (
    <div className="row g-4 align-items-stretch">
      <FeatureCard
        title="User profiles"
        body="A single account surface for workouts, progress, and preferences."
      />
      <FeatureCard
        title="Team competition"
        body="Create teams, compare performance, and keep the leaderboard moving."
      />
      <FeatureCard
        title="Personalized plans"
        body="Use activity history and workouts to guide next-best actions."
      />
    </div>
  )
}

function Dashboard() {
  return (
    <div className="dashboard-grid row g-4">
      <section className="col-lg-7">
        <div className="feature-card h-100 p-4 p-lg-5">
          <p className="section-label">Today</p>
          <h2 className="h3 fw-semibold mb-3">Sample operational snapshot</h2>
          <ul className="list-unstyled mb-0 stack-list">
            <li>Workout streak: 6 days</li>
            <li>Teams active: 12</li>
            <li>Leaderboard updates: live</li>
          </ul>
        </div>
      </section>

      <section className="col-lg-5">
        <div className="feature-card h-100 p-4 p-lg-5">
          <p className="section-label">API</p>
          <h2 className="h3 fw-semibold mb-3">Backend ready at port 8000</h2>
          <p className="mb-0 text-body-secondary">
            The API tier is wired for Express, TypeScript, and Mongoose with
            MongoDB at octofit_db.
          </p>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="col-md-4">
      <div className="feature-card h-100 p-4 p-lg-5">
        <p className="section-label">Feature</p>
        <h2 className="h4 fw-semibold mb-3">{title}</h2>
        <p className="mb-0 text-body-secondary">{body}</p>
      </div>
    </div>
  )
}

export default App
