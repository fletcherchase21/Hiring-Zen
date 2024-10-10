export default function CompanyScroller() {
  const companies = ['Ireland', 'United Kingdom', 'USA', 'Portugal', 'Spain', 'France'];

  return (
    <div className="relative overflow-hidden md:w-[70%] max-w-[900px] mx-auto rounded-full whitespace-nowrap bg-black text-white py-4 md:py-5">
      <div className="flex animate-scroll">
        {[...Array(2)].flatMap(() => companies).map((company, index) => (
          <div key={index} className="inline-block px-6 py-2 text-lg font-bold">
            {company}
          </div>
        ))}
      </div>
    </div>
  );
}
