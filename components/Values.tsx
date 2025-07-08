import { Recycle, HeartHandshake, TrendingUp } from "lucide-react";

interface ValuesProps {
  value1: string;
  value2: string;
  value3: string;
}

export default function Values({ value1, value2, value3 }: ValuesProps) {
  return (
    <div className="grid grid-cols-3 gap-8">
      {/* Promote Environmental Sustainability */}
      <div className="border border-[#EBECEF] rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-4">
        <div className="w-16 h-16 bg-[#F6F7F8] rounded-full flex items-center justify-center">
          <Recycle size={32} className="text-black" />
        </div>
        <h4 className="text-[#3C4049] font-normal text-lg">{value1}</h4>
      </div>

      {/* Empower People with Disabilities */}
      <div className="border border-[#EBECEF] rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-4">
        <div className="w-16 h-16 bg-[#F6F7F8] rounded-full flex items-center justify-center">
          <HeartHandshake size={32} className="text-black" />
        </div>
        <h4 className="text-[#3C4049] font-normal text-lg">{value2}</h4>
      </div>

      {/* Scale Ethical Production */}
      <div className="border border-[#EBECEF] rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-4">
        <div className="w-16 h-16 bg-[#F6F7F8] rounded-full flex items-center justify-center">
          <TrendingUp size={32} className="text-black" />
        </div>
        <h4 className="text-black font-normal text-lg">{value3}</h4>
      </div>
    </div>
  );
}
