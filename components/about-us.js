import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className="flex flex-col md:flex-row items-center p-6 md:p-12">
      {/* Left side image */}
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <Image
          src="/images/about.webp" // Replace with your image path
          alt="Hiring Zen office"
          width={500}
          height={500}
          className="object-cover rounded-lg"
        />
      </div>

      {/* Right side text */}
      <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-700 leading-relaxed">
          At Hiring Zen, we simplify recruitment for small and medium enterprises (SMEs) by offering end-to-end talent acquisition solutions on a subscription basis. Designed for industries like IT, technology, and consulting, we provide a full-service recruitment process, from crafting the perfect job description to sourcing, interviewing, and delivering offers. With no need for costly recruitment agencies, we allow you to focus on your business while we handle your hiring needs – one role at a time.
        </p>
      </div>
    </section>
  );
};

export { AboutUs };
