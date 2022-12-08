import { Button, HStack, Input, Text, TextArea, VStack } from "native-base";
import React from "react";
import { addHistory } from "../../controlers/add-data";

export function RegisterHistory({ navigation }: any) {
  const [codigoHistorico, setCodigoHistorico] = React.useState("");
  const [matricula, setMatricula] = React.useState("");
  const [codigoTurma, setCodigoTurma] = React.useState("");
  const [frequencia, setFrequencia] = React.useState("");
  const [nota, setNota] = React.useState("");

  let history = {
    codigoHistorico: codigoHistorico,
    matricula: matricula,
    codigoTurma: codigoTurma,
    frequencia: frequencia,
    nota: nota,
  };

  return (
    <VStack alignItems="center" space={4} mt="5">
      <Input
        placeholder="Codigo Historico"
        w="80%"
        onChangeText={(value) => setCodigoHistorico(value)}
      />
      <Input
        placeholder="Matricula"
        w="80%"
        onChangeText={(value) => setMatricula(value)}
      />
      <Input
        placeholder="Codigo Turma"
        w="80%"
        onChangeText={(value) => setCodigoTurma(value)}
      />
      <Input
        placeholder="Frequencia"
        w="80%"
        onChangeText={(value) => setFrequencia(value)}
      />
      <Input
        placeholder="Nota"
        w="80%"
        onChangeText={(value) => setNota(value)}
      />
      <Button
        mx="10"
        mb="3"
        size="lg"
        onPress={() => (
          addHistory({ history }), navigation.navigate("TabsNav")
        )}
      >
        Submit
      </Button>
    </VStack>
  );
}
