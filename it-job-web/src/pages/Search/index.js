import { Tag } from "antd";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchList from "./SearchList";
import { getAllJob } from "../../services/jobServices";
import GoBack from "../../components/Goback";

function Search() {
      const [searchParams, setSearchParams] = useSearchParams();
      const [data, setData] = useState();
      const citySearch = searchParams.get("city") || "";
      const keywordSearch = searchParams.get("keyword") || "";
      useEffect(() => {
            const fetchApi = async () => {
                  const response = await getAllJob();
                  if (response) {
                        const newData = response.filter((item) => {
                              const city = citySearch ? item.city?.includes(citySearch) : true;
                              console.log(city);
                              const keyword = keywordSearch ? item.tags?.includes(keywordSearch) : true;
                              const status = item.status;
                              return city && keyword && status;
                        });
                        setData(newData);
                  }
            }
            fetchApi();
      }, []);
      return (
            <>
                  <GoBack />
                  <div>
                        <strong>Kết quả tìm kiếm: </strong>
                        {citySearch && <Tag>{citySearch}</Tag>}
                        {keywordSearch && <Tag>{keywordSearch}</Tag>}

                  </div>
                  {data && (
                        <SearchList data={data} />
                  )}
            </>
      )
}
export default Search;