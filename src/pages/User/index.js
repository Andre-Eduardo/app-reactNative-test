import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import api from '../../services/api';
import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles';

export default class User extends Component {
  state = {
    stars: [],
  };

  static propTypes = {
    route: PropTypes.shape().isRequired,
  };

  async componentDidMount() {
    this.setTitle();
    const { route } = this.props;
    const users = route.params.user;
    console.tron.log(users);
    const response = await api.get(`/users/${users.login}/starred`);
    this.setState({ stars: response.data });
  }

  setTitle = () => {
    const { navigation, route } = this.props;
    navigation.setOptions({
      title: route.params.user.name,
    });
  };

  render() {
    const { route } = this.props;
    const { stars } = this.state;

    const { user } = route.params;

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>

        <Stars
          data={stars}
          keyExtractor={(star) => String(star.id)}
          renderItem={({ item }) => (
            <Starred>
              <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
              <Info>
                <Title>{item.name}</Title>
                <Author>{item.owner.login}</Author>
              </Info>
            </Starred>
          )}
        />
      </Container>
    );
  }
}
