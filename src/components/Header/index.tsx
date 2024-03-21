import { BackIcon, BackButton, Container, Logo } from "./styles";
import LogoImg from "@assets/logo.png";

type Props = {
    showBackIcon?: boolean
}

export function Header({ showBackIcon = false }: Props) {
    return (
        <Container>
            {showBackIcon &&
                <BackButton>
                    <BackIcon />
                </BackButton>
            }
            <Logo source={LogoImg} />
        </Container>
    )
}