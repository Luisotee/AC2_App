import { Avatar, HStack, Text } from "native-base";

export function AvatarHome() {
  return (
    <HStack justifyContent="center" mt="2">
      <Avatar
        bg="green.500"
        size="lg"
        source={{
          uri: "https://avatars.githubusercontent.com/Luisotee",
        }}
      ></Avatar>
      <Text ml="1" fontSize="lg">
        Luís Otávio {"\n"}RA: 190645{" "}
      </Text>
    </HStack>
  );
}
