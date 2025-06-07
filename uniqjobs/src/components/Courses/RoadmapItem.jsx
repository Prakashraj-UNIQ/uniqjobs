const RoadmapItem = ({ title, duration, icon }) => {
  return (
    <div>
      <div className="flex flex-col items-center">
      <p className="font-primary font-bold text-lg mb-1">{title}</p>

      <div className="w-16 p-2 shrink-0 bgcc">
        {icon}
      </div>

      <p className="font-primary font-medium  text-gray-800 mt-1">
        {duration}
      </p>
    </div>
    </div>
  );
};

export default RoadmapItem;
  