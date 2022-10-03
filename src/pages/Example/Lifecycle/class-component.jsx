import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    console.log("CONSTRUCTOR IS RUNNING !");
    this.state = {
      name: "",
      data: [],
    };
  }

  componentDidMount() {
    // BERJALAN SETELAH PROSES RENDER JSX DAN HANYA DIJALANKAN 1X DIAWAL SAJA
    console.log("COMPONENT DID MOUNT IS RUNNING !");
    setTimeout(() => {
      // PROSES PEMANGGILAN DATA DARI DATABASE
      this.setState({
        name: "Bagus Tri Harjanto",
        data: ["1", "2", "3"],
      });
    }, 5000);
  }

  componentDidUpdate() {
    // BERJALAN KETIKA ADA PERUBAHAN DI DALAM STATE / BAGIAN LAIN
    console.log("COMPONENT DID UPDATE IS RUNNING !");
  }

  componentWillUnmount() {
    // BERJALAN KETIKA ADA KOMPONEN YANG DIHILANGKAN/DESTROY / BERPINDAH HALAMAN
    console.log("COMPONENT WILL UNMOUNT IS RUNNING !");
  }

  render() {
    console.log("RENDER JSX IS RUNNING !");
    return (
      <div className="container text-center">
        <h1>Counter App</h1>
        <hr />
        <h3>{this.state.name}</h3>
        <h5>{this.state.data.length}</h5> {/* menghitung total data */}
      </div>
    );
  }
}

export default Counter;
