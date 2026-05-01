import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import DashboardIcon from "../../components/dashboard-icon";
import {
  employees,
  getEmployeeById,
  getEmployeeTimeline,
  getInitials,
  type EmployeeTimelineEvent,
  type TimelineTone,
} from "../../components/employees-data";
import styles from "../../dashboard.module.css";

type EmployeeDetailPageProps = {
  params: Promise<{ employeeId: string }>;
};

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

export async function generateMetadata({
  params,
}: EmployeeDetailPageProps): Promise<Metadata> {
  const { employeeId } = await params;
  const employee = getEmployeeById(employeeId);

  return {
    title: employee ? `Workenvo | ${employee.name}` : "Workenvo | Employee",
  };
}

export function generateStaticParams() {
  return employees.map((employee) => ({
    employeeId: employee.id.toLowerCase(),
  }));
}

function ScorePill({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="rounded-[1.25rem] bg-[#f6f3f2] p-4">
      <div className="flex items-baseline justify-between gap-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#3e4941]">
          {label}
        </p>
        <span className="text-2xl font-black text-[#1c1b1b]">{value}%</span>
      </div>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#e5e2e1]">
        <div className="h-full rounded-full" style={{ width: `${value}%`, backgroundColor: color }} />
      </div>
    </div>
  );
}

function TimelineCard({
  event,
  index,
}: {
  event: EmployeeTimelineEvent;
  index: number;
}) {
  const tone = toneStyles[event.tone];
  const isLeft = index % 2 === 0;

  return (
    <article className="relative grid gap-4 md:grid-cols-[minmax(0,1fr)_72px_minmax(0,1fr)] md:items-center">
      <div className={isLeft ? "md:col-start-1 md:text-right" : "md:col-start-3"}>
        <div className="inline-flex max-w-md flex-col rounded-[1.5rem] bg-white px-5 py-4 shadow-[0_20px_60px_-34px_rgba(0,104,65,0.45)]">
          <div className={`flex items-center gap-2 ${isLeft ? "md:justify-end" : ""}`}>
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

      <div className="absolute left-3 top-2 h-full w-1 rounded-full bg-gradient-to-b from-[#f3a66a] via-[#d5b5ff] to-[#8fe3b3] md:left-1/2 md:-translate-x-1/2" />
      <div className="relative z-10 ml-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#fcf9f8] md:col-start-2 md:mx-auto">
        <span className={`h-4 w-4 rounded-full ${tone.dot} ${tone.glow}`} />
      </div>
    </article>
  );
}

export default async function EmployeeDetailPage({ params }: EmployeeDetailPageProps) {
  const { employeeId } = await params;
  const employee = getEmployeeById(employeeId);

  if (!employee) {
    notFound();
  }

  const timeline = getEmployeeTimeline(employee);
  const featuredYear = timeline.find((event) => event.year === "2022")?.year ?? "2024";
  const riskLevel = employee.engagement < 70 ? "Needs attention" : employee.engagement < 82 ? "Monitor" : "Stable";
  const riskColor = employee.engagement < 70 ? "#b54708" : employee.engagement < 82 ? "#c4320a" : "#006841";

  return (
    <div className="space-y-6">
      <Link
        href="/dashboard/envo-employees"
        className="inline-flex items-center gap-2 rounded-full bg-[#ebe7e7] px-4 py-2 text-sm font-bold text-[#3e4941] transition-all hover:bg-[#e5e2e1]"
      >
        <DashboardIcon name="arrow_back" className="text-[18px]" />
        Employees
      </Link>

      <section className={`rounded-[2rem] bg-white pb-24 md:pb-0 ${styles.ambientShadow}`}>
        <div className="relative overflow-hidden rounded-t-[2rem] bg-[#fcf9f8] px-6 py-8 sm:px-10">
          <div className="pointer-events-none absolute -left-1 top-2 select-none text-[8rem] font-black leading-none tracking-normal text-[#1c1b1b]/5 sm:text-[12rem] md:text-[15rem]">
            {featuredYear}
          </div>
          <div className="relative z-10 flex min-h-[210px] items-end gap-6">
            <div
              className="flex h-32 w-32 flex-shrink-0 items-center justify-center rounded-full text-4xl font-black text-white shadow-[0_18px_50px_-18px_rgba(0,104,65,0.45)]"
              style={{ backgroundColor: employee.avatarColor }}
            >
              {getInitials(employee.name)}
            </div>
            <div className="pb-2">
              <span className="rounded-full bg-[#006841]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-[#006841]">
                Employee story
              </span>
              <h1 className="mt-4 text-4xl font-black tracking-tight text-[#1c1b1b] md:text-5xl">
                {employee.name}
              </h1>
              <p className="mt-2 text-base font-semibold text-[#3e4941]">
                {employee.designation} / {employee.department}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 px-6 py-5 sm:px-10 sm:py-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
          <div className="rounded-[1.75rem] bg-[#fcf9f8] px-5 py-4 sm:px-8 sm:py-8">
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3 sm:mb-8 sm:gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#006841]">
                  Four-year timeline
                </p>
                <h2 className="mt-2 text-xl font-black tracking-tight text-[#1c1b1b] sm:text-2xl">
                  Milestones, risks, achievements
                </h2>
              </div>
              <span className="rounded-full bg-[#ebe7e7] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#3e4941]">
                {timeline.length} signals
              </span>
            </div>

            <div className="space-y-8 pl-9 md:pl-0">
              {timeline.map((event, index) => (
                <TimelineCard key={`${event.date}-${event.title}`} event={event} index={index} />
              ))}
            </div>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-8 lg:self-start">
            <div className="rounded-[1.5rem] bg-[#f6f3f2] p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#3e4941]">
                    Current state
                  </p>
                  <p className="mt-1 text-xl font-black text-[#1c1b1b]">{riskLevel}</p>
                </div>
                <span
                  className="h-12 w-12 rounded-full"
                  style={{ backgroundColor: riskColor }}
                />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-1">
                <ScorePill label="Performance" value={employee.performance} color={employee.avatarColor} />
                <ScorePill label="Engagement" value={employee.engagement} color="#008454" />
              </div>
            </div>

            <div className="rounded-[1.5rem] bg-[#f6f3f2] p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#3e4941]">
                Profile
              </p>
              <dl className="mt-4 space-y-4">
                {[
                  ["Employee ID", employee.id],
                  ["Manager", employee.manager],
                  ["Location", employee.location],
                  ["Joined", employee.startDate],
                  ["Direct Reports", String(employee.directReports)],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between gap-4">
                    <dt className="text-xs font-semibold text-[#3e4941]">{label}</dt>
                    <dd className="text-right text-sm font-black text-[#1c1b1b]">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-[1.5rem] bg-[#f6f3f2] p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#3e4941]">
                Skills
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {employee.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#006841]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
