export default function SectionTitle({ title, subtitle, description, align="center" }) {
  return (
    <div className={`text-${align} mb-16 md:mb-20`}>
      <div className="w-16 h-1 bg-[#f8db98] mx-auto mb-6"></div>
      <h2 className="font-semibold text-lg text-white mb-5 leading-none">
        <span className="text-[#f8db98]">{title}</span> {subtitle}
      </h2>
      {description && (
        <p className="text-[#fff] paragraph_three">{description}</p>
      )}
    </div>
  );
}