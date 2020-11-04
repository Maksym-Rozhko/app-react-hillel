import React, { useEffect } from "react";
import { Container, Header } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, NavLink, Route, Switch, Link } from "react-router-dom";
import { fetchGists } from "./redux/actions/actionGists";
import GistsList from "./components/GistsList/GistsList";
import Page404 from './components/404/404page';
import s from './githubgists.module.css';

export default function GithubGists() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGists());
    }, []);

    return (
        <Container className={s.header}>
            <Router>
                <Header>
                    <NavLink className={s.title} to="/">Github Gists </NavLink>
                </Header>
                <Switch>
                    <Route path="/" exact>
                        This is a github gists <Link to="/gists">Open GitHub Gists</Link>
                    </Route>
                    <Route path="/gists" component={GistsList} />
                    <Route path="*" component={Page404} />
                </Switch>
            </Router>
        </Container>
    )
}
