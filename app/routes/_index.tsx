import type { V2_MetaFunction } from "@remix-run/cloudflare";
import { Link as RemixLink } from "@remix-run/react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Input,
  Link,
} from "@nextui-org/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "NextUI Sandbox" },
    { name: "description", content: "Welcome to NextUI Sandbox!" },
  ];
};

export default function Index() {
  return (
    <div className="max-w-md mx-auto p-unit-4">
      {/* <h1>Welcome to NextUI Sandbox</h1> */}
      <Card>
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-medium">NextUI</p>
            <p className="text-small text-default-500">nextui.org</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>Make beautiful websites regardless of your design experience.</p>
          <Input
            type="email"
            variant="bordered"
            label="Email"
            labelPlacement="inside"
            validationState="invalid"
            errorMessage="Please enter a valid email"
          />
        </CardBody>
        <Divider />
        <CardFooter className="">
          <div className="flex flex-col gap-2">
            <Link
              as={RemixLink}
              isExternal
              showAnchorIcon
              to="https://github.com/nextui-org/nextui"
            >
              Visit source code on GitHub.
            </Link>
            <Link
              isExternal
              showAnchorIcon
              href="https://github.com/nextui-org/nextui"
            >
              Visit source code on GitHub.
            </Link>
            <Button
              href="https://github.com/nextui-org/nextui"
              as={Link}
              color="primary"
              showAnchorIcon
              variant="solid"
            >
              Button Link
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
