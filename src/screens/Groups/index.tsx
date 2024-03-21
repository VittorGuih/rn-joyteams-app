import { Highlight } from "@components/Highlight";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { GroupCard } from "@components/GroupCard";

export function Groups() {
    return (
        <Container>
            <Header />
            <Highlight 
                title="Turmas"
                subtitle="Jogue com a sua turma 2W"
            />
            <GroupCard title="Grupo 1"/>
            <GroupCard title="Grupo 2"/>
        </Container>
    )
}

