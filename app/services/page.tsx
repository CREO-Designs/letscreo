import Link from "next/link";

const page = () => {
  return (
    <section className="container flex min-h-[100vh] flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
        Our Services
      </h1>
      <p className="max-w-xl text-muted-foreground">
        We’re crafting something great. This page is coming soon.
      </p>
      <div className="pt-2">
        <Link
          href="/"
          className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-primary-foreground shadow transition hover:opacity-90"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default page;
