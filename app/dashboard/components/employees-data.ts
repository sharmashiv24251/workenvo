export type Employee = {
  id: string;
  name: string;
  designation: string;
  department: string;
  location: string;
  startDate: string;
  manager: string;
  avatarColor: string;
  performance: number;
  engagement: number;
  skills: string[];
  directReports: number;
};

export type TimelineTone = "positive" | "watch" | "neutral" | "reward" | "change";

export type EmployeeTimelineEvent = {
  date: string;
  year: string;
  title: string;
  body: string;
  tone: TimelineTone;
  icon: string;
  metric?: string;
};

export const employees: Employee[] = [
  {
    id: "EMP001",
    name: "Priya Sharma",
    designation: "VP of People",
    department: "Human Resources",
    location: "Mumbai, India",
    startDate: "Mar 2019",
    manager: "CEO",
    avatarColor: "#006841",
    performance: 94,
    engagement: 88,
    skills: ["Talent Strategy", "OKRs", "Culture Design", "Coaching"],
    directReports: 8,
  },
  {
    id: "EMP002",
    name: "Marcus Webb",
    designation: "Senior Software Engineer",
    department: "Engineering",
    location: "London, UK",
    startDate: "Jun 2021",
    manager: "Anita Roy",
    avatarColor: "#4338ca",
    performance: 89,
    engagement: 76,
    skills: ["TypeScript", "React", "Node.js", "System Design"],
    directReports: 0,
  },
  {
    id: "EMP003",
    name: "Chloe Laurent",
    designation: "Head of Marketing",
    department: "Marketing",
    location: "Paris, France",
    startDate: "Jan 2020",
    manager: "Priya Sharma",
    avatarColor: "#b54708",
    performance: 81,
    engagement: 63,
    skills: ["Brand Strategy", "Growth", "Storytelling", "Analytics"],
    directReports: 5,
  },
  {
    id: "EMP004",
    name: "Rajesh Nair",
    designation: "Product Manager",
    department: "Product",
    location: "Bengaluru, India",
    startDate: "Sep 2022",
    manager: "Marcus Webb",
    avatarColor: "#0e9384",
    performance: 87,
    engagement: 91,
    skills: ["Roadmapping", "User Research", "Figma", "Agile"],
    directReports: 2,
  },
  {
    id: "EMP005",
    name: "Sofia Martinez",
    designation: "Data Scientist",
    department: "Analytics",
    location: "Barcelona, Spain",
    startDate: "Nov 2021",
    manager: "Rajesh Nair",
    avatarColor: "#6941c6",
    performance: 92,
    engagement: 85,
    skills: ["Python", "ML Models", "SQL", "Dashboarding"],
    directReports: 0,
  },
  {
    id: "EMP006",
    name: "James Okafor",
    designation: "Sales Director",
    department: "Sales",
    location: "Lagos, Nigeria",
    startDate: "Feb 2018",
    manager: "CEO",
    avatarColor: "#c4320a",
    performance: 78,
    engagement: 72,
    skills: ["Enterprise Sales", "CRM", "Negotiation", "Pipeline Management"],
    directReports: 12,
  },
  {
    id: "EMP007",
    name: "Amelia Foster",
    designation: "UX Designer",
    department: "Design",
    location: "Sydney, Australia",
    startDate: "Jul 2023",
    manager: "Rajesh Nair",
    avatarColor: "#c11574",
    performance: 84,
    engagement: 93,
    skills: ["Figma", "Design Systems", "Prototyping", "Research"],
    directReports: 0,
  },
  {
    id: "EMP008",
    name: "Derek Huang",
    designation: "DevOps Engineer",
    department: "Engineering",
    location: "Singapore",
    startDate: "Apr 2022",
    manager: "Marcus Webb",
    avatarColor: "#027a48",
    performance: 90,
    engagement: 80,
    skills: ["Kubernetes", "CI/CD", "AWS", "Terraform"],
    directReports: 1,
  },
  {
    id: "EMP009",
    name: "Nina Patel",
    designation: "Finance Controller",
    department: "Finance",
    location: "Toronto, Canada",
    startDate: "Oct 2020",
    manager: "CEO",
    avatarColor: "#344054",
    performance: 95,
    engagement: 79,
    skills: ["Financial Modelling", "Compliance", "Forecasting", "SAP"],
    directReports: 3,
  },
  {
    id: "EMP010",
    name: "Luca Romano",
    designation: "Customer Success Manager",
    department: "Operations",
    location: "Milan, Italy",
    startDate: "Aug 2021",
    manager: "James Okafor",
    avatarColor: "#dc6803",
    performance: 83,
    engagement: 88,
    skills: ["Onboarding", "NPS", "Retention", "HubSpot"],
    directReports: 0,
  },
];

