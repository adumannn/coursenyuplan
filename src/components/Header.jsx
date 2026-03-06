import { useState } from 'react';
import { MAJORS, AVAILABLE_MINORS, GRADUATION_CREDITS } from '../data/courses';

export default function Header({
  major,
  setMajor,
  selectedMinors,
  addMinor,
  removeMinor,
  studentName,
  setStudentName,
  totalCredits,
  onClearAll,
  theme,
  toggleTheme,
}) {
  const [minorDropdownOpen, setMinorDropdownOpen] = useState(false);
  const availableToAdd = AVAILABLE_MINORS.filter(
    (m) => !selectedMinors.includes(m.id),
  );

  return (
    <header className="header">
      <div className="header-left">
        <div className="header-brand">
          <div className="header-logo">CP</div>
          <div>
            <h1 className="header-title">Course Planner</h1>
            <p className="header-subtitle">NYU Shanghai — 4 Years</p>
          </div>
        </div>
      </div>

      <div className="header-center">
        <div className="credit-overview">
          <div className="credit-ring">
            <span className="credit-ring-number">{totalCredits}</span>
            <span className="credit-ring-label">/ {GRADUATION_CREDITS}</span>
          </div>
          <span className="credit-overview-label">Total Credits</span>
        </div>
      </div>

      <div className="header-right">
        <div className="header-field">
          <label htmlFor="student-name">Name</label>
          <input
            id="student-name"
            type="text"
            placeholder="Your name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />
        </div>
        <div className="header-field">
          <label htmlFor="major-select">Major</label>
          <select
            id="major-select"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
          >
            {MAJORS.map((m) => (
              <option key={m.id} value={m.id}>
                {m.label}
              </option>
            ))}
          </select>
        </div>
        <div className="header-field minor-field">
          <label>Minor</label>
          <div className="minor-picker">
            {selectedMinors.map((minorId) => {
              const minor = AVAILABLE_MINORS.find((m) => m.id === minorId);
              return (
                <span key={minorId} className="minor-chip">
                  {minor?.label || minorId}
                  <button
                    className="minor-chip-remove"
                    onClick={() => removeMinor(minorId)}
                    aria-label={`Remove ${minor?.label || minorId} minor`}
                  >
                    ×
                  </button>
                </span>
              );
            })}
            {availableToAdd.length > 0 && (
              <div className="minor-add-wrapper">
                <button
                  className="minor-add-btn"
                  onClick={() => setMinorDropdownOpen((o) => !o)}
                  aria-label="Add minor"
                >
                  +
                </button>
                {minorDropdownOpen && (
                  <div className="minor-dropdown">
                    {availableToAdd.map((m) => (
                      <button
                        key={m.id}
                        className="minor-dropdown-item"
                        onClick={() => {
                          addMinor(m.id);
                          setMinorDropdownOpen(false);
                        }}
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
            {selectedMinors.length === 0 && availableToAdd.length > 0 && (
              <span className="minor-placeholder">None</span>
            )}
          </div>
        </div>
        <button
          className="btn-theme"
          onClick={toggleTheme}
          title="Toggle theme"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? '☾' : '☀'}
        </button>
        <button
          className="btn-clear-all"
          onClick={onClearAll}
          title="Clear all courses"
        >
          Reset
        </button>
      </div>
    </header>
  );
}
