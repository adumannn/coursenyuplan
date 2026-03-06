import { CATEGORIES, GRADUATION_CREDITS } from '../data/courses';

const MINOR_COLOR = '#7B1FA2';

export default function RequirementsSidebar({
  requirementProgress,
  totalCredits,
}) {
  const reqEntries = Object.values(requirementProgress).filter(
    (r) => r.id !== 'electives' && r.category !== 'minor',
  );
  const minorEntries = Object.values(requirementProgress).filter(
    (r) => r.category === 'minor',
  );
  const electives = requirementProgress['electives'];

  return (
    <aside className="requirements-sidebar">
      <h2 className="sidebar-title">Requirements</h2>

      <div className="req-overall">
        <div className="req-overall-bar">
          <div
            className="req-overall-fill"
            style={{
              width: `${Math.min(100, (totalCredits / GRADUATION_CREDITS) * 100)}%`,
            }}
          />
        </div>
        <div className="req-overall-text">
          <span>
            {totalCredits} / {GRADUATION_CREDITS} credits
          </span>
          <span>
            {Math.max(0, GRADUATION_CREDITS - totalCredits)} remaining
          </span>
        </div>
      </div>

      <div className="sidebar-legend">
        <h3>Category Legend</h3>
        <div className="legend-items">
          {Object.entries(CATEGORIES).map(([key, cat]) => (
            <div key={key} className="legend-item">
              <span
                className="legend-dot"
                style={{ backgroundColor: cat.color }}
              />
              <span>{cat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="req-list">
        {reqEntries.map((req) => {
          const catColor = CATEGORIES[req.category]?.color || '#546E7A';
          const pct = req.coursesNeeded
            ? Math.min(100, (req.coursesTaken / req.coursesNeeded) * 100)
            : 0;

          return (
            <div
              key={req.id}
              className={`req-item ${req.fulfilled ? 'req-item--fulfilled' : ''}`}
            >
              <div className="req-item-header">
                <div className="req-item-label">
                  <span
                    className="req-dot"
                    style={{ backgroundColor: catColor }}
                  />
                  <span>{req.label}</span>
                </div>
                {req.fulfilled ? (
                  <span className="req-status req-status--done">
                    ✓ Complete
                  </span>
                ) : (
                  <span className="req-status">
                    {req.coursesTaken}/{req.coursesNeeded} courses
                  </span>
                )}
              </div>
              <div className="req-bar">
                <div
                  className="req-bar-fill"
                  style={{ width: `${pct}%`, backgroundColor: catColor }}
                />
              </div>
              <div className="req-credits-text">
                {req.creditsTaken} / {req.creditsNeeded} credits
              </div>
            </div>
          );
        })}

        {electives && (
          <div className="req-item">
            <div className="req-item-header">
              <div className="req-item-label">
                <span
                  className="req-dot"
                  style={{ backgroundColor: CATEGORIES.elective.color }}
                />
                <span>Free Electives</span>
              </div>
              <span className="req-status">
                {electives.coursesTaken} courses
              </span>
            </div>
            <div className="req-credits-text">
              {electives.creditsTaken} credits
            </div>
          </div>
        )}
      </div>

      {minorEntries.length > 0 && (
        <>
          <div className="sidebar-divider" />
          <h2 className="sidebar-title">Minor Requirements</h2>
          <div className="req-list">
            {minorEntries.map((req) => {
              const pct = req.coursesNeeded
                ? Math.min(100, (req.coursesTaken / req.coursesNeeded) * 100)
                : 0;

              return (
                <div
                  key={req.id}
                  className={`req-item ${req.fulfilled ? 'req-item--fulfilled' : ''}`}
                >
                  <div className="req-item-header">
                    <div className="req-item-label">
                      <span
                        className="req-dot"
                        style={{ backgroundColor: MINOR_COLOR }}
                      />
                      <span>{req.label}</span>
                    </div>
                    {req.fulfilled ? (
                      <span className="req-status req-status--done">
                        ✓ Complete
                      </span>
                    ) : (
                      <span className="req-status">
                        {req.coursesTaken}/{req.coursesNeeded} courses
                      </span>
                    )}
                  </div>
                  <div className="req-bar">
                    <div
                      className="req-bar-fill"
                      style={{
                        width: `${pct}%`,
                        backgroundColor: MINOR_COLOR,
                      }}
                    />
                  </div>
                  <div className="req-credits-text">
                    {req.creditsTaken} / {req.creditsNeeded} credits
                  </div>
                  {req.description && (
                    <div className="req-minor-desc">{req.description}</div>
                  )}
                  {req.notes && (
                    <div className="req-minor-notes">{req.notes}</div>
                  )}
                  {req.matchedCourses?.length > 0 && (
                    <div className="req-minor-matched">
                      Counted: {req.matchedCourses.join(', ')}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}

    </aside>
  );
}
