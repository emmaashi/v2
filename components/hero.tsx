import Link from "next/link"

export default function Hero() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-3xl space-y-8">
        <h1 className="text-5xl font-bold">Emma Shi</h1>

        <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
          Hey! I'm currently studying Computer Science at the <b> University of Waterloo.</b>
          I'm interested in all areas of software, particularly the intersection of finance and entrepreneurship!
        </p>

        <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
          In my free time, you'll find me swimming, playing board games, drinking matcha, or coding up something new!
          I’d love to connect, so feel free to reach out!
        </p>

      </div>
    </section>
  )
}

