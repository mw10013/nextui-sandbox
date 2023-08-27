import type { V2_MetaFunction } from "@remix-run/cloudflare";
import { Button } from "@nextui-org/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "NextUI Sandbox" },
    { name: "description", content: "Welcome to NextUI Sandbox!" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Welcome to NextUI Sandbox</h1>
      <Button color="primary">Click</Button>
    </div>
  );
}
