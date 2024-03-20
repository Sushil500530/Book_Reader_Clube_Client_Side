/* eslint-disable react/prop-types */

const SpecificData = ({findData}) => {
    console.log(Object.keys(findData).join(","));
    const {image,category,price,title,description,thumbnail1,thumbnail2,rating,quantity,discount} = findData || {} ;
    return (
        <div>
            
        </div>
    );
};

export default SpecificData;