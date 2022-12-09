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
import { useAppState } from "native-base/lib/typescript/core/color-mode/hooks";
import React, { useEffect, useState } from "react";
import { RefreshControl } from "react-native";
import { addStudent } from "../../controlers/add-data";
import { querryStudents } from "../../controlers/get-data";
import { IStudent } from "../../interface/index";

export function RegisterStudent({ navigation }: any) {
  const [matricula, setMatricula] = React.useState("");
  const [nome, setNome] = React.useState("");
  const [endereco, setEndereco] = React.useState("");
  const [cidade, setCidade] = React.useState("");
  const [foto, setFoto] = React.useState("");
  const [alunos, setAlunos] = useState<Array<IStudent>>([]);

  async function getData(props: string) {
    // Query the students collection and get a QuerySnapshot
    const data = await querryStudents(props);

    // Loop through the documents in the QuerySnapshot
    data.forEach((doc) => {
      // Get the data from the current document
      const studentData = doc.data();

      // Convert the DocumentData object to an IStudent object
      const student = Object.assign({}, studentData, {
        cidade: studentData.cidade,
        endereco: studentData.endereco,
        foto: studentData.foto,
        matricula: studentData.matricula,
        nome: studentData.nome,
      });

      // Add the IStudent object to the alunos array
      setAlunos((prevAlunos) => {
        // Make sure prevAlunos is an array
        if (!Array.isArray(prevAlunos)) {
          prevAlunos = [];
        }
        // Use the concat method to add the student to the alunos array
        return prevAlunos.concat([student]);
      });
    });
  }

  let student = {
    cidade: cidade,
    endereco: endereco,
    foto: foto,
    matricula: matricula,
    nome: nome,
  };

  useEffect(() => {
    getData("Aluno");
  }, []);

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
        onPress={() => (
          addStudent({ student }), navigation.navigate("TabsNav")
        )}
      >
        Submit
      </Button>
      <Text>Valores já cadastrados:</Text>
      <FlatList
        data={alunos}
        keyExtractor={(aluno) => aluno.nome}
        renderItem={({ item: aluno }) => (
          <ScrollView>
            <Text>{aluno.nome}</Text>
          </ScrollView>
        )}
      ></FlatList>
    </VStack>
  );
}
