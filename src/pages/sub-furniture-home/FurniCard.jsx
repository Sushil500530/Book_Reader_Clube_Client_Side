
const FurniCard = ({furniture}) => {
    // console.log(Object.keys(furniture).join(','));
const {_id,image,category,price,title,description,thumbnail1,thumbnail2,rating,quantity,discount} = furniture || {};
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="w-full h-[350px]">
                <img src={image} className="w-full h-full rounded-xl hover:scale-110 transition-all cursor-pointer" alt="furniture-image" />
                </figure>
            <div className="card-body">
                <h2 className="card-title">
                {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description.slice(0,70)}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default FurniCard;