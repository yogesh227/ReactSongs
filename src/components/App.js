import React from 'react'
import { render } from '@testing-library/react'
import SongLists from './SongLists'
import SongDetail from './SongDetail';

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongLists />
                </div>
                <div className="column eight wide">
                    <SongDetail />
                </div>
            </div>
        </div>
    )

};

export default App;