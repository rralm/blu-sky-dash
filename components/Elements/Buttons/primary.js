const PrimaryButton = ({ children, onClick, className }) => {
    return (
        <button className={` ${className} bg-primary w-full rounded-default py-2 font-montserrat font-bold text-white hover:shadow-md transform hover:-translate-y-1`} onClick={onClick}>
            <span>{children}</span>
        </button>
    )
}

export default PrimaryButton;
