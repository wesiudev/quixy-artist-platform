"use client";
import { FaUser } from "react-icons/fa";
import moment from "moment";
export default function AdminOrders({ orders }: { orders: any }) {
  return (
    <div className="min-h-screen w-full bg-gray-100">
      <div className="flex flex-col pt-24 px-3 lg:px-6">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Twoje zamówienia
        </h1>
      </div>
      <div className="flex flex-col px-3 lg:px-6">
        {orders?.map((session: any, i: any) => (
          <div key={i} className="bg-white shadow-md rounded-md p-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-bold text-gray-800">
                Product Name: {session?.metadata?.productName}
              </h2>
              <div className="flex items-center">
                <FaUser className="mr-2" />
                <p className="text-gray-500">
                  {session.customer_details?.name}
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="flex flex-col mb-2 md:mb-0">
                <p className="text-gray-500">
                  Payment Status: {session?.payment_status}
                </p>
                <p className="text-gray-500">
                  Customer Email: {session.customer_details?.email}
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-gray-500">
                  Amount Total: {session?.amount_total / 100}PLN
                </p>
                <p className="text-gray-500">
                  Created:{" "}
                  {moment(session?.created * 1000).format("MMMM Do YYYY")}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
