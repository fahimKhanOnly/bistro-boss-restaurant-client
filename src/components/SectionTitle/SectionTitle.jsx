const SectionTitle = ({subHeading, heading}) => {
  return (
    <div className="w-fit mx-auto">
      <h5 className="text-center text-yellow-600">{subHeading}</h5>
      <h1 className="text-center py-5 mb-9 mt-2 border-y-[2.5px] text-4xl">{heading}</h1>
    </div>
  );
};

export default SectionTitle;