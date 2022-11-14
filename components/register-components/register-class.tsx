import { Button, HStack, Input, Text, TextArea, VStack } from "native-base";
import React from "react";
import { addClass } from "../../controlers/add-data";

export function RegisterClass({ navigation }: any) {
  const [codigoTurma, setcodigoTurma] = React.useState("");
  const [codigoDisciplina, setCodigoDisciplina] = React.useState("");
  const [codigoProfessor, setCodigoProfessor] = React.useState("");
  const [ano, setAno] = React.useState("");
  const [horario, setHorario] = React.useState("");

  let classRoom = {
    codigoTurma: codigoTurma,
    codigoDisciplina: codigoDisciplina,
    codigoProfessor: codigoProfessor,
    ano: ano,
    horario: horario,
  };

  return (
    <VStack alignItems="center" space={4} mt="5">
      <Input
        placeholder="Codigo Turma"
        w="80%"
        onChangeText={(value) => setcodigoTurma(value)}
      />
      <Input
        placeholder="Codigo Disciplina"
        w="80%"
        onChangeText={(value) => setCodigoDisciplina(value)}
      />
      <Input
        placeholder="Codigo Professor"
        w="80%"
        onChangeText={(value) => setCodigoProfessor(value)}
      />
      <Input
        placeholder="Ano"
        w="80%"
        onChangeText={(value) => setAno(value)}
      />
      <Input
        placeholder="Horario"
        w="80%"
        onChangeText={(value) => setHorario(value)}
      />
      <Button
        mx="10"
        mb="3"
        size="lg"
        onPress={() => (addClass({ classRoom }), navigation.navigate("Home"))}
      >
        Submit
      </Button>
    </VStack>
  );
}
