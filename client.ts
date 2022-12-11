import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from ".";

const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/trpc/",
    }),
  ],
});

client.demo.query({ name: "keerthi" }).then((result) => {
  console.log("TRPC Result:");
  console.log(result);
});
