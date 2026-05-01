import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import DashboardIcon from "../../components/dashboard-icon";
import EmployeeTimelineSwitcher from "../../components/employee-timeline-switcher";
import {
  employees,
  getEmployeeById,
  getEmployeeTimeline,
  getInitials,
} from "../../components/employees-data";
import styles from "../../dashboard.module.css";

type EmployeeDetailPageProps = {
  params: Promise<{ employeeId: string }>;
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
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#3e4941]">
          {label}
        </p>
        <span className="text-xl font-black text-[#1c1b1b]">{value}%</span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#e5e2e1]">
        <div className="h-full rounded-full" style={{ width: `${value}%`, backgroundColor: color }} />
      </div>
    </div>
  );
}

export default async function EmployeeDetailPage({ params }: EmployeeDetailPageProps) {
  const { employeeId } = await params;
  const employee = getEmployeeById(employeeId);

  if (!employee) {
    notFound();
  }

  const timeline = [...getEmployeeTimeline(employee)].reverse();
  const featuredYear = timeline[0]?.year ?? "2026";
  const riskLevel = employee.engagement < 70 ? "Needs attention" : employee.engagement < 82 ? "Monitor" : "Stable";
  const riskColor = employee.engagement < 70 ? "#b54708" : employee.engagement < 82 ? "#c4320a" : "#006841";
  const stateNote = employee.engagement >= 82
    ? "High engagement and strong performance with no unresolved recent risk."
    : employee.engagement >= 70
      ? "Good output, with a few recent signals worth watching."
      : "Recent people signals need manager follow-up.";

  return (
    <div className="space-y-6">
      <Link
        href="/dashboard/envo-employees"
        className="inline-flex items-center gap-2 rounded-full bg-[#ebe7e7] px-4 py-2 text-sm font-bold text-[#3e4941] transition-all hover:bg-[#e5e2e1]"
      >
        <DashboardIcon name="arrow_back" className="text-[18px]" />
        Employees
      </Link>

      <section className={`@container rounded-[2rem] bg-white pb-24 md:pb-0 ${styles.ambientShadow}`}>
        <div className="relative overflow-hidden rounded-t-[2rem] bg-[#fbf8f7] px-6 py-8 sm:px-10">
          <div className={`pointer-events-none absolute -left-1 top-2 select-none text-[8rem] leading-none text-[#1c1b1b]/5 sm:text-[12rem] md:text-[15rem] ${styles.displaySerif}`}>
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
              <h1 className={`mt-4 text-5xl leading-none text-[#1c1b1b] md:text-6xl ${styles.displaySerif}`}>
                {employee.name}
              </h1>
              <p className="mt-2 text-base font-semibold text-[#3e4941]">
                {employee.designation} / {employee.department}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 bg-white px-6 py-5 sm:px-5 sm:py-6 @min-[960px]:grid-cols-[minmax(0,1fr)_300px] @min-[960px]:items-start">
          <EmployeeTimelineSwitcher timeline={timeline} />

          <aside className="space-y-3 @min-[960px]:sticky @min-[960px]:top-8 @min-[960px]:self-start">
            <div className="rounded-[1.25rem] bg-[#f6f3f2] p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#3e4941]">
                    Current state
                  </p>
                  <p className={`mt-1 text-2xl leading-none text-[#1c1b1b] ${styles.displaySerif}`}>
                    {riskLevel}
                  </p>
                  <p className="mt-2 max-w-48 text-xs leading-5 text-[#3e4941]">
                    {stateNote}
                  </p>
                </div>
                <span
                  className="h-10 w-10 flex-shrink-0 rounded-full"
                  style={{ backgroundColor: riskColor }}
                />
              </div>
              <div className="mt-3 grid gap-3">
                <ScorePill label="Performance" value={employee.performance} color={employee.avatarColor} />
                <ScorePill label="Engagement" value={employee.engagement} color="#008454" />
              </div>
            </div>

            <div className="rounded-[1.25rem] bg-[#f6f3f2] p-4">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#3e4941]">
                Profile
              </p>
              <dl className="mt-3 space-y-3">
                {[
                  ["Employee ID", employee.id],
                  ["Manager", employee.manager],
                  ["Location", employee.location],
                  ["Joined", employee.startDate],
                  ["Direct Reports", String(employee.directReports)],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between gap-3">
                    <dt className="text-xs font-semibold text-[#3e4941]">{label}</dt>
                    <dd className="text-right text-xs font-black text-[#1c1b1b]">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-[1.25rem] bg-[#f6f3f2] p-4">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#3e4941]">
                Skills
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {employee.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-white px-2.5 py-1 text-[11px] font-bold text-[#006841]"
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
