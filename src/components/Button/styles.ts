import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonTypeStyleProps = 'SUCCESS' | 'DANGER';
export type ButtonSpacingStyleProps = 'DEFAULT' | number;

type Props = {
    type: ButtonTypeStyleProps;
    spacing: ButtonSpacingStyleProps;
}

export const Container = styled(TouchableOpacity) <Props>`
    flex: 1;
    
    min-height: 56px;
    max-height: 56px;

    background-color: ${({ theme, type }) => (
        type === 'SUCCESS'
            ? theme.COLORS.GREEN_700
            : theme.COLORS.RED_DARK
    )};

    border-radius: 6px;
    justify-content: center;
    align-items: center;

    margin-top: ${({ spacing }) => (
        spacing === 'DEFAULT'
            ? '0px'
            : spacing + 'px'
    )};
`

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.WHITE};
`