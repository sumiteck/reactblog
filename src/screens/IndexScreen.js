import React, { useContext } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const IndexScreen = () => {
    const blogPosts = useContext(BlogContext);
return (
    <View>
        <Text>Index Screen</Text>
      <FlatList data={blogPost} />
    </View>
    
);

};

const Styles = StyleSheet.create({});

export default IndexScreen;