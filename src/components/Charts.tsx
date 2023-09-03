import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { fetchCases } from "../feature/formSlice";
import "./style.css";
import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const Charts = () => {
  const cases = useAppSelector((state) => state.contact.cases);
  const dispatch = useAppDispatch();
  // const newDatas = cases.slice(0, 30);
  // console.log("dadadaa", newDatas);

  useEffect(() => {
    dispatch(fetchCases());
  }, []);

  return (
    <div className="conatct-container">
      <div className="header">
        <h1>Contact Page</h1>
      </div>

      <div className="main-body">
        <div className="sidebar-chart">
          <Link className="btn" to={"/"}>
            Contact
          </Link>
          <Link className="btn" to="/charts">
            Charts and Maps
          </Link>
        </div>

        <div className="chart-content">
          <div className="chart-box">
            <h1>Countries and Cases list</h1>

            <ResponsiveContainer className="line-chart" width="95%" aspect={2}>
              <LineChart data={cases}>
                <CartesianGrid />
                <XAxis dataKey="country" interval={"preserveStartEnd"} />
                <YAxis></YAxis>
                <Legend />
                <Tooltip />
                <Line
                  dataKey="cases"
                  type="monotone"
                  stroke="#494d5f"
                  activeDot={{ r: 15 }}
                />
                <Line
                  dataKey="active"
                  type="monotone"
                  stroke="#8884d8"
                  activeDot={{ r: 15 }}
                />
                <Line
                  dataKey="deaths"
                  type="monotone"
                  stroke="#f3797e"
                  activeDot={{ r: 15 }}
                />
                <Line
                  dataKey="recovered"
                  type="monotone"
                  stroke="#00c9a7"
                  activeDot={{ r: 15 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
