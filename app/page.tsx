import { Suspense, use } from "react";
import { HydrateClient } from "~/client/HydrateClient";
import { Notes } from "~/components/Notes";
import { rsc } from "../server-rsc/trpc";

function PostListRSC() {
  use(
    Promise.all([
      rsc.note.list.fetchInfinite(),
      // Display loading for at least 300ms
      new Promise((resolve) => setTimeout(resolve, 3_00)),
    ])
  );

  return (
    <HydrateClient state={use(rsc.dehydrate())}>
      <Notes />
    </HydrateClient>
  );
}

export default async function Page() {
  return (
    <main className="max-w-7xl mx-auto px-2">
      <Suspense fallback={<div>Loading...</div>}>
        <PostListRSC />
      </Suspense>
    </main>
  );
}
