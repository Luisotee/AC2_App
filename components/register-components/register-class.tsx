import {
  Button,
  FlatList,
  HStack,
  Input,
  ScrollView,
  Text,
  TextArea,
  VStack,
} from "native-base";
import React, { useEffect } from "react";
import { addClass } from "../../controlers/add-data";
import { querryStudents } from "../../controlers/get-data";
import { ITurma } from "../../interface";

export function RegisterClass({ navigation }: any) {
  const [codigoTurma, setcodigoTurma] = React.useState("");
  const [codigoDisciplina, setCodigoDisciplina] = React.useState("");
  const [codigoProfessor, setCodigoProfessor] = React.useState("");
  const [ano, setAno] = React.useState("");
  const [horario, setHorario] = React.useState("");
  const [arrayTurma, setArrayTurma] = React.useState<Array<ITurma>>([]);

  async function getData(props: string) {
    const data = await querryStudents(props);

    data.forEach((doc) => {
      const subjectData = doc.data();
      const turma = Object.assign({}, subjectData, {
        ano: subjectData.ano,
        cod_disc: subjectData.cod_disc,
        cod_prof: subjectData.cod_prof,
        cod_turma: subjectData.cod_turma,
        horario: subjectData.horario,
      });
      setArrayTurma((prevTurmas) => {
        if (!Array.isArray(prevTurmas)) {
          prevTurmas = [];
        }
        return prevTurmas.concat([turma]);
      });
    });
  }

  let classRoom = {
    codigoTurma: codigoTurma,
    codigoDisciplina: codigoDisciplina,
    codigoProfessor: codigoProfessor,
    ano: ano,
    horario: horario,
  };

  useEffect(() => {
    getData("Turma");
  }, []);

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
        onPress={() => (
          addClass({ classRoom }), navigation.navigate("TabsNav")
        )}
      >
        Submit
      </Button>
      <Text>Valores já cadastrados:</Text>
      <FlatList
        data={arrayTurma}
        keyExtractor={(turma) => turma.cod_turma}
        renderItem={({ item: turma }) => (
          <ScrollView>
            <Text>{turma.cod_turma}</Text>
          </ScrollView>
        )}
      ></FlatList>
    </VStack>
  );
}
