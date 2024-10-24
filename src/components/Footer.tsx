import Link from "next/link";
import socials from "@/data/socials";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1a103d] py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <h2 className="text-2xl font-bold text-white">Deviators Club</h2>

          <p className="text-gray-400 text-center max-w-2xl">
            The coolest tech haven on the campus! We are a group of tech
            enthusiasts diving deep into the world of technology and having a
            blast while doing it.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                className="text-gray-400 hover:text-[#8b7ff9] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
