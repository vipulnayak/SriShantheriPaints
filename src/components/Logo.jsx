import LogoIcon from './LogoIcon';

const Logo = ({ className = "h-8", showIcon = true }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {showIcon && <LogoIcon />}
      <div className="flex flex-col">
        <span className="text-primary font-heading font-bold text-xl">Sri Shantheri</span>
        <span className="text-secondary text-sm font-medium">Paints</span>
      </div>
    </div>
  );
};

export default Logo; 