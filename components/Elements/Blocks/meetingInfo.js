const MeetingInfo = ({ location, oraganisation, border }) => {
  return (
    <div className={`border-l-4 ${border} h-16 pl-4 mt-7`}>
      <p className="text-tertiaryText font-lato text-sm font-bold">
        Meeting with {oraganisation}
      </p>
      <p className="text-pentaText font-lato text-xs">14:00 - 15:00</p>
      <p className="text-pentaText font-lato text-xs">at {location}</p>
    </div>
  );
};

export default MeetingInfo;
