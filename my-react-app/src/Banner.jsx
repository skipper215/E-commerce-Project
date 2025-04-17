function Banner(prop) {
    return(
        <>
            <div className="img-row"> 
                <img className="modelBanner1" src={prop.src} alt={prop.alt}/>   
                <img className="modelBanner2" src={prop.src2} alt={prop.alt}/>
            </div>
        </>
        

    )

}

export default Banner;
