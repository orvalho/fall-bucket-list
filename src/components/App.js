import React, {Component} from 'react';

import base from '../base';
import InputBox from './InputBox';
import IdeaList from './IdeaList';

export default class App extends Component {
    state = {ideas: []};

    componentDidMount() {
        this.ref = base.syncState('ideas', {
            context: this,
            state: 'ideas',
            asArray: true
        });
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    addIdea = idea => this.setState({ideas: [...this.state.ideas, idea]});
    
    updateIdea = (id, title, desc) => {
        const ideas = this.state.ideas.map(idea => idea.id === id ? {id, title, desc} : idea);
        this.setState({ideas});
    }

    deleteIdea = id => {
        const ideas = this.state.ideas.filter(idea => idea.id !== id);
        this.setState({ideas});
    };

    deleteAllIdeas = () => this.setState({ideas: []});

    render() {
        return (
            <div className="app">
                <h1>fall bucket list</h1>
                <InputBox addIdea={this.addIdea}/>
                <IdeaList 
                    ideas={this.state.ideas} 
                    updateIdea={this.updateIdea} 
                    deleteIdea={this.deleteIdea}
                />
                {!this.state.ideas.length ? 
                null : 
                <button className="ui mini olive button" onClick={this.deleteAllIdeas}>
                    DELETE ALL IDEAS
                </button>}
            </div>
        );
    }
}