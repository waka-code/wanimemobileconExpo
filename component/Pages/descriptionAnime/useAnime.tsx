import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-native";
import { IsAnime } from "../../../../wanime/src/components/Interface/Interface";
import { apiUrlData } from "../../../../wanime/src/Apis/apis";

export default function useAnime() {
  const { _id } = useParams();
  const [animesDescript, setAnimesDescript] = useState<IsAnime>();

  useEffect(() => {
    const searchData = async () => {
      const res = await axios.get(`${apiUrlData}/${_id}`);
      setAnimesDescript(res.data);
    };

    searchData()
  }, [_id]);
  return { animesDescript };
}