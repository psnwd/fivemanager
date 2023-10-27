import Image from "next/image"

export default function Loading() {
  return (
    <>
      <div className="absolute left-[48%] top-[48%] animate-ping">
        <Image
          src="/images/logo.svg"
          width={100}
          height={100}
          alt="loading image"
        />
      </div>
    </>
  )
}
