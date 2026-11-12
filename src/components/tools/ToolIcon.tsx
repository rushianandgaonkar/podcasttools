import React from "react";
import {
  Sparkles,
  FileText,
  Mic,
  ListOrdered,
  HelpCircle,
  DollarSign,
  Image,
  Rss,
  Clock,
  Headphones,
  TrendingUp,
  AlignLeft,
  FolderSearch,
  Zap,
  FileCode,
  Film,
  MessageSquare,
  Users,
  AudioLines,
  Timer,
  Wrench,
} from "lucide-react";

interface ToolIconProps {
  name: string;
  className?: string;
}

export function ToolIcon({ name, className = "w-5 h-5" }: ToolIconProps) {
  switch (name) {
    case "Sparkles":
      return <Sparkles className={className} />;
    case "FileText":
      return <FileText className={className} />;
    case "Mic":
      return <Mic className={className} />;
    case "ListOrdered":
      return <ListOrdered className={className} />;
    case "HelpCircle":
      return <HelpCircle className={className} />;
    case "DollarSign":
      return <DollarSign className={className} />;
    case "Image":
      return <Image className={className} />;
    case "Rss":
      return <Rss className={className} />;
    case "Clock":
      return <Clock className={className} />;
    case "Headphones":
      return <Headphones className={className} />;
    case "TrendingUp":
      return <TrendingUp className={className} />;
    case "AlignLeft":
      return <AlignLeft className={className} />;
    case "FolderSearch":
      return <FolderSearch className={className} />;
    case "Zap":
      return <Zap className={className} />;
    case "FileCode":
      return <FileCode className={className} />;
    case "Film":
      return <Film className={className} />;
    case "MessageSquare":
      return <MessageSquare className={className} />;
    case "Users":
      return <Users className={className} />;
    case "AudioLines":
      return <AudioLines className={className} />;
    case "Timer":
      return <Timer className={className} />;
    default:
      return <Wrench className={className} />;
  }
}

