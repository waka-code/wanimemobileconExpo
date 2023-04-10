import React, { useCallback, useEffect, useState } from "react";
import { IsAnime } from "../../../wanime/src/components/Interface/Interface";
import axios from "axios";
import { apiUrlData } from "../../../wanime/src/Apis/apis";
import { useNavigate } from "react-router-native";
import { NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native';


export default function useApi() {
  const [anime, setAnime] = useState<IsAnime[]>([]);
  const [inputValue, setInputValue] = useState("");
  const history = useNavigate();
  
  const callData = async (text: string) => {
    const data = text.toLowerCase();
    setInputValue(text);
    const res = await axios.get(apiUrlData);
    let dataCollection: IsAnime[] = res.data.docs;

    if (data) {
      const filterData = dataCollection.filter((dataSearch) =>
        dataSearch.title.toLowerCase().includes(data)
      );
      setAnime(filterData);
    } else {
      setAnime(dataCollection);
    }
  };

  const handleKeyDonw = (event: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
    if (event.nativeEvent.key === "Enter") {
      if (anime.length > 0) {
        anime.map((anime) => {
          history(`${anime._id}`);
          setInputValue("");
        });
      } else {
        history(`/Pagenotfound`);
        setInputValue("");
      }
    }
  };

  useEffect(() => {
    callData(inputValue);
  }, []);

  return { anime, callData, handleKeyDonw };
}
