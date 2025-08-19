import Image from "next/image";

export default function ContentSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
          The Lyra ecosystem brings together our models.
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative mb-6 sm:mb-0">
            <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <div className="flex h-full w-full items-center justify-center rounded-[15px] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                <div className="text-center">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Payment Dashboard</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative space-y-4">
            <p className="text-muted-foreground">
              Gemini is evolving to be more than just the models.{" "}
              <span className="text-accent-foreground font-bold">
                It supports an entire ecosystem
              </span>{" "}
              — from products innovate.
            </p>
            <p className="text-muted-foreground">
              It supports an entire ecosystem — from products to the APIs and
              platforms helping developers and businesses innovate
            </p>

            <div className="pt-6">
              <blockquote className="border-l-4 pl-4">
                <p>
                  Using TailsUI has been like unlocking a secret design
                  superpower. It's the perfect fusion of simplicity and
                  versatility, enabling us to create UIs that are as stunning as
                  they are user-friendly.
                </p>

                <div className="mt-6 space-y-3">
                  <cite className="block font-medium">John Doe, CEO</cite>
                  <img
                    className="h-5 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/nvidia.svg"
                    alt="Nvidia Logo"
                    height="20"
                    width="auto"
                  />
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
