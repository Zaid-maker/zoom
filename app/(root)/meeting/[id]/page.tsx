"use client";
import { useUser } from "@clerk/nextjs";
import { useParams } from "next/navigation";
import { useState } from "react";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
// import { useGetCallById } from '@/hooks/useGetCallById';

import Loader from "@/components/Loader";

const MeetingPage = () => {
  const { id } = useParams();
  const { isLoaded, user } = useUser();
  //const { call, isCallLoading } = useGetCallById(id);
  const [isSetupComplete, setIsSetupComplete] = useState(false);

  if (!isLoaded) return <Loader />;

  return (
    <main className="h-screen w-full">
      <StreamCall>
        <StreamTheme></StreamTheme>
      </StreamCall>
    </main>
  );
};

export default MeetingPage;
