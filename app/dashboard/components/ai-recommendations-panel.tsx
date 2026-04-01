import DashboardIcon from "./dashboard-icon";
import { ImpactBadge, ImpactComparison, type ImpactEntry } from "./action-impact-log";

type AIRecommendationsPanelProps = {
  insight: string;
  because: string;
  recommendation: string;
  ctaLabel: string;
  impacts: ImpactEntry[];
};

export default function AIRecommendationsPanel({
  insight,
  because,
  recommendation,
  ctaLabel,
  impacts,
}: AIRecommendationsPanelProps) {
  return (
    <div className="flex flex-col justify-between space-y-8 rounded-[1.5rem] bg-[#008454] p-6 text-white md:col-span-4">
      <div>
        <div className="mb-6 flex items-center gap-2">
          <DashboardIcon name="auto_awesome" fill className="text-[24px]" />
          <h2 className="text-xl font-bold tracking-tight">
            What matters and what to do next
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-[1rem] border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#8ff8b4]">
              Primary Insight
            </p>
            <p className="text-sm leading-relaxed">{insight}</p>
          </div>

          <div className="rounded-[1rem] border border-white/10 bg-white/8 p-4 pl-5 backdrop-blur-sm">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#8ff8b4]">
              Because
            </p>
            <p className="text-[13px] leading-relaxed text-white/85">
              Because: {because}
            </p>
          </div>

          <div className="rounded-[1rem] border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#8ff8b4]">
              Recommendation
            </p>
            <p className="text-sm leading-relaxed">{recommendation}</p>
          </div>
        </div>
      </div>

      <button className="w-full rounded-full bg-white py-3 font-bold text-[#006841] transition-all hover:bg-stone-100 active:scale-95">
        {ctaLabel}
      </button>

      <div className="border-t border-white/15 pt-5">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#8ff8b4]">
          Recent Actions &amp; Impact
        </p>
        <div className="space-y-3">
          {impacts.map((impact) => (
            <div
              key={`${impact.action}-${impact.date}`}
              className="rounded-[1rem] border border-white/10 bg-white/8 p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-white">{impact.action}</p>
                  <p className="mt-1 text-[12px] text-white/75">
                    {impact.date} · Triggered by {impact.triggeredBy}
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/85">
                    {impact.result}
                  </p>
                </div>
                <ImpactBadge outcome={impact.outcome} />
              </div>
              <div className="mt-3">
                <ImpactComparison
                  before={impact.before}
                  after={impact.after}
                  outcome={impact.outcome}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
