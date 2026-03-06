import { CATEGORIES } from '../data/courses';

export default function CourseCard({ course, semesterId, onRemove, compact }) {
  const categoryColor =
    CATEGORIES[course.category]?.color || CATEGORIES.elective.color;

  return (
    <div className={`course-card ${compact ? 'course-card--compact' : ''}`}>
      <div
        className="course-card-color"
        style={{ backgroundColor: categoryColor }}
      />
      <div className="course-card-content">
        <div className="course-card-header">
          <span className="course-card-code">{course.code}</span>
          <span className="course-card-credits">{course.credits} cr</span>
        </div>
        <div className="course-card-name">{course.name}</div>
      </div>
      <button
        className="course-card-remove"
        onClick={() => onRemove(semesterId, course.id)}
        title="Remove course"
        aria-label={`Remove ${course.code}`}
      >
        ✕
      </button>
    </div>
  );
}
