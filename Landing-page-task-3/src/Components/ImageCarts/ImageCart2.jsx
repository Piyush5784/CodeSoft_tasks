import "./ImageCart2.css"


const ImageCart2 = ({ src, heading, subheading, price }) => {
    return <>
        <div className="card">
            <img className="img2" src={src} alt="" />
            <div className="text-container">
                <h4 className="leading-[4]">{heading}</h4>
                <p style={{ color: "#898989" }}>{subheading}</p>
                <p>${price}</p>
            </div>

        </div>

    </>;
};

export default ImageCart2;
