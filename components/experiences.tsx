import Link from "next/link";
import Image from "next/image";

type Experience = {
  company: string;
  logo: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  link?: string;
};

type Volunteering = {
  organization: string;
  logo: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  link?: string;
};

export default function Experiences() {
  const experiences: Experience[] = [
    {
      company: "Zomp",
      logo: "/zomp.png",
      role: "Software Engineer Intern",
      location: "Toronto, ON",
      period: "05/2025 - Present",
      current: true,
      link: "https://www.zomp.com/",
    },
    {
      company: "Ply Health (YC S24)",
      logo: "/ply.jpeg",
      role: "Software Engineer Intern",
      location: "San Francisco, CA",
      period: "05/2024 - 09/2024",
      current: false,
      link: "https://www.plyhealth.com/",
    },
    {
      company: "Wat Street",
      logo: "/watstreet.jpeg",
      role: "Backend Developer",
      location: "Waterloo, ON",
      period: "11/2024 - Present",
      current: true,
      link: "http://watstreet.com/",
    },
    {
      company: "Jane Street",
      logo: "/js.png",
      role: "First-Year Trading and Technology Program Participant",
      location: "New York, NY",
      period: "03/2025 - 03/2025",
      link: "https://www.janestreet.com/join-jane-street/programs-and-events/fttp/",
    },
  ];

  const volunteering: Volunteering[] = [
    {
      organization: "Ignition Hacks",
      logo: "/ignition.png",
      role: "Finance Executive",
      location: "Toronto, ON",
      period: "03/2023 - 08/2024",
      current: false,
      link: "https://www.ignitionhacks.org/",
    },
    {
      organization: "Shad Canada",
      logo: "/shad.png",
      role: "Program Assistant",
      location: "Oshawa, ON",
      period: "06/2024 - 08-2024",
      current: false,
      link: "https://www.shad.ca/",
    },
    {
      organization: "Spirit of Math",
      logo: "/som.png",
      role: "Assistant Teacher",
      location: "Markham, ON",
      period: "08/2020 - 09-2023",
      current: false,
      link: "https://spiritofmath.com/",
    },
  ];

  return (
    <section id="experiences" className="py-10">
        <h2 className="text-3xl font-bold mb-8">Experiences</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="flex items-start gap-4 group">
              <div className="w-16 h-16 rounded-md overflow-hidden bg-zinc-200 dark:bg-zinc-800 flex-shrink-0 flex items-center justify-center relative">
                {exp.link ? (
                  <Link href={exp.link} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={exp.logo || "/placeholder.svg"}
                      alt={`${exp.company} logo`}
                      width={60}
                      height={60}
                      className="object-cover rounded-md cursor-pointer"
                    />
                  </Link>
                ) : (
                  <Image
                    src={exp.logo || "/placeholder.svg"}
                    alt={`${exp.company} logo`}
                    width={60}
                    height={60}
                    className="object-cover rounded-md"
                  />
                )}
              </div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      {exp.company}
                      {exp.current && (
                        <span className="text-sm font-normal px-2 py-0.5 bg-zinc-200 dark:bg-zinc-800 rounded-md">
                          Present
                        </span>
                      )}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400">{exp.role}</p>
                  </div>

                  <div className="text-right sm:text-right">
                    <p className="text-zinc-700 dark:text-zinc-300">{exp.location}</p>
                    <p className="text-zinc-500 dark:text-zinc-500">{exp.period}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mt-16 mb-8">Other Fun Stuff</h2>
        <div className="space-y-6">
          {volunteering.map((vol, index) => (
            <div key={index} className="flex items-start gap-4 group">
              <div className="w-16 h-16 rounded-md overflow-hidden bg-zinc-200 dark:bg-zinc-800 flex-shrink-0 flex items-center justify-center relative">
                {vol.link ? (
                  <Link href={vol.link} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={vol.logo || "/placeholder.svg"}
                      alt={`${vol.organization} logo`}
                      width={60}
                      height={60}
                      className="object-cover rounded-md cursor-pointer"
                    />
                  </Link>
                ) : (
                  <Image
                    src={vol.logo || "/placeholder.svg"}
                    alt={`${vol.organization} logo`}
                    width={60}
                    height={60}
                    className="object-cover rounded-md"
                  />
                )}
              </div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      {vol.organization}
                      {vol.current && (
                        <span className="text-sm font-normal px-2 py-0.5 bg-zinc-200 dark:bg-zinc-800 rounded-md">
                          Present
                        </span>
                      )}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400">{vol.role}</p>
                  </div>

                  <div className="text-right sm:text-right">
                    <p className="text-zinc-700 dark:text-zinc-300">{vol.location}</p>
                    <p className="text-zinc-500 dark:text-zinc-500">{vol.period}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}
