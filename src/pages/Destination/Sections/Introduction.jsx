const Introduction = () => {
  return (
    <section className="h-full max-w-7xl grid mx-auto place-content-center px-3 lg:px-0 py-20 mt-32">
      <div className="container grid gap-5">
        <h1 className="text-4xl md:text-5xl font-cinzel">
          What to know before go to Bali
        </h1>
        <div className="flex md:gap-3 gap-5 md:flex-row flex-col">
          <div className="w-full md:w-1/2">
            <p className="font-poppins">
              Bali is an island in Indonesia that is known as the prima donna of
              Indonesian tourism that has been famous throughout the world. In
              addition to being famous for its natural beauty, especially its
              beaches, Bali is also famous for its unique and interesting arts
              and culture. <br />
              <br /> Bali is strongly implemented in Hindu religious practices,
              which are evident in the temples, rituals, and community life
              there that make it rich in culture and arts, and attract millions
              of tourists every year.
            </p>
          </div>
          <iframe
            className="w-full md:w-1/2"
            title="bali map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1010292.8370280771!2d114.41205106151213!3d-8.454919324786227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd141d3e8100fa1%3A0x24910fb14b24e690!2sBali!5e0!3m2!1sid!2sid!4v1725249860963!5m2!1sid!2sid"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
