"use client";

import { dehydrate, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { trpc } from "~/client/trpcClient";

export function Notes() {
  const queryClient = useQueryClient();
  const query = trpc.note.list.useQuery();
  // const mutation = trpc.note.create.useMutation();

  useEffect(() => {
    dehydrate(queryClient);
  });

  return (
    <div className="space-y-3">
      {!query.isLoading &&
        query.data?.map((note, idx) => (
          <div key={idx}>
            <h1 className="text-3xl font-semibold">{note.title}</h1>
            <p className="text-neutral-300">{note.content}</p>
          </div>
        ))}

      {/* <QueryPresenter {...query} /> */}
    </div>
  );
}

function QueryPresenter(query: any) {
  return <pre>{!query.isLoading && JSON.stringify(query.data, null, 2)}</pre>;
}
