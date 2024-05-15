import { useParams } from "react-router-dom";
import { fetcher } from "../../../config/config";
import useSWR from "swr";
//import { Fragment } from "react";

const MovieDetailPage = () => {
  const { id } = useParams();
  console.log("id:", id);

  const api = `https://ophim1.com/phim/${id}`;

  const { data } = useSWR(api, fetcher);

  console.log("data:", data);
  return (
    <div className="h-[500vh]">
      <div className="relative h-[100vh] w-full -translate-y-14 -z-10">
        <div className=" absolute inset-0 overlay bg-gradient-to-t from-[rgba(0,0,0,0.9)] to-[rgba(0,0,0,0)]"></div>
        <div
          className="flex items-center justify-center w-full h-full bg-center bg-no-repeat abo "
          style={{
            backgroundImage:
              "url(https://img.ophim.live/uploads/movies/nguoi-dep-va-quai-vat-2017-poster.jpg)",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute bottom-0 translate-y-1/2">
            <div className="">
              <img
                src="https://img.ophim.live/uploads/movies/nguoi-dep-va-quai-vat-2017-poster.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className=""></div>
    </div>
  );
};

export default MovieDetailPage;
