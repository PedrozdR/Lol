import { colors } from "../../styles/themes/colors";

import styled from "styled-components/native";

export const ChampionImage = styled.Image`
	width: 140px;
	height: 140px;
	border-radius:4px;
	background: ${colors.white};	
`
export const ChampionName = styled.Text`
	font-size: 20px;
	font-weight: bold;
	color: ${colors.primary};
` 	