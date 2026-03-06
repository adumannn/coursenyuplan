import { SEMESTERS } from '../data/courses';
import SemesterCard from './SemesterCard';

export default function SemesterGrid({
  plan,
  semesterCredits,
  onRemoveCourse,
  onAddClick,
}) {
  return (
    <div className="semester-grid">
      {SEMESTERS.map((semester) => (
        <SemesterCard
          key={semester.id}
          semester={semester}
          courses={plan[semester.id] || []}
          credits={semesterCredits[semester.id] || 0}
          onRemoveCourse={onRemoveCourse}
          onAddClick={onAddClick}
        />
      ))}
    </div>
  );
}
