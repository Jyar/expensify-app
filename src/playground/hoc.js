// Higher order Component  (HOC - A component that renders another component )
//Reuse code
//Render hijacking
// props manipulation
//abstract state 

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info please do not share</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};


//requireAuthentication

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? (<WrappedComponent {...props}/>) : <p>stop your not allowed</p>} 
            
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated = {true} info= "this is the component"/>, document.getElementById('app'));