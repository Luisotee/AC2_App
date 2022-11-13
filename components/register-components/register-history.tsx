import { Button, HStack, Input, Text, TextArea, VStack } from "native-base";

export function RegisterHistory({ navigation }: any) {
  return (
    <VStack alignItems="center" space={4} mt="5">
      <Input placeholder="Codigo Historico" w="80%" />
      <Input placeholder="Matricula" w="80%" />
      <Input placeholder="Codigo Turma" w="80%" />
      <Input placeholder="Frequencia" w="80%" />
      <Input placeholder="Nota" w="80%" />
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