export const employeeTimelineById: Record<string, EmployeeTimelineEvent[]> = {
  EMP001: [
    { date: "04/12/2023", year: "2023", title: "People model rebuilt", body: "Moved HR partners into product-aligned pods and reduced escalation time across the org.", tone: "positive", icon: "account_tree", metric: "31% faster" },
    { date: "08/09/2023", year: "2023", title: "Manager trust dip", body: "Pulse comments flagged inconsistent feedback quality across Product and Sales.", tone: "watch", icon: "warning" },
    { date: "11/18/2023", year: "2023", title: "Recognition system launched", body: "Introduced quarterly values awards tied to peer nominations and customer impact.", tone: "reward", icon: "workspace_premium" },
    { date: "02/21/2024", year: "2024", title: "Promotion calibration issue", body: "Finance and Sales reported unclear leveling signals during cycle close.", tone: "watch", icon: "assignment_late" },
    { date: "06/14/2024", year: "2024", title: "Burnout pattern reported", body: "Workenvo signals showed repeated late-night activity and low recovery sentiment.", tone: "watch", icon: "local_fire_department", metric: "High risk" },
    { date: "09/03/2024", year: "2024", title: "Recovery plan completed", body: "Delegated two programs, restored weekly focus blocks, and sentiment rebounded.", tone: "positive", icon: "health_and_safety" },
    { date: "01/22/2025", year: "2025", title: "Leadership bench improved", body: "Built a successor slate for People Ops and L&D roles.", tone: "positive", icon: "groups" },
    { date: "10/08/2025", year: "2025", title: "Cross-region friction", body: "APAC rollout feedback noted slow approvals and duplicated policy work.", tone: "watch", icon: "sync_problem" },
    { date: "03/19/2026", year: "2026", title: "Culture index milestone", body: "Team reached the highest inclusion score in the four-year trend.", tone: "reward", icon: "emoji_events", metric: "92 index" },
  ],
  EMP002: [
    { date: "06/08/2021", year: "2021", title: "Joined Engineering", body: "Started as a backend-focused engineer on the integrations squad.", tone: "neutral", icon: "flag" },
    { date: "04/17/2023", year: "2023", title: "Promoted to senior engineer", body: "Owned API reliability work and mentored two mid-level developers.", tone: "reward", icon: "military_tech" },
    { date: "10/26/2023", year: "2023", title: "Incident recovery lead", body: "Led a calm post-incident response after a CRM sync failure.", tone: "positive", icon: "shield" },
    { date: "02/12/2024", year: "2024", title: "Documentation gap", body: "Manager noted strong delivery but inconsistent handoff notes for platform changes.", tone: "watch", icon: "description" },
    { date: "06/18/2024", year: "2024", title: "Reported burnout", body: "Self-reported sustained fatigue after three release cycles with weekend patches.", tone: "watch", icon: "local_fire_department", metric: "Burnout" },
    { date: "09/06/2024", year: "2024", title: "Scope reset", body: "Moved from two parallel initiatives to one platform charter with cleaner ownership.", tone: "change", icon: "swap_horiz" },
    { date: "05/14/2025", year: "2025", title: "Reliability achievement", body: "Reduced background job failures with queue observability and retry tuning.", tone: "positive", icon: "trending_up", metric: "42% fewer" },
    { date: "12/02/2025", year: "2025", title: "Peer feedback issue", body: "Design partners asked for earlier technical feasibility reviews.", tone: "watch", icon: "forum" },
    { date: "04/11/2026", year: "2026", title: "Architecture guild lead", body: "Now leading monthly reviews for integration patterns and service boundaries.", tone: "reward", icon: "hub" },
  ],
  EMP003: [
    { date: "01/13/2020", year: "2020", title: "Joined Marketing", body: "Built the first global lifecycle marketing plan for Workenvo.", tone: "neutral", icon: "flag" },
    { date: "04/04/2023", year: "2023", title: "Brand repositioning", body: "Shifted messaging from HR tooling to behavioral intelligence.", tone: "change", icon: "switch_access_shortcut" },
    { date: "08/28/2023", year: "2023", title: "Campaign miss", body: "A regional launch underperformed because sales enablement arrived late.", tone: "watch", icon: "campaign" },
    { date: "01/30/2024", year: "2024", title: "Growth pod formed", body: "Created a shared analytics pod with Sales and Customer Success.", tone: "positive", icon: "groups" },
    { date: "06/07/2024", year: "2024", title: "Energy drop noted", body: "Manager review flagged meeting load and unclear agency ownership.", tone: "watch", icon: "battery_alert" },
    { date: "11/15/2024", year: "2024", title: "Pipeline acceleration", body: "New executive webinar series became the strongest sourced channel.", tone: "reward", icon: "north_east", metric: "18% lift" },
    { date: "07/23/2025", year: "2025", title: "Team churn risk", body: "Two high performers showed low belonging scores after reorg pressure.", tone: "watch", icon: "person_alert" },
    { date: "02/10/2026", year: "2026", title: "Narrative award", body: "Won internal recognition for simplifying enterprise buyer storytelling.", tone: "reward", icon: "emoji_events" },
  ],
};

