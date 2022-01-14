import React, { useState } from "react";
const e_data = [
  {
    name: "Cy Ganderton",
    job: "Quality Control Specialist",
    company: "Littel, Schaden and Vandervort",
    location: "Littel, Schaden and Vandervort",
    lastLogin: "12/16/2020",
    favColor: "blue",
    income: 12.5,
  },
  {
    name: "dani",
    job: "Quality Control Specialist",
    company: "Littel, Schaden and Vandervort",
    location: "Littel, Schaden and Vandervort",
    lastLogin: "12/16/2020",
    favColor: "blue",
    income: 13.5,
  },
  {
    name: "safo",
    job: "Quality Control Specialist",
    company: "Littel, Schaden and Vandervort",
    location: "Littel, Schaden and Vandervort",
    lastLogin: "12/16/2020",
    favColor: "blue",
    income: 14.5,
  },
  {
    name: "abd",
    job: "Quality Control Specialist",
    company: "Littel, Schaden and Vandervort",
    location: "Littel, Schaden and Vandervort",
    lastLogin: "12/16/2020",
    favColor: "blue",
    income: 12.5,
  },
  {
    name: "xyz",
    job: "Quality Control Specialist",
    company: "Littel, Schaden and Vandervort",
    location: "Littel, Schaden and Vandervort",
    lastLogin: "12/16/2020",
    favColor: "blue",
    income: 1.5,
  },
];
const Test = () => {
  const [data, setData] = useState(e_data);
  const sort = (order) => {
    console.log("click");
    if (order === "num") {
      const sorted = data.sort((a, b) => {
        return b.income - a.income;
      });
      setData(sorted);
    }
    if (order === "alpha") {
      const sorted = data.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      );
      setData(sorted);
    }
  };
  return (
    <div>
      <div class="dropdown">
        <div tabindex="0" class="m-1 btn">
          Sort by
        </div>
        <ul
          tabindex="0"
          class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 text-white"
        >
          <li onClick={() => sort("alpha")}>
            <a>Name</a>
          </li>
          <li>
            <a>Job</a>
          </li>
          <li>
            <a>location</a>
          </li>
          <li onClick={() => sort("num")}>
            <a>Income</a>
          </li>
        </ul>
      </div>
      <div className="overflow-x-auto overflow-y-auto text-white">
        <table className="table w-full table-compact">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>company</th>
              <th>location</th>
              <th>Last Login</th>
              <th>Favorite Color</th>
              <th>Income</th>
            </tr>
          </thead>
          <tbody>
            {data.map((val, index) => {
              return (
                <tr key={index}>
                  <th className="text-r">{index + 1}</th>
                  <td className="text-l">{val.name}</td>
                  <td className="text-l">{val.job}</td>
                  <td className="text-l">{val.company}</td>
                  <td className="text-l">{val.location}</td>
                  <td className="text-r">{val.lastLogin}</td>
                  <td className="text-l">{val.favColor}</td>
                  <td className="text-r">${val.income}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Test;
