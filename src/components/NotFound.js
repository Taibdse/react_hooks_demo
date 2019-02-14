import React from 'react';

class NotFound extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <h1 className="text-center" style={{marginTop: 200, fontStyle: 'italic' }}>Page Not Found</h1>
        );
    }
}

export default NotFound;
