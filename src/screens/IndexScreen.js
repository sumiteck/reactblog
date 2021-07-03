import React, { useContext } from "react";
import { Text, View, StyleSheet, FlatList, Button } from "react-native";
import BlogContext from "./context/Blogcontext";

const IndexScreen = () => {
    const {data, addBlogPosts} = useContext(BlogContext);
return (
    <View>
        <Text>Add Blog</Text>
        <Button title="Add Blog Post" onPress={addBlogPosts}/>
      <FlatList data={data}
      keyExtractor={(blogPosts) => blogPosts.title}
      renderItem={({item}) => {

        return <Text>{item.title}</Text>
      }}
      
      
      />
    </View>
    
);

};

const Styles = StyleSheet.create({});

export default IndexScreen;