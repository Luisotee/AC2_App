import { Button, HStack, Input, Text, TextArea, VStack } from "native-base";
import React from "react";
import { addSubject } from "../../controlers/add-data";

export function RegisterSubject({ navigation }: any) {
  const [codigoDisciplina, setCodigoDisciplina] = React.useState("");
  const [disciplina, setDisciplina] = React.useState("");
  const [cargaHoraria, setCargaHoraria] = React.useState("");

  let subject = {
    codigoDisciplina: codigoDisciplina,
    disciplina: disciplina,
    cargaHoraria: cargaHoraria,
  };

  return (
    <VStack alignItems="center" space={4} mt="5">
      <Input
        placeholder="Codigo Disciplina"
        w="80%"
        onChangeText={(value) => setCodigoDisciplina(value)}
      />
      <Input
        placeholder="Disciplina"
        w="80%"
        onChangeText={(value) => setDisciplina(value)}
      />
      <Input
        placeholder="Carga Horaria"
        w="80%"
        onChangeText={(value) => setCargaHoraria(value)}
      />
      <Button
        mx="10"
        mb="3"
        size="lg"
        onPress={() => (addSubject({ subject }), navigation.navigate("Home"))}
      >
        Submit
      </Button>
    </VStack>
  );
}
