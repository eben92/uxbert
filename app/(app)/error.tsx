"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SVGProps, useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-[#1DB954] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <div className="inline-block rounded-full bg-white p-4">
          <AirplayIcon className="h-12 w-12 fill-[#1DB954]" />
        </div>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Oops, something went wrong!
        </h1>
        <p className="mt-4 text-lg text-white/80">
          We&apos;re having trouble playing your music right now. Please try
          again in a few moments.
        </p>
        <div className="mt-6">
          <Button
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
            variant="outline"
            className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1DB954] shadow-sm transition-colors hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          >
            <RefreshCwIcon className="mr-2 h-5 w-5" />
            Try Again
          </Button>
          <Link
            href="#"
            className="ml-4 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1DB954] shadow-sm transition-colors hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            prefetch={false}
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

function RefreshCwIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>
  );
}
