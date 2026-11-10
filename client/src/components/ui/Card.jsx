function Card({ title, description, children }) {
  return (
    <div className="ui-card">
      <h3>{title}</h3>

      {description && <p>{description}</p>}

      {children && (
        <div className="card-content">
          {children}
        </div>
      )}
    </div>
  );
}

export default Card;