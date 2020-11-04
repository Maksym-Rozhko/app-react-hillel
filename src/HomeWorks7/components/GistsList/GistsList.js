import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import GistFiles from '../GistsFiles/GistFiles';
import { getGists, getLoader } from "../../redux/selectors/selectorGists";
import { Container, Grid, GridColumn, Loader, Item } from "semantic-ui-react";
import { animateScroll as scroll } from "react-scroll";
import s from './gistlist.module.css';


function GistsList() {
    const loader = useSelector(getLoader);
    const gists = useSelector(getGists);

    const scrollToTop = () => {
        scroll.scrollToTop(); 
       };

    return (
        <Container title='top'>
            { 
                loader ? <Loader active indeterminate/> :
                <Grid className={s.container} columns={2}>
                    <GridColumn>
                        <Item.Group>
                            { gists.map((gist, i) => (
                                <Item key={i} id={gist.id}>
                                    <Item.Image size='small' src={gist.owner.avatar_url}/>
                                    <Item.Content>
                                        <Item.Header>{gist.owner.login}</Item.Header>
                                        {
                                            gist.public !== '' &&
                                            <Item.Description>
                                                <span>created at:</span> {gist.created_at}
                                                <br/>
                                                <span>description at:</span> {gist.description}
                                            </Item.Description>
                                        }
                                        <Item.Description>file: 
                                            <Link onClick={scrollToTop} to={`/gists/${gist.id}`}>
                                                { gist.files.map(file => file.filename).join(', ')}
                                            </Link>
                                        </Item.Description>
                                    </Item.Content>
                                </Item>
                            ))}
                        </Item.Group>
                    </GridColumn>
                    <GridColumn className={s.file}>
                        <Switch>
                            <Route path={`/gists/:gistId`} component={GistFiles} exact />
                        </Switch>
                    </GridColumn>
                </Grid>
            }
        </Container>
    );
}

export default GistsList;
