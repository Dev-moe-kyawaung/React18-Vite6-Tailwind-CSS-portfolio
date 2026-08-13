export default function SectionHeading({ eyebrow, title, copy, align = "left" }) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  );
}
