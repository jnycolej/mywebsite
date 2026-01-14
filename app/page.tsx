import Image from "next/image";
import Link
 from "next/link";
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col bg-background items-center justify-between py-32 px-16 dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/1.png"
          alt="Next.js logo"
          width={300}
          height={300}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Jennifer Joseph
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Software Engineer
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Link
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href={`/dashboard/projects`}
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Projects
          </Link>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href={`/dashboard/about`}
            rel="noopener noreferrer"
          >
            Skills
          </a>
          <Link
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href={`/dashboard/contact`}
            rel="noopener noreferrer"
          >
            Contact Me
          </Link>
        </div>
      </main>
    </div>
  );
}
