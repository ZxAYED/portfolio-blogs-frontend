"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export interface IContact {
  _id: string;
  name: string;
  email: string;
  message: string;
}

const ContactManagement = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_LOCAL_URL}/user/contact`,
        {
          cache: "no-store",
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();
      console.log("🚀 ~ fetchContacts ~ data:", data);
      setContacts(data.data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      toast.error("Error fetching contacts");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_LOCAL_URL}/user/contact/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        toast.success("Contact deleted successfully");
        setContacts(
          contacts.filter((contact) => contact._id !== (id as string))
        );
      } else {
        toast.error("Error deleting contact");
      }
    } catch (error) {
      console.error("Error deleting contact:", error);
      toast.error("Error deleting contact");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="px-6 pb-10  mx-auto">
      <h1 className="text-4xl font-semibold mb-8 text-center">
        Contact Management
      </h1>
      {loading ? (
        <div className="text-center min-h-screen">Loading...</div>
      ) : (
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border p-4 text-left">Name</th>
              <th className="border p-4 text-left">Email</th>
              <th className="border p-4 text-left">Message</th>
              <th className="border p-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-4">
                  No contacts available
                </td>
              </tr>
            ) : (
              contacts.map((contact) => (
                <tr key={contact._id}>
                  <td className="border p-4">{contact.name}</td>
                  <td className="border p-4">{contact.email}</td>
                  <td className="border p-4">{contact.message}</td>
                  <td className="border p-4">
                    <button
                      onClick={() => handleDelete(contact._id as string)}
                      className="bg-red-500 text-white p-2 rounded"
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

export default ContactManagement;
