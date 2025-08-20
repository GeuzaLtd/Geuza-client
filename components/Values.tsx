import { Recycle, HeartHandshake, TrendingUp } from "lucide-react";

interface ValuesProps {
  value1: string;
  value2: string;
  value3: string;
}

export default function Values({ value1, value2, value3 }: ValuesProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
      {/* Promote Environmental Sustainability */}
      <div className="border border-[#EBECEF] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center text-center space-y-3 sm:space-y-4">
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#F6F7F8] rounded-full flex items-center justify-center">
          <Recycle
            size={24}
            className="sm:w-7 sm:h-7 md:w-8 md:h-8 text-black"
          />
        </div>
        <h4 className="text-[#3C4049] font-normal text-sm sm:text-base md:text-lg leading-relaxed">
          {value1}
        </h4>
      </div>

      {/* Empower People with Disabilities */}
      <div className="border border-[#EBECEF] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center text-center space-y-3 sm:space-y-4">
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#F6F7F8] rounded-full flex items-center justify-center">
          <HeartHandshake
            size={24}
            className="sm:w-7 sm:h-7 md:w-8 md:h-8 text-black"
          />
        </div>
        <h4 className="text-[#3C4049] font-normal text-sm sm:text-base md:text-lg leading-relaxed">
          {value2}
        </h4>
      </div>

      {/* Scale Ethical Production */}
      <div className="border border-[#EBECEF] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center text-center space-y-3 sm:space-y-4 md:col-span-2 lg:col-span-1">
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#F6F7F8] rounded-full flex items-center justify-center">
          <TrendingUp
            size={24}
            className="sm:w-7 sm:h-7 md:w-8 md:h-8 text-black"
          />
        </div>
        <h4 className="text-black font-normal text-sm sm:text-base md:text-lg leading-relaxed">
          {value3}
        </h4>
      </div>
    </div>
  );
}
