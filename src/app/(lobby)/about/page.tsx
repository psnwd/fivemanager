import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "FiveManager | About",
  description:
    "FiveM server management web application for managing fiveM server and players.",
}

function page() {
  return (
    <>
      <div className="text-2xl font-bold uppercase">About us</div>
      <div className="mx-10 mb-5 flex flex-col items-center gap-7">
        <div>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn&apos;t anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </div>
        <Image
          src="/images/home/about_1.png"
          width={800}
          height={800}
          alt="About image"
        />
        <div>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn&apos;t anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </div>
      </div>
    </>
  )
}

export default page
