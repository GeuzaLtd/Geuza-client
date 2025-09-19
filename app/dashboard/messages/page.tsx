"use client";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import {
  deleteMessage,
  getAllMessages,
  updateMessageStatus,
} from "@/services/adminService";
import { format } from "date-fns";
import {
  MdEmail,
  MdMarkEmailRead,
  MdMarkEmailUnread,
  MdClose,
} from "react-icons/md";
import { HiTrash } from "react-icons/hi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { MessageItem } from "@/redux/features/messageSlice";

interface MessageModalProps {
  message: MessageItem | null;
  onClose: () => void;
}

const MessageModal: React.FC<MessageModalProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 relative max-h-[90vh] flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <MdClose size={24} />
        </button>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2 text-black">
            Message Details
          </h3>
          <div className="border-b border-gray-200"></div>
        </div>
        <div className="space-y-4 overflow-y-auto pr-2">
          <div>
            <label className="font-medium text-black">From:</label>
            <p className="mt-1 text-black">{message.fullName}</p>
            <p className="text-black">{message.email}</p>
          </div>
          <div>
            <label className="font-medium text-black">Date:</label>
            <p className="mt-1 text-black">
              {format(new Date(message.createdAt), "MMM dd, yyyy")}
            </p>
          </div>
          <div>
            <label className="font-medium text-black">Message:</label>
            <div className="mt-1 max-h-[300px] overflow-y-auto bg-gray-50 p-4 rounded-lg">
              <p className="text-black whitespace-pre-wrap">
                {message.message}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MessagesPage: React.FC = () => {
  const { messages, loading } = useSelector(
    (state: RootState) => state.messages
  );
  const { token } = useSelector((state: RootState) => state.auth);
  const [searchValue, setSearchValue] = React.useState("");
  const [selectedMessage, setSelectedMessage] =
    React.useState<MessageItem | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllMessages(token || ""));
  }, [dispatch, token]);

  const handleOpenMessageModal = (message: MessageItem) => {
    setSelectedMessage(message);
    handleToggleRead(null, message.id, "unread");
  };

  const handleToggleRead = async (
    e: React.MouseEvent | null,
    messageId: string,
    currentStatus: string
  ) => {
    if (e) {
      e.stopPropagation();
    }
    try {
      const status = currentStatus === "read" ? "unread" : "read";
      await dispatch(
        updateMessageStatus({
          messageId,
          status: status as "read" | "unread",
          token: token || "",
        })
      ).unwrap();
      dispatch(getAllMessages(token || ""));
    } catch (error) {
      toast.error(
        (error as string) ||
          "Failed to update message status. Please try again."
      );
    }
  };

  const handleDelete = async (e: React.MouseEvent, messageId: string) => {
    e.stopPropagation();
    try {
      await dispatch(deleteMessage({ messageId, token: token || "" })).unwrap();
      toast.success("Message deleted successfully");
      dispatch(getAllMessages(token || ""));
    } catch (error) {
      toast.error(
        (error as string) || "Failed to delete message. Please try again."
      );
    }
  };

  const filteredMessages = useMemo(() => {
    if (!searchValue.trim()) return messages;

    return messages.filter(
      (message: MessageItem) =>
        (message.fullName || "")
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        (message.email || "")
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        (message.message || "")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
    );
  }, [messages, searchValue]);

  const formatDate = (date: string) => format(new Date(date), "MMM dd, yyyy");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchValue(e.target.value);

  return (
    <div className="p-4">
      <ToastContainer />
      {selectedMessage && (
        <MessageModal
          message={selectedMessage}
          onClose={() => setSelectedMessage(null)}
        />
      )}
      <div className="w-full flex justify-between px-20 pt-10 pb-5">
        <div className="text-2xl font-semibold text-black mb-8 flex items-center gap-2">
          Messages{" "}
          <div className="text-sm font-medium bg-green-600 text-white rounded-md w-6 h-6 flex items-center justify-center">
            <h2>
              {
                messages.filter(
                  (message: MessageItem) => message.status === "unread"
                ).length
              }
            </h2>
          </div>
        </div>
        <input
          type="text"
          className="h-[40px] w-[200px] bg-[#f7f3f1] rounded-full text-sm px-5 text-gray-500 outline-[#FFBF4B] border-none"
          value={searchValue}
          onChange={handleSearch}
          placeholder="Search a message..."
        />
      </div>
      <div className="grid grid-cols-1">
        <div className="px-20">
          {loading ? (
            <SkeletonMessageTable />
          ) : (
            <div className="bg-white rounded-xl overflow-x-auto shadow">
              <table className="w-full table-fixed">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      style={{ width: "250px" }}
                    >
                      From
                    </th>
                    <th
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      style={{ width: "300px" }}
                    >
                      Message
                    </th>
                    <th
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      style={{ width: "150px" }}
                    >
                      Date
                    </th>
                    <th
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      style={{ width: "120px" }}
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredMessages.map((message: MessageItem) => (
                    <tr
                      key={message.id}
                      onClick={() => handleOpenMessageModal(message)}
                      className={`transition-colors ${
                        message.status === "read"
                          ? "bg-gray-200 hover:bg-gray-300"
                          : "hover:bg-gray-100"
                      } cursor-pointer`}
                    >
                      <td
                        className="px-6 py-4 whitespace-nowrap"
                        style={{ width: "250px" }}
                      >
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                              <MdEmail className="h-5 w-5 text-gray-500" />
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-black truncate max-w-[150px]">
                              {message.fullName}
                            </div>
                            <div className="text-sm text-black truncate max-w-[150px]">
                              {message.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4" style={{ width: "300px" }}>
                        <div className="text-sm text-black truncate">
                          {message.message}
                        </div>
                      </td>
                      <td
                        className="px-6 py-4 whitespace-nowrap text-sm text-black"
                        style={{ width: "150px" }}
                      >
                        {formatDate(message.createdAt)}
                      </td>
                      <td
                        className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                        style={{ width: "120px" }}
                      >
                        <div className="flex items-center justify-end space-x-2">
                          <div className="relative group">
                            <button
                              onClick={(e) =>
                                handleToggleRead(e, message.id, message.status)
                              }
                              className={`p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer ${
                                message.status === "read"
                                  ? "text-gray-400"
                                  : "text-green-600"
                              }`}
                            >
                              {message.status === "read" ? (
                                <MdMarkEmailUnread className="h-5 w-5" />
                              ) : (
                                <MdMarkEmailRead className="h-5 w-5" />
                              )}
                            </button>
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none">
                              {message.status === "read"
                                ? "Mark as unread"
                                : "Mark as read"}
                            </div>
                          </div>
                          <div className="relative group">
                            <button
                              onClick={(e) => handleDelete(e, message.id)}
                              className="text-red-600 hover:text-red-900 p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
                            >
                              <HiTrash className="h-5 w-5" />
                            </button>
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none">
                              Delete message
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const SkeletonMessageTable: React.FC = () => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow animate-pulse">
      <div className="divide-y divide-gray-200">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="flex items-center space-x-4 p-6">
            <div className="h-10 w-10 rounded-full bg-gray-300"></div>
            <div className="flex-1 space-y-3">
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            </div>
            <div className="h-4 w-24 bg-gray-300 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagesPage;
