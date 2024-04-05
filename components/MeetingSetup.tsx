import { DeviceSettings } from "@stream-io/video-react-sdk";
import React from "react";
import { Button } from "./ui/button";

const MeetingSetup = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-white">
      <h1 className="text-center text-2xl font-bold">Setup</h1>
      VideoPreview
      <div className="flex h-16 items-center justify-center gap-3">
        <label className="flex items-center justify-center gap-2 font-medium">
          <input type="checkbox" />
          Join with Mic and Camera Off
        </label>
        <DeviceSettings />
      </div>
      <Button
        className="rounded-md bg-green-500 px-4 py-2.5"
        //onClick={() => {
        //  call.join();

        //  setIsSetupComplete(true);
        //}}
      >
        Join meeting
      </Button>
    </div>
  );
};

export default MeetingSetup;
