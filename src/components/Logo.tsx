import React from "react";

const Logo = ({ className = "w-8 h-8" }: { className?: string }) => {
  return (
    <img
      src={`${import.meta.env.BASE_URL}logo.png`}
      alt="Sidekick Systems logo"
      className={className}
    />
  );
};

export default Logo;