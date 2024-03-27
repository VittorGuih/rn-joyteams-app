import { useState } from "react";

import { Highlight } from "@components/Highlight";
import { Header } from "@components/Header";
import { GroupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";
import { GroupList } from "@components/GroupList";
import { Button } from "@components/Button";

import { Container } from "./styles";

export function Groups() {
    const [groups, setGroups] = useState<string[]>(['teste', 'teste']);
    const EMPTY_LIST_MESSAGE = "🎮 Que tal cadastrar a primeira turma? 🎮";
    return (
        <Container>
            <Header />
            <Highlight
                title="Turmas"
                subtitle="Jogue com a sua turma"
            />
            <GroupList
                data={groups}
                keyExtractor={(item, index) => `${item}-${index}`}
                renderItem={({ item, }) => <GroupCard title={item} />}
                ListEmptyComponent={<ListEmpty message={EMPTY_LIST_MESSAGE} />}
            />
            <Button title="Criar nova turma"/>
        </Container>
    )
}
