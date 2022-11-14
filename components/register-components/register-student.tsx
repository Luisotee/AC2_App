import { Button, HStack, Input, Text, TextArea, VStack } from "native-base";
import { useAppState } from "native-base/lib/typescript/core/color-mode/hooks";
import React from "react";
import { addStudent } from "../../controlers/add-data";

export function RegisterStudent({ navigation }: any) {
  const [matricula, setMatricula] = React.useState("");
  const [nome, setNome] = React.useState("");
  const [endereco, setEndereco] = React.useState("");
  const [cidade, setCidade] = React.useState("");
  const [foto, setFoto] = React.useState("");

  let student = {
    cidade: cidade,
    endereco: endereco,
    foto: foto,
    matricula: matricula,
    nome: nome,
  };

  return (
    <VStack alignItems="center" space={4} mt="5">
      <Input
        placeholder="Matricula"
        w="80%"
        onChangeText={(value) => setMatricula(value)}
      />
      <Input
        placeholder="Nome"
        w="80%"
        onChangeText={(value) => setNome(value)}
      />
      <TextArea
        placeholder="Endereço"
        w="80%"
        onChangeText={(value) => setEndereco(value)}
        autoCompleteType={undefined}
      />
      <Input
        placeholder="Cidade"
        w="80%"
        onChangeText={(value) => setCidade(value)}
      />
      <Input
        placeholder="Foto (URL)"
        w="80%"
        onChangeText={(value) => setFoto(value)}
      />
      <Button
        mx="10"
        mb="3"
        size="lg"
        onPress={() => (addStudent({ student }), navigation.navigate("Home"))}
      >
        Submit
      </Button>
    </VStack>
  );
}
