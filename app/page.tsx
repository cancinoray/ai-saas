import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <p className="text-6xl text-red-500">Hello Saaas</p>
      <Button variant="destructive" size="lg">
        Click me!
      </Button>
    </>
  );
}
