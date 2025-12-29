export default function SectionTitle({ title, subtitle, description, align="center" }) {
  return (
    <div className={`text-${align} mb-16 md:mb-24`}>
      <div className="w-16 h-1 bg-[#f8db98] mx-auto mb-6"></div>

      <h2 className="font-semibold text-lg text-white">
        {title} <span className="text-[#f8db98]">{subtitle}</span>
      </h2>
      {description && (
        <p className="text-[#f8db98] paragraph_three">{description}</p>
      )}
    </div>
  );
}
