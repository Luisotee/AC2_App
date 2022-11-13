import { Button, HStack, Input, Text, TextArea, VStack } from "native-base";

export function RegisterSubject({ navigation }: any) {
  return (
    <VStack alignItems="center" space={4} mt="5">
      <Input placeholder="Codigo Disciplina" w="80%" />
      <Input placeholder="Disciplina" w="80%" />
      <Input placeholder="Carga Horaria" w="80%" />
      <Button
        mx="10"
        mb="3"
        size="lg"
        onPress={() => navigation.navigate("Home")}
      >
        Submit
      </Button>
    </VStack>
  );
}
