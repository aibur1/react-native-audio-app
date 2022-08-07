import { View, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import Text from "../components/text/text";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectStatus } from "../../store/productSlice";

export default function Home() {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);

  console.log("status -->", status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts()); //fetchProducts ta holo asyncThunk diye j api er function ta create korsi oi ta and eita k action er moto call korsi idea ta emon
    }
  }, []);

  if (status === "loading") {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
