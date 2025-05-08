import React from 'react';
import { cn } from '@/lib/utils';

const AnimatedBackground: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("fixed inset-0 -z-10 overflow-hidden", className)}>
      {/* Background is now transparent - removed solid gradient */}
      
      {/* Elegant diagonal line */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0L120 120M120 0L0 120' stroke='%23000' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px',
        }}
      />
      
      {/* Luxury accent elements - reduced opacity to match transparent background */}
      <div className="absolute top-[10%] right-[10%] w-80 h-80 rounded-full bg-gradient-to-br from-gold-200/3 to-gold-500/3 dark:from-gold-200/3 dark:to-gold-500/5 blur-2xl" />
      <div className="absolute bottom-[15%] left-[5%] w-96 h-96 rounded-full bg-gradient-to-tr from-slate-300/5 to-slate-500/3 dark:from-slate-700/5 dark:to-slate-600/3 blur-3xl" />
      
      {/* Subtle shimmer effect */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-0 right-[20%] h-full w-[1px] bg-gradient-to-b from-transparent via-gold-300/40 to-transparent animate-shimmer-slow"></div>
        <div className="absolute top-0 left-[30%] h-full w-[1px] bg-gradient-to-b from-transparent via-gold-200/30 to-transparent animate-shimmer-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-0 left-[70%] h-full w-[1px] bg-gradient-to-b from-transparent via-gold-300/20 to-transparent animate-shimmer-slow" style={{ animationDelay: '3.5s' }}></div>
      </div>
      
      {/* Minimal floating elements */}
      <div className="absolute top-[20%] left-[15%] w-3 h-3 rounded-full bg-gold-300/10 dark:bg-gold-300/15 animate-float-slow"></div>
      <div className="absolute top-[70%] right-[20%] w-2 h-2 rounded-full bg-gold-300/15 dark:bg-gold-300/20 animate-float-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-[50%] left-[60%] w-4 h-4 rounded-full bg-gold-300/10 dark:bg-gold-300/15 animate-float-slow" style={{ animationDelay: '1s' }}></div>
      
      {/* Very subtle grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwMCAwdjEwMEgwVjB6IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1vcGFjaXR5PSIwLjAyIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvc3ZnPg==')] opacity-15 dark:opacity-5" />
    </div>
  );
};

export default AnimatedBackground;