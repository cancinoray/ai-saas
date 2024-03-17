import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

const DashboardPage = () => {
  return (
    <>
      <p className="text-xl text-red-500">This is the Dashboard Route! (Protected)</p>
    </>
  );
};

export default DashboardPage;
