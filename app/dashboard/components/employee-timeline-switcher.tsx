"use client";

import { useMemo, useState } from "react";
import styles from "../dashboard.module.css";
import DashboardIcon from "./dashboard-icon";
import type { EmployeeTimelineEvent, TimelineTone } from "./employees-data";

type TimelineType = "all" | "risk" | "reward" | "change" | "review" | "admin";

const typeSwitches: Array<{ key: TimelineType; label: string }> = [
  { key: "all", label: "All" },
  { key: "risk", label: "Risk" },
  { key: "reward", label: "Rewards" },
  { key: "change", label: "Changes" },
  { key: "review", label: "Reviews" },
  { key: "admin", label: "Admin" },
];

const toneStyles: Record<TimelineTone, {
  chip: string;
  dot: string;
  glow: string;
  text: string;
}> = {
  positive: {
    chip: "bg-[#dff7e9] text-[#006841]",
    dot: "bg-[#8fe3b3]",
    glow: "shadow-[0_0_0_8px_rgba(143,227,179,0.24)]",
    text: "text-[#006841]",
  },
  watch: {
    chip: "bg-[#fde8db] text-[#b54708]",
    dot: "bg-[#f3a66a]",
    glow: "shadow-[0_0_0_8px_rgba(243,166,106,0.22)]",
    text: "text-[#b54708]",
  },
  neutral: {
    chip: "bg-[#ebe7e7] text-[#3e4941]",
    dot: "bg-[#c9c4c2]",
    glow: "shadow-[0_0_0_8px_rgba(201,196,194,0.24)]",
    text: "text-[#3e4941]",
  },
  reward: {
    chip: "bg-[#fff1ce] text-[#a15c00]",
    dot: "bg-[#ffc75f]",
    glow: "shadow-[0_0_0_8px_rgba(255,199,95,0.22)]",
    text: "text-[#a15c00]",
  },
  change: {
    chip: "bg-[#efe4ff] text-[#7b4ac7]",
    dot: "bg-[#d5b5ff]",
    glow: "shadow-[0_0_0_8px_rgba(213,181,255,0.22)]",
    text: "text-[#7b4ac7]",
  },
};

function getTimelineType(event: EmployeeTimelineEvent): TimelineType {
  const title = event.title.toLowerCase();

  if (event.tone === "watch" || title.includes("burnout") || title.includes("risk")) {
    return "risk";
  }

  if (title.includes("review") || title.includes("evaluation")) {
    return "review";
  }

  if (
    title.includes("leave") ||
    title.includes("certification") ||
    title.includes("onboarding") ||
    title.includes("compliance")
  ) {
    return "admin";
  }

  if (event.tone === "change" || title.includes("changed department")) {
    return "change";
  }

  if (event.tone === "reward" || title.includes("raise") || title.includes("achievement")) {
    return "reward";
  }

  return "all";
}

function TimelineCard({
  event,
  index,
  isLatest,
}: {
  event: EmployeeTimelineEvent;
  index: number;
  isLatest: boolean;
}) {
  const tone = isLatest ? toneStyles.positive : toneStyles[event.tone];
  const isLeft = index % 2 === 0;

  return (
    <article
      className={`relative grid gap-3 md:grid-cols-[minmax(0,1fr)_52px_minmax(0,1fr)] md:items-center ${styles.timelineItem}`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className={isLeft ? "md:col-start-1 md:justify-self-end" : "md:col-start-3 md:justify-self-start"}>
        <div className="inline-flex w-full min-w-0 max-w-[28rem] flex-col rounded-[1.25rem] bg-white px-5 py-4 shadow-[0_18px_48px_-34px_rgba(0,104,65,0.42)]">
          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${tone.chip}`}>
              <DashboardIcon name={event.icon} className="text-[17px]" />
              {event.title}
            </span>
            {event.metric && (
              <span className="rounded-full bg-[#f6f3f2] px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#3e4941]">
                {event.metric}
              </span>
            )}
          </div>
          <p className={`mt-2 text-xs font-bold ${tone.text}`}>{event.date}</p>
          <p className="mt-3 text-sm leading-6 text-[#3e4941]">{event.body}</p>
        </div>
      </div>

      <div className="relative z-10 ml-0 flex h-8 w-8 items-center justify-center rounded-full bg-white md:col-start-2 md:mx-auto">
        <span className={`h-4 w-4 rounded-full ${tone.dot} ${isLatest ? styles.latestDot : tone.glow}`} />
      </div>
    </article>
  );
}

export default function EmployeeTimelineSwitcher({
  timeline,
}: {
  timeline: EmployeeTimelineEvent[];
}) {
  const [activeType, setActiveType] = useState<TimelineType>("all");
  const [activeYear, setActiveYear] = useState<string>("all");
  const years = useMemo(() => Array.from(new Set(timeline.map((event) => event.year))), [timeline]);
  const filteredTimeline = timeline.filter((event) => {
    const typeMatch = activeType === "all" || getTimelineType(event) === activeType;
    const yearMatch = activeYear === "all" || event.year === activeYear;

    return typeMatch && yearMatch;
  });

  return (
    <div className="px-1 py-2 sm:px-0 sm:py-4">
      <div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#006841]">
            Four-year timeline
          </p>
          <h2 className={`mt-2 text-4xl leading-none text-[#1c1b1b] sm:text-6xl ${styles.displaySerif}`}>
            Signals worth scanning
          </h2>
        </div>
      </div>

      <div className="mt-7 flex flex-wrap gap-2">
        {typeSwitches.map((type) => {
          const isActive = type.key === activeType;

          return (
            <button
              key={type.key}
              type="button"
              onClick={() => setActiveType(type.key)}
              className={
                isActive
                  ? "rounded-full bg-[#006841]/90 px-3.5 py-1.5 text-[11px] font-black text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.34)]"
                  : "rounded-full bg-white/80 px-3.5 py-1.5 text-[11px] font-bold text-[#3e4941] transition-colors hover:bg-[#ebe7e7]"
              }
            >
              {type.label}
            </button>
          );
        })}
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveYear("all")}
          className={
            activeYear === "all"
              ? "rounded-full bg-[#006841]/90 px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-white"
              : "rounded-full bg-[#006841]/8 px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-[#006841] transition-colors hover:bg-[#006841]/15"
          }
        >
          All
        </button>
        {years.map((year) => {
          const isActive = year === activeYear;

          return (
            <button
              key={year}
              type="button"
              onClick={() => setActiveYear(isActive ? "all" : year)}
              className={
                isActive
                  ? "rounded-full bg-[#006841]/90 px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-white"
                  : "rounded-full bg-[#006841]/8 px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-[#006841] transition-colors hover:bg-[#006841]/15"
              }
            >
              {year}
            </button>
          );
        })}
      </div>

      <div className="relative mt-9 space-y-6 pl-9 md:pl-0">
        <div className="absolute left-3 top-4 bottom-4 w-1 rounded-full bg-[#dcefe6] md:left-1/2 md:-translate-x-1/2" />
        {filteredTimeline.map((event, index) => (
          <TimelineCard
            key={`${event.date}-${event.title}`}
            event={event}
            index={index}
            isLatest={timeline[0] === event}
          />
        ))}
      </div>
    </div>
  );
}
