function StaffCard({ item }) {
  return (
    <article className="surface-card staff-card">
      <img className="staff-card__image" src={item.image} alt={item.name} />
      <div className="surface-card__body">
        <h3>{item.name}</h3>
        <p className="staff-card__role">{item.role}</p>
        <p>{item.bio}</p>
      </div>
    </article>
  );
}

export default StaffCard;
