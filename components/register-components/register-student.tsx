import { Button, HStack, Input, Text, TextArea, VStack } from "native-base";

export function RegisterStudent({ navigation }: any) {
  return (
    <VStack alignItems="center" space={4} mt="5">
      <Input placeholder="Matricula" w="80%" />
      <Input placeholder="Nome" w="80%" />
      <TextArea placeholder="Endereço" w="80%" autoCompleteType={undefined} />
      <Input placeholder="Cidade" w="80%" />
      <Input placeholder="Foto (URL)" w="80%" />
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
