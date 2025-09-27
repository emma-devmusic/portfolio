import { ReactNode } from 'react';

export type BadgeVariant = 
  | 'react' 
  | 'typescript' 
  | 'javascript' 
  | 'css' 
  | 'sass' 
  | 'tailwind' 
  | 'node' 
  | 'next' 
  | 'vite' 
  | 'figma' 
  | 'git' 
  | 'github'
  | 'default';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  icon?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export const Badge = ({ 
  children, 
  variant = 'default', 
  icon, 
  size = 'md' 
}: BadgeProps) => {
  const sizeClasses = {
    sm: 'badge-sm',
    md: 'badge-md', 
    lg: 'badge-lg'
  };

  return (
    <span className={`badge badge-${variant} ${sizeClasses[size]}`}>
      {icon && <span className="badge-icon">{icon}</span>}
      <span className="badge-text">{children}</span>
    </span>
  );
};