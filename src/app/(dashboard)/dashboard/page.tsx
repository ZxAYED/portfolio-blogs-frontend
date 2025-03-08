import authOptions from "@/lib/authOpions";

import { getServerSession } from "next-auth";
import Image from "next/image";

const page = async () => {
  const session = await getServerSession(authOptions);

  if (!session) return <div>Not signed in</div>;

  return (
    <div className="text-3xl text-center  text-amber-300 flex flex-col items-center jusctify-center">
      <div className="space-y-6">
        <div className="flex items-center gap-x-4 mb-10">
          <Image
            height={100}
            width={100}
            className="object-cover w-20 h-20 rounded-full"
            src={
              session?.user?.image ||
              "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100"
            }
            alt=""
          />

          <div>
            <h1 className=" font-semibold text-gray-700  text-xl capitalize dark:text-white">
              {session?.user?.name}
            </h1>

            <p className="text-lg text-gray-500 dark:text-gray-400">
              {session?.user?.email}
            </p>
          </div>
        </div>
      </div>
      <p>This component is under construction . Please come back later</p>
    </div>
  );
};

export default page;
