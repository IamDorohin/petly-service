export const convertBlobToBase64 = async blob => {
  return await blobToBase64(blob);
};

const blobToBase64 = blob =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

export const prepareFormData = values => {
  const formData = new FormData();

  for (let value in values) {
    formData.append(value, values[value]);
  }
  return formData;
};
