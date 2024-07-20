"use client";

import React, { useEffect, useState } from "react";

export default function PageLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  // Component that makes the page render only when fully loaded
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    window.onload = () => setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen w-screen flex-col items-center justify-center gap-8 bg-black">
        <img src="/images/loading.svg" />
      </div>
    );
  }

  return (
    <div className="animate-show-up [animation-duration:2000ms]">
      {children}
    </div>
  );
}
