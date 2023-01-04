export const getList = async () => {
  let response = await localApi.get("/get_CategoryList.php");
  setOptions(response.data);
};
