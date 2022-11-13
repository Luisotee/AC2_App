import { Button, HStack, Input, Text, TextArea, VStack } from "native-base";

export function RegisterClass({ navigation }: any) {
  return (
    <VStack alignItems="center" space={4} mt="5">
      <Input placeholder="Codigo Turma" w="80%" />
      <Input placeholder="Codigo Disciplina" w="80%" />
      <Input placeholder="Codigo Professor" w="80%" />
      <Input placeholder="Ano" w="80%" />
      <Input placeholder="Horario" w="80%" />
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
