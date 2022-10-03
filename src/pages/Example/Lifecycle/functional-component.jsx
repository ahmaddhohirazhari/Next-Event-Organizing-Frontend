import { useState, useEffect } from "react";

function Counter() {
  const [name, setName] = useState("");
  // name = digunakan untukpemanggilan di dalam element html
  // setName = digunakan untuk memanipulasi variabel

  useEffect(() => {
    // BERJALAN SETELAH PROSES RENDER JSX DAN HANYA DIJALANKAN 1X DIAWAL SAJA
    console.log("COMPONENT DID MOUNT IS RUNNING !");
    setTimeout(() => {
      // PROSES PEMANGGILAN DATA DARI DATABASE
      setName("Bagus Tri Harjanto");
    }, 5000);
  }, []);

  useEffect(() => {
    // BERJALAN KETIKA ADA PERUBAHAN DI DALAM STATE YANG DI DAFTARKAN DI DALAM [] / BAGIAN LAIN
    console.log("COMPONENT DID UPDATE IS RUNNING !");
  }, [name]);

  useEffect(() => {
    return () => {
      // BERJALAN KETIKA ADA KOMPONEN YANG DIHILANGKAN/DESTROY / BERPINDAH HALAMAN
      console.log("COMPONENT WILL UNMOUNT IS RUNNING !");
    };
  }, []);

  return (
    <div className="container text-center">
      <h1>Counter App</h1>
      <hr />
      <h3>{name}</h3>
    </div>
  );
}

export default Counter;
