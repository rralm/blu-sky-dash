const LoginButton = ({children, icon, onClick}) => {
    return(
        <button className="bg-white w-auto rounded-default px-5 py-2 font-montserrat flex items-center gap-x-2 text-secondaryText text-xs border border-white hover:border-secondaryText" onClick={onClick}>
            <img src={icon} alt="icon"/>
            <span>{children}</span>
        </button>
    )
}

export default LoginButton;
