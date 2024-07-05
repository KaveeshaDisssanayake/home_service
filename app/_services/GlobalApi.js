import { request } from "graphql-request";
import gql from "graphql-tag";

const MASTER_URL =
  "https://api-ap-south-1.hygraph.com/v2/" +
  process.env.NEXT_PUBLIC_MASTER_URL_KEY +
  "/master";

const getCategory = async () => {
  const query = gql`
    query Category {
      categories {
        bgcolor {
          hex
        }
        id
        name
        icon {
          url
        }
      }
    }
  `;

  try {
    const result = await request(MASTER_URL, query);
    return result;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

const getAllBusinessList = async () => {
  const query = gql`
    query BusinessList {
      businessLists {
        about
        address
        category {
          name
        }
        contactPerson
        email
        images {
          url
        }
        id
        name
      }
    }
  `;

  try {
    const result = await request(MASTER_URL, query);
    return result;
  } catch (error) {
    console.error("Error fetching business list:", error);
    throw error;
  }
};

const getBusinessByCategory = async (category) => {
  const query = gql`
    query MyQuery {
      businessLists(where: { category: { name: "${category}" } }) {
        about
        address
        category {
          name
        }
        contactPerson
        email
        id
        name
        images {
          url
        }
      }
    }
  `;

  try {
    const result = await request(MASTER_URL, query);
    return result;
  } catch (error) {
    console.error("Error fetching business by category:", error);
    throw error;
  }
};

const getBusinessById = async (id) => {
  const query = gql`
    query GetBusinessById {
      businessList(where: { id: "${id}" }) {
        about
        address
        category {
          name
        }
        contactPerson
        email
        id
        name
        images {
          url
        }
      }
    }
  `;

  try {
    const result = await request(MASTER_URL, query);
    return result;
  } catch (error) {
    console.error("Error fetching business by ID:", error);
    throw error;
  }
};

const createNewBooking = async (
  businessId,
  date,
  time,
  userEmail,
  userName
) => {
  const mutationQuery = gql`
    mutation CreateBooking {
      createBooking(
        data: {
          bookingStatus: Booked,
          businessList: { connect: { id: "${businessId}" } },
          date: "${date}",
          time: "${time}",
          userEmail: "${userEmail}",
          userName: "${userName}"
        }
      ) {
        id
      }
      publishManyBookings(to: PUBLISHED) {
        count
      }
    }
  `;

  try {
    const result = await request(MASTER_URL, mutationQuery);
    return result;
  } catch (error) {
    console.error("Error creating new booking:", error);
    throw error;
  }
};

const BusinessBookedSlot = async (businessId, date) => {
  const query = gql`
    query BusinessBookedSlot {
      bookings(where: { businessList_every: { id: "${businessId}" }, date: "${date}" }) {
        date
        time
      }
    }
  `;

  try {
    const result = await request(MASTER_URL, query);
    return result;
  } catch (error) {
    console.error("Error fetching booked slots:", error);
    throw error;
  }
};

const GetUserBookingHistory = async (userEmail) => {
  const query = gql`
    query GetUserBookingHistory {
      bookings(where: { userEmail: "${userEmail}" }) {
        businessList {
          name
          images {
            url
          }
          contactPerson
          address
        }
        date
        time
      }
    }
  `;

  try {
    const result = await request(MASTER_URL, query);
    return result;
  } catch (error) {
    console.error("Error fetching user booking history:", error);
    throw error;
  }
};

export default {
  getCategory,
  getAllBusinessList,
  getBusinessByCategory,
  getBusinessById,
  createNewBooking,
  BusinessBookedSlot,
  GetUserBookingHistory,
};
