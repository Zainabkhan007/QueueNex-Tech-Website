import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Dashboard = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get("/api/website/get_all_msgs/", {
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = res.data;
        if (data.error) {
          toast.error(data.error);
          return;
        }

        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
        toast.error("Error fetching messages");
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="p-4 lg:px-12 lg:h-screen">
      <h1 className="text-4xl font-bold">Welcome to the dashboard</h1>
      <p className="mt-4">
        Here you can see all the messages sent by the clients
      </p>
      {messages.length > 0 ? (
        <div className="mt-4">
          <h2 className="text-2xl font-bold">Messages</h2>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>
                </tr>
              </thead>
              {messages.map((message, index) => {
                return (
                  <tbody key={index}>
                    <tr>
                      <th>{index}</th>
                      <td>{message.name}</td>
                      <td>{message.email}</td>
                      <td>{message.message}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      ) : (
        <p>No messages</p>
      )}
    </div>
  );
};

export default Dashboard;
