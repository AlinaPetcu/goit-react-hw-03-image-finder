import React, {Component} from 'react';
import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };
    render() {
        return (
            <header className={css.searchbar}>
                <form className={css.searchbarform} onSubmit={this.handleSubmit}>
                    <button type="submit" className={css.searchbarbutton}>
                        <span className={css.searchbarbuttonlabel}>Search</span>
                    </button>

                    <input
                        className={css.searchbarinput}
                        type="text"
                        value={this.state.query}
                        onChange={this.handleChange}
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        );
    }
}

export default Searchbar;