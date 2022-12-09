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
import React, { useEffect, useState } from "react";
import { addSubject } from "../../controlers/add-data";
import { querryStudents } from "../../controlers/get-data";
import { IDisciplina } from "../../interface";

export function RegisterSubject({ navigation }: any) {
  const [codigoDisciplina, setCodigoDisciplina] = React.useState("");
  const [disciplina, setDisciplina] = React.useState("");
  const [cargaHoraria, setCargaHoraria] = React.useState("");
  const [arrayDisiciplina, setArrayDisciplina] = useState<Array<IDisciplina>>(
    []
  );

  let subject = {
    codigoDisciplina: codigoDisciplina,
    disciplina: disciplina,
    cargaHoraria: cargaHoraria,
  };

  async function getData(props: string) {
    const data = await querryStudents(props);

    data.forEach((doc) => {
      const subjectData = doc.data();
      const disciplina = Object.assign({}, subjectData, {
        carga_hor: subjectData.carga_hor,
        cod_disc: subjectData.cod_disc,
        nome_disc: subjectData.nome_disc,
      });
      setArrayDisciplina((prevDisciplinas) => {
        if (!Array.isArray(prevDisciplinas)) {
          prevDisciplinas = [];
        }
        return prevDisciplinas.concat([disciplina]);
      });
    });
  }

  useEffect(() => {
    getData("Disciplina");
  }, []);

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
        onPress={() => (
          addSubject({ subject }), navigation.navigate("TabsNav")
        )}
      >
        Submit
      </Button>
      <Text>Valores já cadastrados:</Text>
      <FlatList
        data={arrayDisiciplina}
        keyExtractor={(disciplina) => disciplina.nome_disc}
        renderItem={({ item: disciplina }) => (
          <ScrollView>
            <Text>{disciplina.nome_disc}</Text>
          </ScrollView>
        )}
      ></FlatList>
    </VStack>
  );
}
