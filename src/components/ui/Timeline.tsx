"use client";

import { useState } from "react";

interface TimelineItem {
    year: string;
    title: string;
    description: string;
    icon: string;
}

const timelineData: TimelineItem[] = [
    {
        year: "2016",
        title: "First steps",
        description: "Wrote my first aim assist (cheat software) for Counter-Strike: Global Offensive and discovered my passion for how computers work",
        icon: "rocket_launch"
    },
    {
        year: "2020",
        title: "Vocational School for Information Technology",
        description: "Passed the entrance exam into the \"Informatikmittelschule Basel-Stadt\" (Vocational School focusing on IT in Basel) after which I started actually learning stuff",
        icon: "school"
    },
    {
        year: "2023",
        title: "Internship as Informatiker EFZ Applikationsentwicklung",
        description: "Started a 1-year internship in Basel, gaining hands-on experience in the industry & in order to graduate high school.",
        icon: "code"
    },
    {
        year: "2024",
        title: "Job as System Engineer",
        description: "Temporarily worked as a System Engineer at the same company as my internship before my Military Service.",
        icon: "work"
    },
    {
        year: "2025",
        title: "Mandatory National Service",
        description: "Fulfilled federal service obligations (Military/Civil Protection).",
        icon: "military_tech"
    },
    {
        year: "2025",
        title: "B.Sc. Computer Science at FHNW",
        description: "Began my Bachelors in Computer Science, focusing on software engineering and distributed systems.",
        icon: "school"
    }
];

export default function Timeline() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <div className="relative border-l border-border ml-3 my-8 space-y-8">
            {timelineData.map((item, index) => (
                <div 
                    key={index} 
                    className="relative pl-6 group cursor-pointer"
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                >
                    {/* dot indicator */}
                    <div 
                        className={`absolute -left-1.25 top-1.5 h-2.5 w-2.5 rounded-full border transition-all duration-300 ${
                            activeIndex === index 
                                ? "bg-ink border-ink scale-125" 
                                : "bg-bg border-muted group-hover:border-ink"
                        }`}
                    />
                    
                    {/* COntent */}
                    <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                        <span className={`mt-0.5 text-xs font-mono font-medium transition-colors duration-300 ${
                            activeIndex === index ? "text-ink" : "text-muted"
                        }`}>
                            {item.year}
                        </span>
                        
                        <div className="flex-1">
                            <h3 className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                                activeIndex === index ? "text-ink" : "text-ink/80"
                            }`}>
                                <span className="material-icons-outlined text-base leading-none">
                                    {item.icon}
                                </span>
                                {item.title}
                            </h3>
                            
                            <div 
                                className={`grid transition-all duration-300 ease-in-out ${
                                    activeIndex === index 
                                        ? "grid-rows-[1fr] opacity-100 mt-2" 
                                        : "grid-rows-[0fr] opacity-0"
                                }`}
                            >
                                <p className="overflow-hidden text-xs leading-relaxed text-muted">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}