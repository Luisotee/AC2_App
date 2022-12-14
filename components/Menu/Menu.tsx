import { VStack } from "native-base";
import { HomeCards } from "../cards/home-cards";
import { AvatarHome } from "../home/avatar";

export function Menu({ navigation }: any) {
  return (
    <>
      <VStack justifyContent="center">
        <HomeCards
          desc="Cadastrar Aluno"
          iconType="input"
          nextComponent="RegisterStudent"
          navigation={navigation}
        />
        <HomeCards
          desc="Cadastrar Disciplina"
          iconType="input"
          nextComponent="RegisterSubject"
          navigation={navigation}
        />
        <HomeCards
          desc="Cadastrar Professor"
          iconType="input"
          nextComponent="RegisterTeacher"
          navigation={navigation}
        />
        <HomeCards
          desc="Cadastrar Turma"
          iconType="input"
          nextComponent="RegisterClass"
          navigation={navigation}
        />
        <HomeCards
          desc="Histórico"
          iconType="input"
          nextComponent="RegisterHistory"
          navigation={navigation}
        />
        <HomeCards
          desc="Lista"
          iconType="list"
          nextComponent=""
          navigation={navigation}
        />
      </VStack>
    </>
  );
}
