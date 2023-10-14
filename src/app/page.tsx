import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import EventCard from "@/components/cards/event-card"
import FeedbackCard from "@/components/cards/feedback-card"
import { SiteFooter } from "@/components/layouts/site-footer"
import { ThemeToggle } from "@/components/layouts/theme-toggle"
import { UserNav } from "@/components/layouts/user-nav"

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <Link href="/" className="mr-2">
              <div className="font-semibold">
                <Image
                  src="/images/logo.svg"
                  width={50}
                  height={50}
                  alt="Logo"
                />
              </div>
            </Link>
            <div className="ml-auto flex items-center space-x-4">
              <ThemeToggle />
              <UserNav />
            </div>
          </div>
        </div>
        <section className="container flex flex-col gap-4 pb-12 pt-4 text-center lg:items-center lg:gap-8 lg:py-20">
          <div className="flex flex-1 flex-col items-center gap-4 text-center lg:gap-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold lg:text-6xl">
                BlackCAT Server
              </h1>
              <h2 className="text-lg font-light text-muted-foreground">
                {siteConfig.description}
              </h2>
            </div>
            <div className="flex gap-2">
              <Link
                href="https://github.com/psnwd"
                target="_blank"
                className={`w-[10rem] ${cn(buttonVariants({ size: "lg" }))}`}
              >
                Get started
              </Link>
              <Link
                href="https://discord.com/"
                target="_blank"
                className={`w-[10rem] ${cn(
                  buttonVariants({ variant: "ghost", size: "lg" })
                )}`}
              >
                Join Discord
              </Link>
            </div>
          </div>
          <div className="flex flex-1 justify-center lg:justify-end">
            <Image
              src="/images/home/home_1.png"
              width={500}
              height={500}
              alt="Header image"
            />
          </div>
          <div className="flex h-40 w-full items-center justify-around gap-3 rounded border px-10">
            <div className="flex flex-col">
              <div>Players</div>
              <div className="animate-[counter_3s_ease-out_forwards] text-6xl [counter-set:_num_var(--num)] before:content-[counter(num)]">
                <span className="sr-only">50</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div>Characters</div>
              <div className="animate-[counter_3s_ease-out_forwards] text-6xl [counter-set:_num_var(--num)] before:content-[counter(num)]">
                <span className="sr-only">50</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div>Rating</div>
              <div className="animate-[counter_3s_ease-out_forwards] text-6xl [counter-set:_num_var(--num)] before:content-[counter(num)]">
                <span className="sr-only">4.5</span>
              </div>
            </div>
          </div>
          <div>
            <div className="my-5 text-2xl font-bold uppercase">
              Events & Activities
            </div>
            <div className="flex gap-3">
              {siteConfig.events.map((event) => (
                <EventCard
                  key={event.id}
                  title={event.title}
                  content={event.details}
                  image={event.image}
                />
              ))}
            </div>
          </div>
          <div>
            <div className="my-5 text-2xl font-bold uppercase">Reviews</div>
            <div className="flex gap-3">
              {siteConfig.feedbacks.map((feedback) => (
                <FeedbackCard
                  key={feedback.id}
                  title={feedback.title}
                  content={feedback.content}
                  author={feedback.author}
                  authorImage={feedback.authorImage}
                  authorDetail={feedback.authorDetail}
                />
              ))}
            </div>
          </div>
          <div>
            <div className="my-5 text-2xl font-bold uppercase">Contents</div>
            <div className="flex h-96 flex-row flex-wrap justify-center gap-2 md:h-[25rem]">
              <iframe
                width="500px"
                height="auto"
                src="https://www.youtube.com/embed/8aahBio9Xqs?si=q641c_wZajAtsy7r?rel=0&amp;controls=0"
                allow="accelerometer; encrypted-media; gyroscope;"
                className="basis-1/2 md:basis-auto"
              ></iframe>

              <iframe
                width="500px"
                height="auto"
                src="https://www.youtube.com/embed/tiUdSBqMOtA?si=Pgel7P21VbGgvlaE?rel=0&amp;controls=0"
                title="YouTube video player"
                allow="accelerometer; encrypted-media; gyroscope;"
                className="basis-1/2 md:basis-auto"
              />
            </div>
          </div>
          <SiteFooter />
        </section>
      </div>
    </>
  )
}
