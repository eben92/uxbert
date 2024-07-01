import { Spinner } from "@/components/ui/spinner";

export default function SearchLoading() {
  return (
    <div className="h-dvh grid items-center justify-center w-full">
      <Spinner />
    </div>
  );
}
