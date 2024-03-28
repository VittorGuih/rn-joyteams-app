import { TouchableOpacityProps } from "react-native";
import { ButtonSpacingStyleProps, ButtonTypeStyleProps, Container, Title } from "./styles";

type Props = TouchableOpacityProps & {
    title: string,
    type?: ButtonTypeStyleProps,
    spacing?: ButtonSpacingStyleProps
}

export function Button({ title, type = 'SUCCESS', spacing = 0, ...rest }: Props) {
    return (
        <Container type={type} spacing={spacing} {...rest}>
            <Title>
                {title}
            </Title>
        </Container>
    )
}