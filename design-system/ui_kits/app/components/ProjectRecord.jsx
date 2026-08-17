function ProjectRecord({ project, expanded, onToggle }) {
  const notesId = `notes-${project.id}`;
  return (
    <article className={`project ${project.categoryClass}`} data-od-id={`project-${project.id}`}>
      <span className="project-index micro">{project.index}</span>
      <div className="project-content">
        <div className="project-title"><h3>{project.title}</h3></div>
        <div className="project-details">
          <div className="description"><span className="label">Description</span><p>{project.description}</p></div>
          <div className="category"><span className="label">Category</span><strong>{project.category}</strong></div>
        </div>
        <figure className={`project-media ${project.mediaClass}`}>
          <img src={project.image} width="1672" height="941" loading="lazy" decoding="async" alt={project.alt} />
          <figcaption><span className="label">Media highlight</span><span className="micro">{project.caption}</span></figcaption>
        </figure>
        <div className="project-notes" id={notesId} hidden={!expanded}><p>{project.notes}</p></div>
      </div>
      <button className="project-toggle" type="button" aria-expanded={expanded} aria-controls={notesId} aria-label={`${expanded ? 'Hide' : 'Show'} ${project.title} notes`} onClick={onToggle}>
        <span aria-hidden="true">↓</span>
      </button>
    </article>
  );
}

Object.assign(window, { ProjectRecord });
