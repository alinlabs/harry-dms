import { LucideIcon } from 'lucide-react';

export enum SectionType {
  INTRO = 'INTRO',
  FOUNDATION = 'FOUNDATION',
  STRATEGY = 'STRATEGY',
  PORTFOLIO = 'PORTFOLIO',
  GTM = 'GTM',
  TEAM_MANAGEMENT = 'TEAM_MANAGEMENT',
  TARGETS_ROADMAP = 'TARGETS_ROADMAP'
}

export interface ChartDataPoint {
  name: string;
  value: number;
  secondary?: number;
  category?: string;
}

export interface StrategicPriority {
  id: number;
  title: string;
  category: string;
  summary: string;
  details: string[];
  kpi: string;
  iconName?: string;
}

export interface AuditDimension {
  id: number;
  dimension: string;
  scope: string;
  objective: string;
  status: 'Critical' | 'High' | 'Immediate';
}

export interface CompetitorProfile {
  name: string;
  tier: 'Tier 1' | 'Tier 2' | 'Tier 3';
  focus: string;
  strengths: string[];
  dmsImplication: string;
}

export interface ProductPortfolioItem {
  id: string;
  title: string;
  tagline: string;
  targetMarket: string[];
  gtmStrategy: string[];
  kpis: string[];
  modelDetails: {
    packaging: string;
    pricingApproach: string;
    partners: string;
    riskMitigation: string;
  };
}

export interface TeamMemberRole {
  role: string;
  title: string;
  status: 'Existing' | 'Must Recruit';
  focus: string;
  responsibilities: string[];
  kpiContribution: string;
}

export interface KpiWeight {
  metric: string;
  weight: number;
  description: string;
  targetFocus: string;
}

export interface DealQualificationCriteria {
  number: number;
  field: string;
  description: string;
  verificationEvidence: string;
}

export interface RoadmapPhase {
  phase: string;
  period: string;
  focus: string;
  deliverables: string[];
  successIndicators: string[];
}
