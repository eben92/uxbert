import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { SVGProps } from "react";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center  px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <div className="inline-block rounded-full bg-white p-4">
          <AirplayIcon className="h-12 w-12 fill-[#1DB954]" />
        </div>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Oops, something went wrong!
        </h1>
        <p className="mt-4 text-lg text-white/80">
          We couldn&apos;t find the page you are looking for.
        </p>
        <div className="mt-6 flex items-center gap-4 justify-center">
          <Link
            href="/"
            className={buttonVariants({
              className:
                "inline-flex items-center rounded-2xl text-sm font-medium text-[#1DB954] shadow-sm transition-colors",
            })}
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

function AirplayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
      <path d="m12 15 5 6H7Z" />
    </svg>
  );
}
