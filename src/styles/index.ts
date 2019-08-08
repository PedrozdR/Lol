import styled from "styled-components/native";
import { colors } from "./themes/colors";

export const Container = styled.View`
    flex:1;
    background: ${colors.back};
`
export const TouchableContainer = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8  
})`

`
export const Column = styled.View`
    flex-direction: column;
`
export const Row = styled.View`
    flex-direction: column
`