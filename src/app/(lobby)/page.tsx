import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import EventCard from "@/components/cards/event-card"
import FeedbackCard from "@/components/cards/feedback-card"
import NewsCard from "@/components/cards/news-card"

export default function Home() {
  return (
    <>
      <section className="container flex flex-col gap-4 pt-4 text-center lg:items-center lg:gap-8 lg:pb-5 lg:pt-20">
        <div className="flex flex-1 flex-col items-center gap-4 text-center lg:gap-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold lg:text-6xl">BlackCAT Server</h1>
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
            <div className="text-sm md:text-base">Players</div>
            <div className="animate-[counter_3s_ease-out_forwards] text-4xl [counter-set:_num_var(--num)] before:content-[counter(num)] md:text-6xl">
              <span className="sr-only">50</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-sm md:text-base">Characters</div>
            <div className="animate-[counter_3s_ease-out_forwards] text-4xl [counter-set:_num_var(--num)] before:content-[counter(num)] md:text-6xl">
              <span className="sr-only">50</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-sm md:text-base">Rating</div>
            <div className="animate-[counter_3s_ease-out_forwards] text-4xl [counter-set:_num_var(--num)] before:content-[counter(num)] md:text-6xl">
              <span className="sr-only">4.5</span>
            </div>
          </div>
        </div>
        <div>
          <div className="my-5 text-2xl font-bold uppercase">
            Events & Activities
          </div>
          <div className="flex flex-col gap-3 md:flex-row">
            {siteConfig.events.map((event) => (
              <EventCard
                key={event.id}
                id={event.id}
                title={event.title}
                content={event.details}
                image={event.image}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="my-5 text-2xl font-bold uppercase">Latest News</div>
          <div className="flex flex-col gap-3 md:flex-row">
            {siteConfig.news.map((news) => (
              <NewsCard
                key={news.id}
                title={news.title}
                details={news.details}
                image={news.images[0]}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="my-5 text-2xl font-bold uppercase">Reviews</div>
          <div className="flex flex-col gap-3 md:flex-row">
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
          <div className="flex h-auto flex-row flex-wrap justify-center gap-2">
            {siteConfig.contents.map((content) => (
              <iframe
                key={content.id}
                width="500px"
                height="auto"
                src={`${content.embed}?rel=0&amp;controls=0`}
                allow="accelerometer; encrypted-media; gyroscope;"
                className="aspect-video basis-1/2 md:basis-auto"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
