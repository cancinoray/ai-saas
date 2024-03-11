import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

const DashboardPage = () => {
  return (
    <>
      <p className="text-4xl text-red-500">This is the Dashboard Route! (Protected)</p>
      <Button variant="outline" size="lg">
        Click me!
      </Button>
      <UserButton afterSignOutUrl="/" />
    </>
  );
};

export default DashboardPage;
