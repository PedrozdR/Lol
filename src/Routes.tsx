import { createAppContainer, createStackNavigator, createDrawerNavigator } from "react-navigation";
import ChampionsScreen from "./pages/champions";
import { colors } from "./styles/themes/colors";

const ChampionStack = createStackNavigator({
    Champions: {
        screen: ChampionsScreen,
        navigationOptions: {
            title: "Champions",

        }
    }
},
    {
        defaultNavigationOptions: {
            headerTintColor: colors.primary, 
            headerStyle: {
                backgroundColor: "#121212"
            }
        }
    });

const DrawerStack = createDrawerNavigator({
    Champions: {
        screen: ChampionStack
    },

})

const AppStack = createStackNavigator({
    ChampionStack,
    DrawerStack
},
    {
        defaultNavigationOptions: {
            header: null,
          
        }
    }
)
export default createAppContainer(AppStack);