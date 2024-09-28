import axios from "axios";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

function useProfile() {
  const dispatch = useDispatch();
  const getProfileDetails = useCallback(
    async (token: string) => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get(
          "http://127.0.0.1:8080/api/v1/profile",
          config
        );
        return response.data;
      } catch (error) {
        localStorage.removeItem("token");
        return null;
      }
    },
    [dispatch]
  );

  return { getProfileDetails };
}

export default useProfile;
