/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import {
  ColorSchemeName,
  Pressable,
  Text,
  View,
  Image,
  SafeAreaView,
  useWindowDimensions,
} from "react-native";
import {
  FontAwesome,
  Feather,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";

import Colors from "../constants/Colors";
// import ChatRoomItem from "../components/ChatRoomItem";
// import chatRoomsData from "../assets/dummy-data/ChatRooms";
import useColorScheme from "../hooks/useColorScheme";
// import ModalScreen from "../screens/ModalScreen";
// import NotFoundScreen from "../screens/NotFoundScreen";
import HomeScreen from "../screens/HomeScreen";
import ChatRoomScreen from "../screens/ChatRoomScreen";
// import TabTwoScreen from "../screens/TabTwoScreen";

import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import { StatusBar } from "expo-status-bar";
import styles from "../components/ChatRoomItem/styles";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    // when we navigate to different screens stack navigator will stack the new screen at the top of previous screen and when we switch back to previous screen it will pop the previous screen
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: HomeHeader,
          // headerStyle: {
          //   backgroundColor: "#7B68EE",
          // },
        }}
      />

      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={{
          headerTitle: ChatRoomHeader,
          // headerBackVisible: false,
          headerTintColor: "blue",
        }}
      />
      {/* <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      /> */}
      {/* <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group> */}
    </Stack.Navigator>
  );
}

const HomeHeader = (props: {}) => {
  // console.log(props);
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width,
        padding: 8,
        // backgroundColor: "grey",
        alignItems: "center",
      }}
    >
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg",
        }}
        style={{
          width: 30,
          height: 30,
          borderWidth: 1,
          borderColor: "yellow",
          borderRadius: 15,
        }}
      />
      <Text
        style={{
          fontSize: 25,
          flex: 1,
          marginHorizontal: 5,
        }}
      >
        Signal
      </Text>
      {/* <Feather name="camera" size={22} color="#595959" /> */}
      {/* <MaterialCommunityIcons
          name="square-edit-outline"
          size={22}
          color="#595959"
        /> */}

      <Feather
        name="video"
        size={22}
        color="#595959"
        style={{ marginHorizontal: 10 }}
      />
      <Feather
        name="search"
        size={22}
        color="#595959"
        style={{ marginHorizontal: 10 }}
      />
      <Ionicons
        name="ios-ellipsis-vertical"
        size={20}
        color="#595959"
        style={{ marginHorizontal: 10 }}
      />
    </View>
  );
};

const ChatRoomHeader = (props) => {
  // console.log(props);
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: width - 50,
        padding: 10,

        alignItems: "center",
        marginLeft: -30,
      }}
    >
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg",
        }}
        style={{
          width: 30,
          height: 30,
          borderWidth: 1,
          borderColor: "yellow",
          borderRadius: 30,
          // marginRight: ,
        }}
      />
      <Text
        style={{
          fontSize: 18,
          flex: 1,
          marginHorizontal: 5,
          // marginLeft: 50,
          // textAlign: "center",
        }}
      >
        {props.children}
      </Text>
      {/* <Feather name="camera" size={22} color="#595959" /> */}
      {/* <MaterialCommunityIcons
          name="square-edit-outline"
          size={22}
          color="#595959"
        /> */}

      <Feather
        name="video"
        size={22}
        color="#595959"
        style={{ marginHorizontal: 10 }}
      />
      <Feather
        name="search"
        size={22}
        color="#595959"
        style={{ marginHorizontal: 10 }}
      />
      <Ionicons
        name="ios-ellipsis-vertical"
        size={20}
        color="#595959"
        style={{ marginHorizontal: 10 }}
      />
    </View>
  );
};
/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<"TabOne">) => ({
          title: "Signal",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Modal")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      {/* <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      /> */}
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
