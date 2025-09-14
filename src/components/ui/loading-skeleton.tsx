import { cn } from '@/lib/utils';

interface LoadingSkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  variant?: 'default' | 'circular' | 'rectangular';
}

export const LoadingSkeleton = ({
  className,
  width,
  height,
  variant = 'default',
}: LoadingSkeletonProps) => {
  const baseClasses = 'animate-pulse bg-muted';
  
  const variantClasses = {
    default: 'rounded-md',
    circular: 'rounded-full',
    rectangular: 'rounded-none',
  };

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        className
      )}
      style={{
        width: width || '100%',
        height: height || '1rem',
      }}
    />
  );
};

// Pre-built skeleton components for common use cases
export const ProjectCardSkeleton = () => (
  <div className="bg-gradient-to-br from-white/5 via-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-xl animate-fade-in">
    <LoadingSkeleton className="w-full h-32 mb-4 rounded-lg" />
    <div className="space-y-3">
      <LoadingSkeleton className="w-3/4 h-6" />
      <LoadingSkeleton className="w-full h-4" />
      <LoadingSkeleton className="w-full h-4" />
      <LoadingSkeleton className="w-1/2 h-4" />
    </div>
    <div className="flex gap-2 mt-4">
      <LoadingSkeleton className="w-16 h-6 rounded-full" />
      <LoadingSkeleton className="w-20 h-6 rounded-full" />
      <LoadingSkeleton className="w-14 h-6 rounded-full" />
    </div>
  </div>
);

export const ExperienceCardSkeleton = () => (
  <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl animate-fade-in">
    <div className="flex items-start gap-4">
      <LoadingSkeleton className="w-12 h-12 rounded-xl" />
      <div className="flex-1 space-y-3">
        <LoadingSkeleton className="w-2/3 h-6" />
        <LoadingSkeleton className="w-1/2 h-5" />
        <LoadingSkeleton className="w-3/4 h-4" />
        <LoadingSkeleton className="w-full h-4" />
        <LoadingSkeleton className="w-5/6 h-4" />
        <div className="flex gap-2">
          <LoadingSkeleton className="w-16 h-6 rounded-full" />
          <LoadingSkeleton className="w-20 h-6 rounded-full" />
          <LoadingSkeleton className="w-14 h-6 rounded-full" />
        </div>
      </div>
    </div>
  </div>
);

export const AchievementCardSkeleton = () => (
  <div className="bg-gradient-to-br from-white/5 via-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-xl animate-fade-in">
    <div className="space-y-3">
      <LoadingSkeleton className="w-4/5 h-5" />
      <LoadingSkeleton className="w-1/3 h-4" />
      <LoadingSkeleton className="w-1/4 h-3" />
      <LoadingSkeleton className="w-full h-4" />
      <LoadingSkeleton className="w-5/6 h-4" />
    </div>
  </div>
);
