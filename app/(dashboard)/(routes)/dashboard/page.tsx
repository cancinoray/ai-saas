import { Button } from "@/components/ui/button";
import Image from "next/image";

const DashboardPage = () => {
  return (
    <>
      <p className="text-4xl text-red-500">This is the Dashboard Route! (Protected)</p>
      <Button variant="outline" size="lg">
        Click me!
      </Button>
    </>
  );
};

export default DashboardPage;
