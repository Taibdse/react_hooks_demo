import React from 'react';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="text-center">
                <h2 className="py-2 bg-success">About this mini project</h2>
                <p className="mt-2">Created by Bui Duc Tai</p>
                <p className="mt-2">Enjoy every line of code <a target="_blank" href="https://github.com/Taibdse/react_hooks_demo">here</a>!!</p>
            </div>
        );
    }
}


export default About;
