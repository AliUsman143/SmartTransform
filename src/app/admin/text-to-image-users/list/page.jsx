"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";
import Sidebar from "../../components/sidebar/Sidebarr";
import Header from "../../components/header/Header";
import Swal from "sweetalert2"; 

function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [data, setData] = useState([
    { id: 1, name: "Ali Khan", email: "ali@example.com" },
    { id: 2, name: "Sara Ahmed", email: "sara@example.com" },
    { id: 3, name: "Usman Raza", email: "usman@example.com" },
    { id: 4, name: "Ayesha Tariq", email: "ayesha@example.com" },
    { id: 5, name: "Bilal Khan", email: "bilal@example.com" },
    { id: 6, name: "Hina Aslam", email: "hina@example.com" },
    { id: 7, name: "Farhan Malik", email: "farhan@example.com" },
    { id: 8, name: "Fahad Malik", email: "fahad@example.com" },
  ]);

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get("authToken");
        const response = await axios.get("/api/employee", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setData((prevData) => [...prevData, ...response.data.data]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    if (query === "") {
      setFilteredData(data);
    } else {
      const filtered = data.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.email.toLowerCase().includes(query) // ✅ status hata diya
      );
      setFilteredData(filtered);
    }
  }, [searchQuery, data]);

  const handleDelete = async (id) => {
    console.log("Deleting user with ID:", id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const token = Cookies.get("authToken");
          await axios.delete(`/api/employee/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
          });

          setData((prevData) => prevData.filter((item) => item.id !== id));

          Swal.fire("Deleted!", "User has been deleted.", "success");
        } catch (error) {
          console.error("Error deleting user:", error);
          Swal.fire("Error", "Failed to delete user.", "error");
        }
      }
    });
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="flex flex-1 bg-white">
        <Sidebar isSidebarOpen={isSidebarOpen} />

        <main className="flex-1 p-4 overflow-y-auto">
          <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 mt-4 overflow-auto">
              <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <h1 className="text-gray-700 font-medium text-2xl">
                  Text-to-Image Users
                </h1>
                <div className="flex items-center lg:order-2">
                  <form className="max-w-md mx-auto">
                    <label
                      htmlFor="default-search"
                      className="mb-2 text-sm font-medium sr-only text-white"
                    >
                      Search
                    </label>
                    <div className="relative">
                      <input
                        type="search"
                        id="default-search"
                        className="block w-full pl-8 mr-2 text-sm text-gray-900 rounded-lg bg-gray-50 focus:ring-blue-500 border-[0.5px] border-gray-200 placeholder-gray-400 focus:border-blue-500 py-2"
                        placeholder="Search here..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                      />
                      <svg
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                  </form>
                </div>
              </div>
            </nav>
          </header>

          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Sr#</th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => ( // ✅ data -> filteredData
                <tr key={item.id} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.email}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
}

export default Page;
