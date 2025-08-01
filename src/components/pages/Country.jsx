import "./Country.scss";
import React, { Component } from "react";
//name, capital, population, area

export default class Country extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateID: null,
      name: "",
      capital: "",
      population: "",
      area: "",
      data: JSON.parse(localStorage.getItem("capital")) || [],
    };
  }

  handleSubmit = (e) => {
    const { updateID: id, name, capital, population, area, data } = this.state;
    e.preventDefault();

    if (id) {
      console.log("update");
      const updateData = data.map((item) =>
        item.id === id ? { id, name, capital, population, area } : item
      );
      this.setState(
        {
          data: updateData,
          updateID: null,
          name: "",
          capital: "",
          population: "",
          area: "",
        },
        () => localStorage.setItem("capital", JSON.stringify(this.state.data))
      );
    } else {
      const country = {
        id: Date.now(),
        name,
        capital,
        population,
        area,
      };
      this.setState(
        {
          data: [...data, country],
          name: "",
          capital: "",
          population: "",
          area: "",
        },
        () => localStorage.setItem("capital", JSON.stringify(this.state.data))
      );
    }
  };

  handleUpdate = (item) => {
    this.setState({
      updateID: item.id,
      name: item.name,
      capital: item.capital,
      population: item.population,
      area: item.area,
    });
  };

  handleDelete = (id) => {
    const { data } = this.state;
    const newData = data.filter((item) => item.id !== id);
    this.setState({ data: newData }, () =>
      localStorage.setItem("capital", JSON.stringify(this.state.data))
    );
  };

  render() {
    const { name, capital, population, area, data } = this.state;
    return (
      <section className="country">
        <div className="container">
          <form onSubmit={this.handleSubmit} className="country__inputs">
            <input
              onChange={(e) => this.setState({ name: e.target.value })}
              type="text"
              placeholder="Name"
              value={name}
              required
            />
            <input
              onChange={(e) => this.setState({ capital: e.target.value })}
              type="text"
              placeholder="Capital"
              value={capital}
              required
            />
            <input
              onChange={(e) => this.setState({ population: e.target.value })}
              type="number"
              placeholder="Population"
              value={population}
              required
            />
            <input
              onChange={(e) => this.setState({ area: e.target.value })}
              type="number"
              placeholder="Area"
              value={area}
              required
            />
            <button className="" type="submit">
              Add Data
            </button>
          </form>
          <div className="country__card-wrapper">
            {data?.map((item) => (
              <div className="country__card" key={item.id}>
                <h3>{item.name}</h3>
                <p>{item.capital}</p>
                <p>{item.population}</p>
                <p>{item.area}</p>
                <div className="country__card-btns">
                  <button onClick={() => this.handleUpdate(item)}>
                    Update
                  </button>
                  <button onClick={() => this.handleDelete(item.id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
