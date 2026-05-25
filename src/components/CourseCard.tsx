import React from 'react';
import Link from '@docusaurus/Link';

type Props = {
  title: string;
  duration?: string;
  level?: string;
  description: string;
  to: string;
};

export default function CourseCard({title, duration, level, description, to}: Props) {
  return (
    <div className="course-card">
      <h3>{title}</h3>
      <div className="course-card__meta">
        {[level, duration].filter(Boolean).join(' â€¢ ')}
      </div>
      <p>{description}</p>
      <Link className="button button--primary button--sm" to={to}>
        Start module
      </Link>
    </div>
  );
}

