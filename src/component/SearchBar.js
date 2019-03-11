import React from 'react';


class SearchBar extends React.Component{
    state = {term : ''}
    onInputChange = (e) =>{
        this.setState({term: e.target.value})
    }
    onFormSubmit = (e) =>{
        e.preventDefault();
        //Todo:Make sure to make callBack
        this.props.onTermSubmit(this.state.term);

    }
    render(){
        return (
            <div className = 'ui segment searchbar'>
                <form onSubmit = {this.onFormSubmit} className = 'ui form'>
                    <div className = 'field'>
                        <label>Video Seach</label>
                        <input 
                            type ='text' 
                            value = {this.state.term}
                            onChange = {this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchBar;