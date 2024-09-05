/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] flex items-center justify-center">
      <img
        src="https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Beautiful property"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Unlock the Value of Your Property
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white mb-8">
          Barter your property for the home of your dreams. Our real estate barter platform connects
          you with like-minded buyers and sellers.
        </p>
        <Link
          href="#"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          prefetch={false}>
          Get Started
        </Link>
      </div>
    </section>
  );
};
export default Hero;
