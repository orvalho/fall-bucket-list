import React from 'react';

export default props => {
    const {id, title, desc} = props.idea;
    return (
        <div className="item">
            <div className="right floated content">
                <button className="ui mini olive button" onClick={() => props.editing(id)}>
                    UPDATE
                </button>
                <button className="ui mini olive button" onClick={() => props.deleteIdea(id)}>
                    DELETE
                </button>
            </div>
            <div className="content">
                <div className="header">{title}</div>
                <div>{desc}</div>
            </div>
        </div>
    );
};
