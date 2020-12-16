import React, { Component } from 'react';

class AddTask extends Component {
    minDate = new Date().toISOString().slice(0, 10)
    state = {
        text: "",
        important: false,
        date: this.minDate
    }

    handleChange = (event) => {
        let val = event.target.value
        if (event.target.type === 'checkbox') {
            val = event.target.checked
        }

        this.setState({
            [event.target.name]: val
        })
    }

    handleClick = () => {
        console.log('dodaj')
        const { text, important, date } = this.state
        const add = this.props.add(text, date, important)
        if (add) {
            this.setState({
                text: '',
                important: false,
                date: this.minDate
            })
        }
    }
    render() {
        let maxDate = this.minDate.slice(0, 4) * 1 + 1;
        maxDate = maxDate + '-12-31'
        return (
            <div className="form">
                <div>
                    <input
                        type="text"
                        placeholder="dodaj zadanie"
                        value={this.state.text}
                        name="text"
                        onChange={this.handleChange}
                    />

                    <input
                        type="checkbox"
                        placeholder="dodaj zadanie"
                        checked={this.state.important}
                        name="important"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="important">Priorytet</label>
                    <br />
                    <label htmlFor="date">Data do</label>
                    <input
                        type="date"
                        name='date'
                        value={this.state.date}
                        max={maxDate}
                        min={this.minDate}
                        onChange={this.handleChange}
                    />
                    <button onClick={this.handleClick}>Dodaj</button>
                </div>
                <hr />
            </div>
        );
    }
}

export default AddTask;