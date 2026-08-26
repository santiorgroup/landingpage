"use client";

/* Minimal stroke-icon set (no external deps) — each accepts className for sizing/color */

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
};

export function IconUsers({ className }) {
  return (
    <svg className={className} {...base}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="10" cy="7" r="3.4" />
      <path d="M21 21v-2a4 4 0 0 0-2.6-3.75" />
      <path d="M16 3.6a3.4 3.4 0 0 1 0 6.6" />
    </svg>
  );
}

export function IconTarget({ className }) {
  return (
    <svg className={className} {...base}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.8" />
      <circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconTrendingUp({ className }) {
  return (
    <svg className={className} {...base}>
      <path d="M3 17l6.2-6.2 4 4L21 6.5" />
      <path d="M15 6h6v6" />
    </svg>
  );
}

export function IconBuilding({ className }) {
  return (
    <svg className={className} {...base}>
      <rect x="5" y="3.5" width="10" height="17" rx="0.6" />
      <path d="M17.5 9.5H19a1.5 1.5 0 0 1 1.5 1.5v9" />
      <path d="M8 7.5h.01M11.5 7.5h.01M8 11h.01M11.5 11h.01M8 14.5h.01M11.5 14.5h.01" />
      <path d="M9 20.5v-3.6h2v3.6" />
    </svg>
  );
}

export function IconCalendarCheck({ className }) {
  return (
    <svg className={className} {...base}>
      <rect x="3.5" y="4.8" width="17" height="16" rx="1.6" />
      <path d="M3.5 9.5h17" />
      <path d="M8 3v3.4M16 3v3.4" />
      <path d="M9 14.5l2 2 4-4.2" />
    </svg>
  );
}

export function IconGear({ className }) {
  return (
    <svg className={className} {...base}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M19.4 13.6a1.6 1.6 0 0 0 .32 1.76l.06.06a2 2 0 1 1-2.82 2.82l-.06-.06a1.6 1.6 0 0 0-1.76-.32 1.6 1.6 0 0 0-1 1.46V19.5a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-1-1.46 1.6 1.6 0 0 0-1.76.32l-.06.06a2 2 0 1 1-2.82-2.82l.06-.06a1.6 1.6 0 0 0 .32-1.76 1.6 1.6 0 0 0-1.46-1H3.5a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.46-1 1.6 1.6 0 0 0-.32-1.76l-.06-.06A2 2 0 1 1 7.5 4.68l.06.06a1.6 1.6 0 0 0 1.76.32H9.4a1.6 1.6 0 0 0 1-1.46V3.5a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.46 1.6 1.6 0 0 0 1.76-.32l.06-.06a2 2 0 1 1 2.82 2.82l-.06.06a1.6 1.6 0 0 0-.32 1.76v.08a1.6 1.6 0 0 0 1.46 1h.1a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.46 1z" />
    </svg>
  );
}

export function IconBarChart({ className }) {
  return (
    <svg className={className} {...base}>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    </svg>
  );
}

export function IconFileEdit({ className }) {
  return (
    <svg className={className} {...base}>
      <path d="M13 3.5H6.5A1.5 1.5 0 0 0 5 5v14a1.5 1.5 0 0 0 1.5 1.5h11A1.5 1.5 0 0 0 19 19v-8" />
      <path d="M13 3.5 19 9.5" />
      <path d="M9 14.2l6-6 2 2-6 6H9v-2z" />
    </svg>
  );
}

export function IconClipboardCheck({ className }) {
  return (
    <svg className={className} {...base}>
      <rect x="5.5" y="4" width="13" height="17" rx="1.4" />
      <path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H9V4z" />
      <path d="M9 13.5l2 2 4-4.4" />
    </svg>
  );
}

export function IconBox({ className }) {
  return (
    <svg className={className} {...base}>
      <path d="M3.5 8.2 12 3.5l8.5 4.7v8.1L12 20.9 3.5 16.3z" />
      <path d="M3.5 8.2 12 12.9l8.5-4.7" />
      <path d="M12 12.9v8" />
    </svg>
  );
}

export function IconGearCheck({ className }) {
  return (
    <svg className={className} {...base}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M9 12.3l2 2 4-4.4" />
    </svg>
  );
}

export function IconShieldCheck({ className }) {
  return (
    <svg className={className} {...base}>
      <path d="M12 3.2l7 2.8v6c0 4.5-3 7.7-7 8.8-4-1.1-7-4.3-7-8.8V6z" />
      <path d="M9 12l2 2 4-4.4" />
    </svg>
  );
}

export function IconArrowRight({ className }) {
  return (
    <svg className={className} {...base}>
      <path d="M4 12h16" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}

export function IconMessage({ className }) {
  return (
    <svg className={className} {...base}>
      <path d="M4 5.5h16v11H9l-5 4v-4H4z" />
    </svg>
  );
}

export function IconMenu({ className }) {
  return (
    <svg className={className} {...base}>
      <path d="M4 6.5h16M4 12h16M4 17.5h16" />
    </svg>
  );
}

export function IconClose({ className }) {
  return (
    <svg className={className} {...base}>
      <path d="M5 5l14 14M19 5 5 19" />
    </svg>
  );
}

export const ICONS = {
  users: IconUsers,
  target: IconTarget,
  trending: IconTrendingUp,
  building: IconBuilding,
  calendar: IconCalendarCheck,
  gear: IconGear,
  chart: IconBarChart,
  edit: IconFileEdit,
  clipboard: IconClipboardCheck,
  box: IconBox,
  gearCheck: IconGearCheck,
  shield: IconShieldCheck,
};
