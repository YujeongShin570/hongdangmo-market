// import axios from "axios";
// import { useState, useEffect } from "react";
import useApiCall from "../../hooks/useApiCall";

function ApiCall() {
  // const [loading, payload, error] = useApiCall(
  //   "http://localhost:4000/api/board"
  // );
  // console.log(loading, payload);
  // const [loading, setLoading] = useState(false);
  // const [payload, setPayload] = useState(null);
  // const [error, setError] = useState(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await axios.get("http://localhost:4000/api/board");
  //       setLoading(false);
  //       setPayload(response.data);
  //     } catch (error) {
  //       setLoading(false);
  //       setError(error);
  //     }
  //   };
  //   fetchData();
  // }, []);
//   const [loading, payload, error] = useApiCall(
//     `${process.env.REACT_APP_API_SERVER}/api/board'
//   );

//   if (loading === true) {
//     return <div>로딩중입니다</div>;
//   }
//   if (error !== null) {
//     return <div>에러입니다</div>;
//   }
//   return <div>{JSON.stringify(payload)}</div>;
// }

// export default ApiCall;
  const [loading, payload, error] = useApiCall(
    `${process.env.REACT_APP_API_SERVER}/api/board'
  );

  if (loading === true) {
    return <div>로딩중입니다</div>;
  }
  if (error !== null) {
    return <div>에러입니다.</div>;
  }
  return <div>{JSON.stringify(payload)}</div>;
}

export default ApiCall;
