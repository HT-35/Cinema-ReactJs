import axios from "axios";

const callApiGet = async (url) => {
  // const url =
  //  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
  try {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTdhZWNlMmJmNDFhNDZlNzRlZDBhYmViNjNiMzBmNyIsInN1YiI6IjY2MDdkMDBjMGQ0MTdlMDE0OTA0MGNlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bwRMYUe6IaSRwGznmFekFobLeRcdjkGxWX8oxVo7Rvo",
      },
    };

    const data = await axios(url, options);
    //console.log("data:", data);
    return data;
  } catch (error) {
    console.error("error:" + error);
  }
};

export { callApiGet };
