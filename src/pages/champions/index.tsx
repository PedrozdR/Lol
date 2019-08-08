import React, { Component } from 'react';

import { View, Text } from 'react-native';
import { Container } from '../../styles';
import ChampionCard from '../../components/champion-card';
import { FlatList } from 'react-native-gesture-handler';
import { NavigationScreenProps } from 'react-navigation';



// import { Container } from './styles';

interface Props extends NavigationScreenProps {

}

interface State {
    champions: [],
}

export default class ChampionsScreen extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            champions: require('../../assets/data/champions.json'),
        }
    }

    render() {
        return (
            <Container>
                <FlatList
                    style={{ flex: 1 }}
                    contentContainerStyle={{ alignItems: "center" }}
                    data={this.state.champions.data}
                    numColumns={2}
                    ItemSeparatorComponent={() => (
                        <View style={{ height: 18, paddingHorizontal: 16 }} />
                    )}
                    renderItem={({ item }) => (
                        <ChampionCard
                            champImage={item.image.full}
                            champName={item.id}
                        />
                    )
                    }

                />

            </Container>
        )
    }
}p
