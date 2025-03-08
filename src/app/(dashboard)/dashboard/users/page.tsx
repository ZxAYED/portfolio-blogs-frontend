"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface IUser {
  _id: string;
  name: string;
  email: string;
  image: string;
}

const UserManagement = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_URL}/user`);
      const data = await response.json();
      if (data.success) {
        setUsers(data.data);
      } else {
        toast.error("Failed to fetch users");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      toast.error("Error fetching users");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_LOCAL_URL}/user/${id}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      if (data.success) {
        toast.success("User deleted successfully");
        setUsers(users.filter((user) => user._id !== id));
      } else {
        toast.error("Error deleting user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Error deleting user");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="px-6 py-10 max-w-3xl mx-auto">
      <h1 className="text-4xl font-semibold mb-8 text-center">
        User Management
      </h1>
      {loading ? (
        <div className="text-center min-h-screen">Loading...</div>
      ) : (
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border p-4 text-left">Image</th>
              <th className="border p-4 text-left">Name</th>
              <th className="border p-4 text-left">Email</th>
              <th className="border p-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-4">
                  No users available
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user._id}>
                  <td className="border p-4">
                    <Image
                      width={40}
                      height={40}
                      quality={100}
                      src={user.image}
                      alt={user.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </td>
                  <td className="border p-4">{user.name}</td>
                  <td className="border p-4">{user.email}</td>
                  <td className="border p-4">
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="bg-red-500 text-white p-2 px-4 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserManagement;
