import React, { useState, useEffect} from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBound from '../Components/ErrorBound';
import './App.css';

function App () {
    const [ robots, setRobots ] = useState([]);
    const [ searchfield, setSearchfield ] = useState('');
    const [ count, setCount ] = useState(0);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users));
    }, []);

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    };

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return (
        (!robots.length) ?
        <h1 className='tc'>L O A D I N G . . . . . .</h1> :
        (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBound>
                        <CardList robots={filteredRobots} />
                    </ErrorBound>
                </Scroll>
                <h1 className='f2'>Click Counter</h1>
                <button className='f3 grow dib pa3 ma2 bg-light-blue br3 shadow-5' onClick={() => setCount(count + 1)}>Number of clicks = {count}</button>
                <button className='f3 grow dib pa3 ma2 bg-light-blue br3 shadow-5' onClick={() => setCount(0)}>Reset Clicks</button>
            </div>
        )
    )
}

export default App;
