// import axios from "axios";

// import { NotificationManager } from "react-notifications";

// import { GET_ADMINS, GET_COMPANY_FOR_ADMIN, GET_ALL_ASSIGNEES } from "../constants/Constants";

// const setAdmins = (params) => {
//   return {
//     type: GET_ADMINS,
//     payload: params,
//   };
// };

// export const createAdmin =
//   (params,setSubmitLoading, page, pageSize, setSideBarVisible, setLoading) =>
//   async (dispatch) => {
//     try {
//       setSubmitLoading(true);
//       await axios.post(`${process.env.REACT_APP_BASE_URL}/admin`, params);
//       setSubmitLoading(false);
//       setSideBarVisible(false);
//       NotificationManager.success("Admin created successfully");
//       dispatch(admin(pageSize, page, setLoading));
//     } catch (error) {
//       setSubmitLoading(false)
//       NotificationManager.error(`${error.response?.data?.message}`);
//     }
//   };
//
