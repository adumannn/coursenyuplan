import { useState, useMemo } from 'react';
import {
  COURSE_CATALOG,
  CATEGORIES,
  DEPARTMENTS,
  SEMESTERS,
} from '../data/courses';

export default function AddCourseModal({
  semesterId,
  onAdd,
  onClose,
  isCourseInPlan,
}) {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [departmentFilter, setDepartmentFilter] = useState('all');
  const [customMode, setCustomMode] = useState(false);
  const [customCourse, setCustomCourse] = useState({
    code: '',
    name: '',
    credits: 4,
    category: 'elective',
  });

  const semesterLabel =
    SEMESTERS.find((s) => s.id === semesterId)?.label || semesterId;

  const filtered = useMemo(() => {
    return COURSE_CATALOG.filter((c) => {
      if (categoryFilter !== 'all' && c.category !== categoryFilter)
        return false;
      if (departmentFilter !== 'all' && c.department !== departmentFilter)
        return false;
      if (search) {
        const q = search.toLowerCase();
        return (
          c.code.toLowerCase().includes(q) ||
          c.name.toLowerCase().includes(q) ||
          c.department.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [search, categoryFilter, departmentFilter]);

  const handleAddCatalog = (course) => {
    onAdd(semesterId, course);
  };

  const handleAddCustom = () => {
    if (!customCourse.code.trim() || !customCourse.name.trim()) return;
    const id = `custom-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    onAdd(semesterId, {
      ...customCourse,
      id,
      department: 'Custom',
      credits: Number(customCourse.credits) || 4,
    });
    setCustomCourse({ code: '', name: '', credits: 4, category: 'elective' });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Add Course to {semesterLabel}</h2>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="modal-tabs">
          <button
            className={`modal-tab ${!customMode ? 'modal-tab--active' : ''}`}
            onClick={() => setCustomMode(false)}
          >
            Course Catalog
          </button>
          <button
            className={`modal-tab ${customMode ? 'modal-tab--active' : ''}`}
            onClick={() => setCustomMode(true)}
          >
            Custom Course
          </button>
        </div>

        {!customMode ? (
          <>
            <div className="modal-filters">
              <input
                type="text"
                className="modal-search"
                placeholder="Search courses by code, name, or department..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                autoFocus
              />
              <div className="modal-filter-row">
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  {Object.entries(CATEGORIES).map(([key, cat]) => (
                    <option key={key} value={key}>
                      {cat.label}
                    </option>
                  ))}
                </select>
                <select
                  value={departmentFilter}
                  onChange={(e) => setDepartmentFilter(e.target.value)}
                >
                  <option value="all">All Departments</option>
                  {DEPARTMENTS.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="modal-course-list">
              {filtered.length === 0 ? (
                <div className="modal-empty">
                  No courses match your filters.
                </div>
              ) : (
                filtered.map((course) => {
                  const inPlan = isCourseInPlan(course.id);
                  return (
                    <div
                      key={course.id}
                      className={`modal-course-item ${inPlan ? 'modal-course-item--disabled' : ''}`}
                      onClick={() => !inPlan && handleAddCatalog(course)}
                    >
                      <div
                        className="modal-course-color"
                        style={{
                          backgroundColor:
                            CATEGORIES[course.category]?.color || '#546E7A',
                        }}
                      />
                      <div className="modal-course-info">
                        <span className="modal-course-code">{course.code}</span>
                        <span className="modal-course-name">{course.name}</span>
                      </div>
                      <span className="modal-course-credits">
                        {course.credits} cr
                      </span>
                      {inPlan ? (
                        <span className="modal-course-added">Added</span>
                      ) : (
                        <span className="modal-course-add-icon">+</span>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </>
        ) : (
          <div className="modal-custom">
            <div className="custom-field">
              <label>Course Code</label>
              <input
                type="text"
                placeholder="e.g. CSCI-SHU 499"
                value={customCourse.code}
                onChange={(e) =>
                  setCustomCourse({ ...customCourse, code: e.target.value })
                }
              />
            </div>
            <div className="custom-field">
              <label>Course Name</label>
              <input
                type="text"
                placeholder="e.g. Independent Study"
                value={customCourse.name}
                onChange={(e) =>
                  setCustomCourse({ ...customCourse, name: e.target.value })
                }
              />
            </div>
            <div className="custom-field-row">
              <div className="custom-field">
                <label>Credits</label>
                <input
                  type="number"
                  min="1"
                  max="8"
                  value={customCourse.credits}
                  onChange={(e) =>
                    setCustomCourse({
                      ...customCourse,
                      credits: e.target.value,
                    })
                  }
                />
              </div>
              <div className="custom-field">
                <label>Category</label>
                <select
                  value={customCourse.category}
                  onChange={(e) =>
                    setCustomCourse({
                      ...customCourse,
                      category: e.target.value,
                    })
                  }
                >
                  {Object.entries(CATEGORIES).map(([key, cat]) => (
                    <option key={key} value={key}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              className="btn-primary"
              onClick={handleAddCustom}
              disabled={!customCourse.code.trim() || !customCourse.name.trim()}
            >
              Add Custom Course
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
