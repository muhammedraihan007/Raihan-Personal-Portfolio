const Section = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`section ${className}`} style={{ padding: '6rem 0' }}>
      <div className="container">
        {title && <h2 className="section-title">{title}</h2>}
        {children}
      </div>
    </section>
  );
};

export default Section;
