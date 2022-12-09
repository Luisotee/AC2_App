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
import { addTeacher } from "../../controlers/add-data";
import { querryStudents } from "../../controlers/get-data";
import { IProfessor } from "../../interface";

export function RegisterTeacher({ navigation }: any) {
  const [codigoProfessor, setCodigoProfessor] = React.useState("");
  const [nome, setNome] = React.useState("");
  const [endereco, setEndereco] = React.useState("");
  const [cidade, setCidade] = React.useState("");
  const [arrayProfessor, setArrayProfessor] = React.useState<Array<IProfessor>>(
    []
  );

  let teacher = {
    cidade: cidade,
    endereco: endereco,
    codigoProfessor: codigoProfessor,
    nome: nome,
  };

  async function getData(props: string) {
    const data = await querryStudents(props);

    data.forEach((doc) => {
      const subjectData = doc.data();
      const professor = Object.assign({}, subjectData, {
        cidade: subjectData.cidade,
        cod_prof: subjectData.cod_prof,
        endereco: subjectData.endereco,
        nome: subjectData.nome,
      });
      setArrayProfessor((prevProfessores) => {
        if (!Array.isArray(prevProfessores)) {
          prevProfessores = [];
        }
        return prevProfessores.concat([professor]);
      });
    });
  }

  useEffect(() => {
    getData("Professor");
  }, []);

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
        onPress={() => (
          addTeacher({ teacher }), navigation.navigate("TabsNav")
        )}
      >
        Submit
      </Button>
      <Text>Valores já cadastrados:</Text>
      <FlatList
        data={arrayProfessor}
        keyExtractor={(professor) => professor.nome}
        renderItem={({ item: professor }) => (
          <ScrollView>
            <Text>{professor.nome}</Text>
          </ScrollView>
        )}
      ></FlatList>
    </VStack>
  );
}
