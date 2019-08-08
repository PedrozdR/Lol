import React, { Component } from 'react';

import { View } from 'react-native';
import { Container, TouchableContainer, Column } from '../../styles';
import { ChampionImage, ChampionName } from './styles';

interface Props {
    champName: string,
    champImage?: string
}

export default class ChampionCard extends Component<Props> {
    render() {
        return (
            <TouchableContainer >
                <Column style={{ alignItems: "center" }}>
                    <ChampionImage source={{ uri: `http://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/${this.props.champImage}` }} />
                    <ChampionName>{this.props.champName}</ChampionName>
                </Column>
            </TouchableContainer>
        );
    }
}
