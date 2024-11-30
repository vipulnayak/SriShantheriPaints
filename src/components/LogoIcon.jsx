const LogoIcon = ({ className = "h-8 w-8" }) => {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 5L30 15L20 25L10 15L20 5Z"
        fill="currentColor"
        className="text-primary"
      />
      <path
        d="M15 20L25 30L20 35L10 25L15 20Z"
        fill="currentColor"
        className="text-secondary"
      />
    </svg>
  );
};

export default LogoIcon; 