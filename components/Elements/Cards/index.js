const Card = ({ icon, valueFor, value, className }) => {

    console.log(className)
    return (
        <div className={`rounded-medium w-full ${className} py-5 px-6 flex flex-col`}>
            <img src={icon} alt="icon" className="self-start mb-4 md:mb-0 md:self-end" />
            <p className="font-lato text-xs md:text-sm mb-1">Total {valueFor}</p>
            <p className="font-open-sans font-bold text-base md:text-xl lg:text-2xl">{value}</p>
        </div>
    )
}

export default Card;
