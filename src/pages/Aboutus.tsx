const AboutUs = () => {
  return (
    <div className="about-us font-sans from-black text-white mt-[100vh]">
      <div className="h-96 flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat">
        <div className="bg-black bg-opacity-60 w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            About us
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-20">
            Welcome to Deviators
          </h1>
          <p className="mt-4 text-lg md:text-xl lg:text-xl xl:w-[70%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            veritatis debitis fuga eaque totam eveniet voluptatum quibusdam,
            explicabo et delectus dicta corrupti temporibus ipsa quae. Dolores
            culpa beatae mollitia ea natus. Nihil pariatur inventore veritatis
            adipisci debitis voluptatum. Architecto non repellat tempora numquam
            eveniet omnis dolor praesentium doloribus, in amet.
          </p>
        </div>
      </div>

      <section className="py-12 px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Our Mission
          <div className="text-xl flex flex-wrap justify-center items-center">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="text-xl flex flex-col w-[400px] m-20"
                >
                  <div className="flex justify-center text-4xl space-x-2 opacity-70">
                    <p>01</p>
                    <h2>Briefing</h2>
                  </div>
                  <p className="text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi possimus sint dolorum qui voluptates natus dolore
                    praesentium, deserunt eligendi eos!
                  </p>
                </div>
              ))}
          </div>
        </h2>
      </section>
    </div>
  );
};

export default AboutUs;