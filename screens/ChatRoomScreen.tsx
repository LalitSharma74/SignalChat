import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import React from "react";
import Message from "../components/Message";
import MessageInput from "../components/MessageInput";
import { useRoute, useNavigation } from "@react-navigation/native";
import chatRoomData from "../assets/dummy-data/Chats";
import Navigation from "../navigation/index";

const ChatRoomScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  navigation.setOptions({ title: "Elon Musk" });
  console.warn("Displaying chatroom message", route.params?.id);

  return (
    <SafeAreaView style={styles.page}>
      <FlatList
        data={chatRoomData.messages}
        renderItem={({ item }) => <Message message={item} />}
        inverted
      />

      <MessageInput />
    </SafeAreaView>
  );
};

export default ChatRoomScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
  },
});
