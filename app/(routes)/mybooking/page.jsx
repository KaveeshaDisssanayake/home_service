"use client";
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookingHistoryList from "./_components/BookingHistoryList";
import GlobalApi from "@/app/_services/GlobalApi";
import { useSession } from "next-auth/react";

function MyBooking() {
  const { data } = useSession();
  const [bookingHistory, setBookingHistory] = useState([]);

  useEffect(() => {
    if (data && data.user && data.user.email) {
      GetUserBookingHistory(data.user.email);
    }
  }, [data]);

  const GetUserBookingHistory = (userEmail) => {
    GlobalApi.GetUserBookingHistory(userEmail)
      .then(resp => {
        console.log("Fetched Booking History:", resp);
        setBookingHistory(resp.bookings);
      })
      .catch(error => {
        console.error("Error fetching booking history:", error);
      });
  };

  return (
    <div className="my-10 mx-5 md:mx-36">
      <h2 className="font-bold text-[20px] my-2">My bookings</h2>
      <Tabs defaultValue="booked" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="booked">Booked</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="booked">
          <BookingHistoryList bookingHistory={bookingHistory} />
        </TabsContent>
        <TabsContent value="completed">
          The Services You have completed here
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default MyBooking;
