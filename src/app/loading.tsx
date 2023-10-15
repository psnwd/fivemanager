import Image from "next/image"

export default function Loading() {
  return (
    <>
      <div className="absolute left-[50%] top-[50%]">
        <Image src="/images/logo.svg" width={100} height={100} alt="" />
      </div>
    </>
  )
}
