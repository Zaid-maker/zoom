"use client";

import React from "react";
import HomeCard from "./HomeCard";

const MeetingTypeList = () => {
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start and instant meeting"
      />
      <HomeCard
        img="/icons/join-meeting.svg"
        title="Join Meeting"
        description="Join via invitation link"
        className="bg-blue-1"
      />
      <HomeCard
        img="/icons/schedule.svg"
        title="Schedule"
        description="Plan your meetings with schedules"
        className="bg-purple-1"
      />
      <HomeCard
        img="/icons/recordings.svg"
        title="Recordings"
        description="View Recordings of Meetings"
        className="bg-yellow-1"
      />
    </section>
  );
};

export default MeetingTypeList;
