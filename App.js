import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import IndexScreen from "./src/screens/IndexScreen";
import {BlogProvider} from "./src/screens/context/Blogcontext";
import React from "react";

const navigator = createStackNavigator(
  {
    Index: IndexScreen
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blogs"
    }
  }
);
const App = createAppContainer(navigator);

export default () => {
  return (<BlogProvider>
    <App />
  </BlogProvider>
  );
};