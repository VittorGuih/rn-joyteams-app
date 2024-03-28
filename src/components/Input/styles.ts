import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TextInput).attrs(({theme}) => ({
    placeholderTextColor: theme.COLORS.GRAY_300,
}))`
    flex: 1;

    min-height: 56px;
    max-height: 56px;

    background-color: ${({theme}) => theme.COLORS.GRAY_700};
    color: ${({theme}) => theme.COLORS.WHITE};

    border-radius: 6px;
    padding: 16px;
`