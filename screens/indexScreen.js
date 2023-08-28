import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect } from "react";
import { Context } from "../context/BlogContext";
import { Entypo } from "@expo/vector-icons";

export default function IndexScreen({ navigation }) {
  const { state, addBlogPost, deletBlogPost, getBlogPosts } =
    useContext(Context);

  useEffect(() => {
    getBlogPosts();

      const listener =   navigation.addListener("focus", () => {
      getBlogPosts();
    });
    return ()=>{
      listener.remove();
    }
  }, []);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>{item.title} </Text>
                <TouchableOpacity onPress={() => deletBlogPost(item.id)}>
                  <Entypo name="trash" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
  },
});
