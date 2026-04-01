import DashboardHeader from "./header";
import DashboardIcon from "./dashboard-icon";

type PlaceholderPageProps = {
  tag: string;
  title: string;
  icon: string;
  description: string;
  cta: string;
};

export default function PlaceholderPage({
  tag,
  title,
  icon,
  description,
  cta,
}: PlaceholderPageProps) {
  return (
    <>
      <DashboardHeader tag={tag} title={title} ctaSecondary="" ctaPrimary="" />

      <div className="flex flex-1 items-center justify-center py-16">
        <div className="mx-auto flex w-full max-w-[480px] flex-col items-center gap-6 rounded-[2rem] bg-white p-10 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#006841]/10">
            <DashboardIcon name={icon} className="text-[32px] text-[#006841]" />
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-bold tracking-tight text-[#1c1b1b]">
              {title}
            </h2>
            <p className="text-sm leading-relaxed text-stone-400">
              Coming soon — this section is under development
            </p>
            <p className="text-sm leading-relaxed text-stone-500">
              {description}
            </p>
          </div>

          <button className="rounded-full bg-[#006841]/10 px-6 py-2.5 text-sm font-semibold text-[#006841] transition-all hover:bg-[#006841]/15">
            {cta}
          </button>
        </div>
      </div>
    </>
  );
}
