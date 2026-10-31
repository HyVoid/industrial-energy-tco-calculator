import React from 'react';
import { Lock, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-black/5 mt-auto py-4">
      <div className="mx-auto max-w-[1400px] px-5 md:px-[40px] flex flex-col sm:flex-row items-center justify-between gap-3 text-[#888888] text-[11px] text-center sm:text-left">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#2251FF]" />
          <span className="font-semibold text-[#051C2C]">Theseus Workshop</span>
          <span className="text-black/30">|</span>
          <span className="font-mono text-[#888888]">industrial-energy-tco-calculator</span>
        </div>

        {/* Privacy Note required by specification */}
        <div className="flex items-center gap-1.5 bg-[#F5F5F2] px-3 py-1 rounded-full border border-black/5">
          <Lock className="w-3.5 h-3.5 text-[#051C2C]" />
          <span className="text-[#051C2C]/80 font-medium">
            All data in this tool is stored in your browser's localStorage. The page itself does not retain any user data.
          </span>
        </div>
      </div>
    </footer>
  );
};
