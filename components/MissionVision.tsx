interface MissionVisionProps {
  mission: string;
  vision: string;
}

export default function MissionVision({ mission, vision }: MissionVisionProps) {
  return (
    <div className="flex items-start space-x-16">
      {/* Mission */}
      <div className="flex-1">
        <h3 className="text-[#FF7900] text-sm font-semibold mb-3 uppercase tracking-wide">
          Mission
        </h3>
        <p className="text-[#3C4049] text-sm leading-relaxed">{mission}</p>
      </div>

      {/* Vision */}
      <div className="flex-1">
        <h3 className="text-[#FF7900] text-sm font-semibold mb-3 uppercase tracking-wide">
          Vision
        </h3>
        <p className="text-[#3C4049] text-sm leading-relaxed">{vision}</p>
      </div>
    </div>
  );
}
