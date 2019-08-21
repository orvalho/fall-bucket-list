import React, {Component} from 'react';

import IdeaItem from './IdeaItem';
import UpdateBox from './UpdateBox';

export default class BookList extends Component {
    state = {editing: null};

    editing = id => this.setState({editing: id});

    render() {
        return (
            <div className="ui middle aligned divided list">
                {this.props.ideas.map(idea => {
                    if (this.state.editing === idea.id) {
                        return (
                            <UpdateBox 
                                key={idea.id} 
                                idea={idea}
                                updateIdea={this.props.updateIdea}
                                editing={this.editing} 
                            />
                        );
                    }
                    return (
                        <IdeaItem 
                            key={idea.id} 
                            idea={idea}
                            deleteIdea={this.props.deleteIdea}
                            editing={this.editing}
                        />
                    );
                })}
            </div>
        );
    }
}