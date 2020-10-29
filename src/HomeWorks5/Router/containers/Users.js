import React, { useState, useEffect } from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import { Container, List, Image, Grid, GridColumn } from 'semantic-ui-react';
import UserDetails from './UserDetails';
import UserPosts from './UserPosts';
import UserAlbums from './UserAlbums';

function Users() {
  const [users, setUsers] = useState([]);
  const { path } = useRouteMatch();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(users => setUsers(users))
  }, []);

  return (
    <Container>
      <Grid columns={2}>
        <GridColumn>
          <List animated verticalAlign='middle'>
            { users.map(user => (
              <List.Item key={user.id}>
                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/mark.png' />
                <List.Content>
                  <List.Header as='a'>
                    <Link to={`/users/${user.id}`}>{user.name}</Link>
                  </List.Header>
                  <List.Description>
                    {user.email}
                  </List.Description>
                  <List.Description>
                    {user.phone}
                  </List.Description>
                  <Switch>
                    <Route path={`${path}/:userId`} exact>
                      { window.location.pathname === `/users/${user.id}` && <UserPosts/> }
                    </Route>
                  </Switch>
                  <Switch>
                    <Route path={`${path}/:userId`} exact>
                      { window.location.pathname === `/users/${user.id}` && <UserAlbums/> }
                    </Route>
                  </Switch>
                </List.Content>
              </List.Item>
            ))}
          </List>
        </GridColumn>
        <GridColumn>
          <Switch>
            <Route path={`${path}/:userId`} exact>
              <UserDetails/>
            </Route>
          </Switch>
        </GridColumn>
      </Grid>
    </Container>
  );
}

export default Users;
