import { useParams } from "react-router-dom";
import { fetcher } from "../../../config/config";
import useSWR from "swr";
//import { Fragment } from "react";

function removeHtmlTags(s) {
  const pattern = /<[^>]*>/g; // Regular expression to match HTML tags

  // Use replace method to remove HTML tags
  const cleanString = s?.replace(pattern, "");

  return cleanString;
}

const MovieDetailPage = () => {
  const { id } = useParams();
  console.log("id:", id);

  const api = `https://ophim1.com/phim/${id}`;

  const { data } = useSWR(api, fetcher);

  const detailMovie = data?.movie || [];

  const { name, category, content, poster_url } = detailMovie;
  //console.log("actor:", actor);
  console.log("detailMovie:", detailMovie);

  return (
    <div className="pb-32">
      <div className="relative h-[60vh] w-full -translate-y-14 -z-10">
        <div className=" absolute inset-0 overlay bg-gradient-to-t from-[rgba(0,0,0,0.9)] to-[rgba(0,0,0,0)]"></div>
        <div
          className="w-full h-full bg-center bg-no-repeat "
          style={{
            backgroundImage: `url(${poster_url})`,
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-center translate-y-1/2">
            <div className="w-2/3 max-w-[540px] max-h-[560px] mx-auto">
              <img src={poster_url} alt="" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[942px] mx-auto">
        <div className="flex items-center justify-center mt-32 name-film ">
          <h1 className="text-4xl font-semibold text-white">
            {name ? name : "name"}
          </h1>
        </div>

        <div className="flex items-center justify-center gap-10 mt-6 ">
          {category?.length > 0 &&
            category.map((item) => {
              console.log(item);
              return (
                <span
                  key={item.id}
                  className="text-lg font-semibold text-[#7D6AFF] border-2 border-[#7D6AFF] p-2 px-4 rounded-3xl"
                >
                  {item.name || "category"}
                </span>
              );
            })}
        </div>

        <div className="flex items-center justify-center mt-10">
          <div className="text-base font-normal text-center text-white">
            {removeHtmlTags(content)}
          </div>
        </div>
        {/*{content}*/}

        <div className="flex items-center justify-center mt-12 name-film ">
          <h1 className="text-4xl font-semibold text-white">Casts</h1>
        </div>

        <div className="flex items-center justify-between mt-6 ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQttVgVbu7nZMelDSAT-Zp3NfN0yaXL-Ehph-zSvYyqqEx6Fluk"
            alt="artis"
            className="object-cover w-[211px] h-[270px]"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQttVgVbu7nZMelDSAT-Zp3NfN0yaXL-Ehph-zSvYyqqEx6Fluk"
            alt="artis"
            className="object-cover w-[211px] h-[270px]"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQttVgVbu7nZMelDSAT-Zp3NfN0yaXL-Ehph-zSvYyqqEx6Fluk"
            alt="artis"
            className="object-cover w-[211px] h-[270px]"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQttVgVbu7nZMelDSAT-Zp3NfN0yaXL-Ehph-zSvYyqqEx6Fluk"
            alt="artis"
            className="object-cover w-[211px] h-[270px]"
          />
        </div>
        <div className="flex items-center justify-center mt-12 name-film ">
          <img
            src="https://s3-alpha-sig.figma.com/img/44c7/ffa5/90be4ad3f24b3541f079f649fc43b543?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=itV1BSeK4CY0fbEAOazDyM6ty58HBn8HyfxlEWCH7h5sluSFDfyCgh9d~R63JSRy9Azuo7Z4CehMkQQhqGTn-Sn8LcujWz50ZqeTuFKK7WzQ9di5NX0RXknkOEOoAxCKd7O9Gc4S71RGxEQJp~ap9QwJnRCsnnUSvGgOx6d2ZhkEL8jRnSRQf8NL7rkzcG7MpAGBooE4MhzL26aWWt1EnLTpYXNweSslIVPFelUlc4UglokedrLPGIc930w5dUmcX~FnC~nkqDGZcMm~-n0Rn9UlqYlDymJzJzN6IN5xYt7EFbXWiRyqDzm-gOS7SpVI3hz9ddFL3KK7aVYLaja15A__"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
