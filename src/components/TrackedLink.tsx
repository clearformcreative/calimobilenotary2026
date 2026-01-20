"use client";

import { trackPhoneClick, trackBookingClick } from "@/lib/tracking";

interface TrackedPhoneLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function TrackedPhoneLink({ href, children, className }: TrackedPhoneLinkProps) {
  const handleClick = () => {
    const phoneNumber = href.replace("tel:", "");
    trackPhoneClick(phoneNumber);
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}

interface TrackedBookingLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function TrackedBookingLink({ href, children, className }: TrackedBookingLinkProps) {
  const handleClick = () => {
    trackBookingClick();
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
