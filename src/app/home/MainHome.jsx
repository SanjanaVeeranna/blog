import LoginIcon from '../../assets/icons/login-icon.svg';


const MainHome = () => {
    return(
    <div className="bg-primary flex h-20 justify-between p-5">
        <div className="text-[20px] text-white p-15">
            JAMES CONSULTING
        </div>
        <div className="flex space-x-16">
            <div className="text-[15px] text-white ">
                Contact Us
            </div>
            <div className="text-[15px] text-white ">
                About Us
            </div>
            <div className="text-[15px] text-white ">
                Services
            </div>
            <div className="text-[15px] text-white ">
                Clients
            </div>
            <div className="text-[15px] text-white flex ">
            <img src={LoginIcon} alt="Login Icon" />
                Log In
            </div>
        </div>
    </div>

    );
};

export default MainHome;