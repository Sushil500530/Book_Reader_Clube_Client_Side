/* eslint-disable react/prop-types */


export default function AdminTitle({ children, className }) {
    return (
        <>
            <h1 className={`${className} text-xl lg:text-3xl my-5 capitalize w-full font-bold text_gradient`}>
                {children}
            </h1>
        </>
    )
}
