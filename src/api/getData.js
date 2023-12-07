export const imageUpload = async (image) => {
    const formData = new FormData();
    formData.append('image', image);
    const {data} = await 
}