import { Appbar } from "@/components/Appbar";
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "./lib/auth";

export default function Home() {
  const session = getServerSession(NEXT_AUTH);
  return (
    <div>
      {JSON.stringify(session)}
      <Appbar />
    </div>
  );
}
