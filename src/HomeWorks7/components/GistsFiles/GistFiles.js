import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { fetchGistsUrl } from "../../redux/actions/actionFiles";
import { getSelectedGistById } from "../../redux/selectors/selectorGists";
import { getFilesById, getFilesLoader } from "../../redux/selectors/selectorFiles";
import { Loader, Header } from "semantic-ui-react";
import  SyntaxHightlighter from 'react-syntax-highlighter';
// import s from './gistfiles.module.css';

function GistFiles() {
    const { gistId } = useParams();
    const selectedGist = useSelector(state => getSelectedGistById(state, gistId));
    const dispatch = useDispatch();

    useEffect(() => {
        if (selectedGist) {
            dispatch(fetchGistsUrl({files: selectedGist.files, gistId}))
        }
    }, [selectedGist, gistId]);

    const files = useSelector(state => getFilesById(state, gistId));
    const loader = useSelector(getFilesLoader);

    if (!selectedGist) {
        return <Redirect to="/" />
    }

    return (
        <>
            {   
                loader ? <Loader active inline='centered' size='massive'/> : 
                <div>
                    {
                        files.map((file, index) => (
                                <div key={index}>
                                    <div>
                                        <Header as='h2'>name: {file.filename}</Header>
                                        <Header as='h3'>language: {file.language}</Header>
                                        <Header as='h4'>size: {file.size}</Header>
                                    </div>
                                    <div>
                                        <SyntaxHightlighter language={file.language && file.language.toLocaleLowerCase()}>
                                            {file.filesScript}
                                        </SyntaxHightlighter>
                                    </div>

                                </div>
                            )
                        )
                    }
                </div>
            }

        </>
    );
}

export default GistFiles