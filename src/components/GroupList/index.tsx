import { FlatListProps } from "react-native";
import { Container } from "./styles";

type Props = FlatListProps<any | string | React.FunctionComponent<any>> & {}


export function GroupList({ ...rest }: Props) {
    return (
        <Container
            {...rest}
        />
    )
}