import bgImg from '../assets/images/bg-img.jpg' 

const backgroundimage =() => {
    return(
        <div>
           
           <div className={`bg-[url(${bgImg})]`}>
            {/* Other content */}
            </div>

        </div>

    );
};

export default backgroundimage;