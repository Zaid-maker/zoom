import React, { ReactNode } from "react";

interface MeetingModelProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  children?: ReactNode;
  handleClick?: () => void;
  buttonText?: string;
}

const MeetingModel = ({}: MeetingModelProps) => {
  return <div>MeetingModel</div>;
};

export default MeetingModel;
