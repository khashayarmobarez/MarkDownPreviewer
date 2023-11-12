import React, { useState } from 'react';
import styles from './App.module.css';

import { ph } from './PlaceHolder';

// cdn
import { Remarkable } from 'remarkable';

const md = new Remarkable()

const App = () => {

    const [text, setText] = useState(ph)


    return (
        <div className={styles.container}>
                <h1>mark down previewer</h1>
            <div className={styles.markdownSec}>
                <h1>editor</h1>
                <textarea
                className={styles.textArea}
                id='editor'
                value={text}
                onChange={(e) => setText(e.target.value)}>
                    type in here
                </textarea>
            </div>
            <h2>output</h2>
            <preview
            id='preview'
            className={styles.preview}
            dangerouslySetInnerHTML={{ __html: md.render(text) }} 
            />
        </div>
    );
};

export default App;
