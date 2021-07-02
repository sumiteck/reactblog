import {createStackNavigator, createAppContainer } from "react-navigation";
import IndexScreen from "./src/screens/IndexScreen";
import { BlogProvider } from "./src/screens/context/Blogcontext";

const navigator = createStackNavigator(
  {
    Index: IndexScreen
  },
  {
    initialRouteName: "Index",
    defaultNaviationOption: {
      title: "Blogs"
    }
  }
);
const App = createAppContainer(navigator);

export default () => {
  return <BlogProvider>
    <App />
  </BlogProvider>
};