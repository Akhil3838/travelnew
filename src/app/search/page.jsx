import { Suspense } from "react";
import SearchClient from "./SearchClient";

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="text-center mt-5">Loading...</div>}>
      <SearchClient />
    </Suspense>
  );
}
