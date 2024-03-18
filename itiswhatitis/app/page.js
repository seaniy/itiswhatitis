import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 relative">
      <div className="container text-center">
        <div className="background-image absolute top-0 left-0 w-full h-full">
          <Image
            src="/ez.jpg"
            alt="bg"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="content text-white z-10 relative bg-gray-800 bg-opacity-75 rounded-lg p-8">
          <h1 className="text-4xl font-bold mb-8">IT IS WHAT IT IS</h1>
          <div className="links flex flex-col gap-4">
            <Link href="https://google.com">CHART</Link>
            <Link href="https://twitter.com/itiswhatitissol">TWITTER</Link>
            <Link href="https://t.me/+3USe5LghkgthYjY1">TELEGRAM</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