export function getEmployeeTimeline(employee: Employee): EmployeeTimelineEvent[] {
  return employeeTimelineById[employee.id] ?? [
    { date: employee.startDate, year: "2022", title: "Joined Workenvo", body: `Started in ${employee.department} under ${employee.manager}.`, tone: "neutral", icon: "flag" },
    { date: "04/18/2023", year: "2023", title: "Role clarity improved", body: "Moved into a clearer quarterly ownership model with sharper success measures.", tone: "positive", icon: "check_circle" },
    { date: "09/05/2023", year: "2023", title: "Collaboration friction", body: "Peer feedback mentioned slow responses during a cross-functional delivery cycle.", tone: "watch", icon: "forum" },
    { date: "01/16/2024", year: "2024", title: "Skill expansion", body: `Added stronger depth in ${employee.skills[0]} and ${employee.skills[1]}.`, tone: "positive", icon: "school" },
    { date: "06/20/2024", year: "2024", title: "Burnout signal reported", body: "Survey sentiment and calendar load indicated recovery risk after a heavy quarter.", tone: "watch", icon: "local_fire_department", metric: "Watch" },
    { date: "10/09/2024", year: "2024", title: "Workload reset", body: "Manager reduced meeting load and clarified priority tradeoffs.", tone: "change", icon: "swap_horiz" },
    { date: "04/24/2025", year: "2025", title: "Achievement logged", body: "Delivered a department-level initiative with strong stakeholder feedback.", tone: "reward", icon: "emoji_events" },
    { date: "11/13/2025", year: "2025", title: "Development gap", body: "Needs more consistent written updates before major decision points.", tone: "watch", icon: "assignment_late" },
    { date: "03/26/2026", year: "2026", title: "Momentum restored", body: "Latest engagement pulse shows stronger energy, clarity, and manager trust.", tone: "positive", icon: "trending_up" },
  ];
}

export function getEmployeeById(employeeId: string) {
  return employees.find((employee) => employee.id.toLowerCase() === employeeId.toLowerCase());
}

export function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}
