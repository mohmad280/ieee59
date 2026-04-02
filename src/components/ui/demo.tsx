import { BookOpen, Briefcase, Code2, Globe, Trophy } from "lucide-react";
import Timeline3D, { type TimelineEvent } from "@/components/ui/3d-interactive-timeline";

const timelineEvents: TimelineEvent[] = [
  {
    id: "1",
    date: "January 2022",
    title: "Project Genesis",
    description:
      "Initiated the groundbreaking project that would revolutionize how we interact with digital interfaces.",
    icon: <Code2 className="h-5 w-5 text-white" />,
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=80",
    category: "Development",
    link: {
      url: "#",
      text: "View Project Details",
    },
  },
  {
    id: "2",
    date: "March 2022",
    title: "First Major Milestone",
    description:
      "Achieved our first significant breakthrough with the core algorithm and exceeded performance benchmarks.",
    icon: <Trophy className="h-5 w-5 text-white" />,
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80",
    category: "Achievement",
    color: "emerald",
  },
  {
    id: "3",
    date: "June 2022",
    title: "Global Partnership",
    description:
      "Formed strategic alliances with international partners to expand implementation across multiple regions.",
    icon: <Globe className="h-5 w-5 text-white" />,
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
    category: "Partnership",
    color: "amber",
  },
  {
    id: "4",
    date: "October 2022",
    title: "Product Launch",
    description:
      "Successfully launched our flagship product to strong reception and rapid first-week adoption.",
    icon: <Briefcase className="h-5 w-5 text-white" />,
    image:
      "https://images.unsplash.com/photo-1596720426673-e4e14290f0cc?auto=format&fit=crop&w=1600&q=80",
    category: "Product",
    color: "rose",
    link: {
      url: "#",
      text: "See Launch Statistics",
    },
  },
  {
    id: "5",
    date: "February 2023",
    title: "Research Publication",
    description:
      "Published collaborative research paper describing methods now adopted by broader engineering teams.",
    icon: <BookOpen className="h-5 w-5 text-white" />,
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1600&q=80",
    category: "Research",
    color: "blue",
  },
];

const TimelineDemo = () => (
  <div className="min-h-screen bg-white">
    <Timeline3D
      events={timelineEvents}
      backgroundColor="bg-white"
      textColor="text-slate-900"
      primaryColor="bg-indigo-600"
      secondaryColor="bg-violet-500"
      accentColor="bg-emerald-500"
    />
  </div>
);

export default TimelineDemo;
