import { VStack } from "native-base";
import { HomeCards } from "../cards/home-cards";
import { AvatarHome } from "./avatar";

export function Home({ navigation }: any) {
  return (
    <>
      <VStack justifyContent="center">
        <AvatarHome />
        <HomeCards
          desc="Configurações"
          iconType="settings"
          nextComponent=""
          navigation={navigation}
        />
        <HomeCards
          desc="Cadastrar Aluno"
          iconType="input"
          nextComponent="RegisterStudent"
          navigation={navigation}
        />
        <HomeCards
          desc="Cadastrar Disciplina"
          iconType="input"
          nextComponent=""
          navigation={navigation}
        />
        <HomeCards
          desc="Cadastrar Professor"
          iconType="input"
          nextComponent=""
          navigation={navigation}
        />
        <HomeCards
          desc="Cadastrar Turma"
          iconType="input"
          nextComponent=""
          navigation={navigation}
        />
        <HomeCards
          desc="Histórico"
          iconType="history"
          nextComponent=""
          navigation={navigation}
        />
      </VStack>
    </>
  );
}
