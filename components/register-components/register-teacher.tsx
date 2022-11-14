import { Button, HStack, Input, Text, TextArea, VStack } from "native-base";
import React from "react";
import { addTeacher } from "../../controlers/add-data";

export function RegisterTeacher({ navigation }: any) {
  const [codigoProfessor, setCodigoProfessor] = React.useState("");
  const [nome, setNome] = React.useState("");
  const [endereco, setEndereco] = React.useState("");
  const [cidade, setCidade] = React.useState("");

  let teacher = {
    cidade: cidade,
    endereco: endereco,
    codigoProfessor: codigoProfessor,
    nome: nome,
  };

  return (
    <VStack alignItems="center" space={4} mt="5">
      <Input
        placeholder="Codigo Professor"
        w="80%"
        onChangeText={(value) => setCodigoProfessor(value)}
      />
      <Input
        placeholder="Nome"
        w="80%"
        onChangeText={(value) => setNome(value)}
      />
      <TextArea
        placeholder="Endereço"
        w="80%"
        autoCompleteType={undefined}
        onChangeText={(value) => setEndereco(value)}
      />
      <Input
        placeholder="Cidade"
        w="80%"
        onChangeText={(value) => setCidade(value)}
      />
      <Button
        mx="10"
        mb="3"
        size="lg"
        onPress={() => (addTeacher({ teacher }), navigation.navigate("Home"))}
      >
        Submit
      </Button>
    </VStack>
  );
}
