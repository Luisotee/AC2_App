import React from "react";
import { IconButton, Icon, HStack, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { ICards } from "../../interface";

export function HomeCards({
  desc,
  iconType,
  nextComponent,
  navigation,
}: ICards) {
  return (
    <HStack mt="5" justifyContent="center">
      <Text mt="4">{desc}</Text>
      <IconButton
        onPress={() => navigation.navigate(nextComponent)}
        icon={<Icon size="4xl" as={MaterialIcons} name={iconType} />}
      />
    </HStack>
  );
}
