// Sample data for rooms
export const rooms = [
  {
    id: 1,
    name: "Deluxe Ocean View",
    type: "Deluxe",
    description: "Indulge in luxury with our Deluxe Ocean View room, featuring panoramic views of the crystal blue waters, a king-size bed with premium linens, elegant furnishings, and a spacious marble bathroom with deep soaking tub and separate rain shower.",
    price: 350,
    capacity: 2,
    size: 45, // in square meters
    amenities: ["King bed", "Ocean view", "Air conditioning", "Free WiFi", "Minibar", "40-inch TV", "Coffee machine", "Safe", "Luxury toiletries"],
    images: [
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
      "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"
    ],
    featured: true,
    available: true
  },
  {
    id: 2,
    name: "Royal Suite",
    type: "Suite",
    description: "Our most prestigious accommodation, the Royal Suite offers unparalleled luxury with a separate living room, dining area, and two bedrooms. Enjoy breathtaking panoramic ocean views, a private balcony, and exclusive access to our Executive Lounge.",
    price: 850,
    capacity: 4,
    size: 120, // in square meters
    amenities: ["2 Bedrooms", "Living room", "Dining area", "Private balcony", "Ocean view", "Air conditioning", "Free WiFi", "Full-size minibar", "65-inch TV", "Espresso machine", "Safe", "Luxury bathroom", "Bathrobe & slippers", "Executive lounge access"],
    images: [
      "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg",
      "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg",
      "https://images.pexels.com/photos/97083/pexels-photo-97083.jpeg"
    ],
    featured: true,
    available: true
  },
  {
    id: 3,
    name: "Garden View Room",
    type: "Standard",
    description: "Relax in our comfortable Garden View Room, featuring lush tropical garden views, a queen-size bed, modern amenities, and a cozy atmosphere perfect for unwinding after a day of exploring.",
    price: 220,
    capacity: 2,
    size: 35, // in square meters
    amenities: ["Queen bed", "Garden view", "Air conditioning", "Free WiFi", "Minibar", "32-inch TV", "Coffee maker", "Safe"],
    images: [
      "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg",
      "https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg",
      "https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg"
    ],
    featured: false,
    available: true
  },
  {
    id: 4,
    name: "Family Suite",
    type: "Suite",
    description: "Perfect for families, our spacious Family Suite offers a master bedroom with a king-size bed and a second bedroom with twin beds. Includes a comfortable living area, dining space, and all the amenities needed for a memorable family vacation.",
    price: 550,
    capacity: 5,
    size: 85, // in square meters
    amenities: ["Master bedroom with king bed", "Second bedroom with twin beds", "Living area", "Dining space", "Air conditioning", "Free WiFi", "Minibar", "50-inch TV", "Coffee maker", "Safe", "Family bathroom"],
    images: [
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
      "https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg",
      "https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg"
    ],
    featured: true,
    available: true
  },
  {
    id: 5,
    name: "Executive Room",
    type: "Deluxe",
    description: "Designed for business travelers, our Executive Room offers a comfortable work space, high-speed internet, a king-size bed, and access to our Executive Lounge with complimentary breakfast and evening cocktails.",
    price: 400,
    capacity: 2,
    size: 40, // in square meters
    amenities: ["King bed", "Work desk", "Air conditioning", "High-speed WiFi", "Minibar", "42-inch TV", "Coffee machine", "Safe", "Executive lounge access"],
    images: [
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg",
      "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
      "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg"
    ],
    featured: false,
    available: true
  },
  {
    id: 6,
    name: "Honeymoon Suite",
    type: "Suite",
    description: "Celebrate your special moments in our romantic Honeymoon Suite, featuring a luxurious king-size canopy bed, a private balcony with ocean views, a champagne bar, and a deep soaking tub for two.",
    price: 750,
    capacity: 2,
    size: 70, // in square meters
    amenities: ["King canopy bed", "Private balcony", "Ocean view", "Air conditioning", "Free WiFi", "Champagne bar", "55-inch TV", "Espresso machine", "Safe", "Deep soaking tub for two", "Luxury toiletries", "Rose petal turndown service"],
    images: [
      "https://images.pexels.com/photos/3754594/pexels-photo-3754594.jpeg",
      "https://images.pexels.com/photos/3201763/pexels-photo-3201763.jpeg",
      "https://images.pexels.com/photos/2736388/pexels-photo-2736388.jpeg"
    ],
    featured: true,
    available: true
  }
];

// Sample data for bookings
export const bookings = [
  {
    id: 1,
    roomId: 1,
    roomName: "Deluxe Ocean View",
    guestName: "John Smith",
    guestEmail: "john.smith@example.com",
    checkIn: new Date("2025-03-15"),
    checkOut: new Date("2025-03-20"),
    adults: 2,
    children: 0,
    totalPrice: 1750,
    status: "confirmed",
    createdAt: new Date("2025-01-15"),
  },
  {
    id: 2,
    roomId: 3,
    roomName: "Garden View Room",
    guestName: "Sarah Johnson",
    guestEmail: "sarah.j@example.com",
    checkIn: new Date("2025-03-10"),
    checkOut: new Date("2025-03-12"),
    adults: 1,
    children: 0,
    totalPrice: 440,
    status: "confirmed",
    createdAt: new Date("2025-01-20"),
  },
  {
    id: 3,
    roomId: 2,
    roomName: "Royal Suite",
    guestName: "Michael Brown",
    guestEmail: "m.brown@example.com",
    checkIn: new Date("2025-04-01"),
    checkOut: new Date("2025-04-05"),
    adults: 3,
    children: 1,
    totalPrice: 3400,
    status: "pending",
    createdAt: new Date("2025-02-01"),
  },
  {
    id: 4,
    roomId: 4,
    roomName: "Family Suite",
    guestName: "Jennifer Adams",
    guestEmail: "j.adams@example.com",
    checkIn: new Date("2025-03-25"),
    checkOut: new Date("2025-04-01"),
    adults: 2,
    children: 3,
    totalPrice: 3850,
    status: "confirmed",
    createdAt: new Date("2025-02-10"),
  },
  {
    id: 5,
    roomId: 5,
    roomName: "Executive Room",
    guestName: "David Wilson",
    guestEmail: "d.wilson@example.com",
    checkIn: new Date("2025-03-18"),
    checkOut: new Date("2025-03-21"),
    adults: 1,
    children: 0,
    totalPrice: 1200,
    status: "cancelled",
    createdAt: new Date("2025-01-25"),
  }
];

// Sample data for users
export const users = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+1 (555) 123-4567",
    joinDate: new Date("2024-12-15"),
    bookingsCount: 3,
    totalSpent: 2650,
    status: "active"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    phone: "+1 (555) 987-6543",
    joinDate: new Date("2024-11-20"),
    bookingsCount: 1,
    totalSpent: 440,
    status: "active"
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "m.brown@example.com",
    phone: "+1 (555) 456-7890",
    joinDate: new Date("2025-01-05"),
    bookingsCount: 1,
    totalSpent: 3400,
    status: "active"
  },
  {
    id: 4,
    name: "Jennifer Adams",
    email: "j.adams@example.com",
    phone: "+1 (555) 234-5678",
    joinDate: new Date("2024-12-28"),
    bookingsCount: 2,
    totalSpent: 4750,
    status: "active"
  },
  {
    id: 5,
    name: "David Wilson",
    email: "d.wilson@example.com",
    phone: "+1 (555) 876-5432",
    joinDate: new Date("2025-01-15"),
    bookingsCount: 1,
    totalSpent: 1200,
    status: "inactive"
  }
];

// Sample data for messages
export const messages = [
  {
    id: 1,
    name: "Robert Johnson",
    email: "robert.j@example.com",
    subject: "Question about Check-in Time",
    message: "Hello, I have a reservation for next week and was wondering if early check-in is possible? My flight arrives at 10 AM and I'd like to rest before exploring. Thank you!",
    date: new Date("2025-02-15"),
    read: true
  },
  {
    id: 2,
    name: "Lisa Martinez",
    email: "lisa.m@example.com",
    subject: "Special Anniversary Request",
    message: "My husband and I will be celebrating our 10th wedding anniversary during our stay next month. I was hoping to arrange something special in our room. Do you offer any anniversary packages or services?",
    date: new Date("2025-02-20"),
    read: false
  },
  {
    id: 3,
    name: "James Wilson",
    email: "james.w@example.com",
    subject: "Airport Transfer Inquiry",
    message: "Hi, I'd like to know if you offer airport transfer services, and if so, what is the cost? I'll be arriving on March 5th at 2 PM. Thank you for your assistance.",
    date: new Date("2025-02-22"),
    read: false
  },
  {
    id: 4,
    name: "Maria Garcia",
    email: "maria.g@example.com",
    subject: "Dietary Restrictions",
    message: "I have upcoming reservations at your hotel and I have some dietary restrictions (gluten-free and dairy-free). Can you please let me know if your restaurant can accommodate these needs? Thanks in advance.",
    date: new Date("2025-02-18"),
    read: true
  }
];

// Sample data for promotions
export const promotions = [
  {
    id: 1,
    title: "Early Summer Special",
    description: "Book your summer getaway early and save 20% on all room types for stays between June 1 and July 15.",
    discountType: "percentage",
    discountValue: 20,
    startDate: new Date("2025-03-01"),
    endDate: new Date("2025-05-15"),
    applicableRooms: "all",
    minStay: 3,
    status: "active"
  },
  {
    id: 2,
    title: "Weekend Escape",
    description: "Enjoy a special rate on our Deluxe and Suite rooms for weekend stays.",
    discountType: "percentage",
    discountValue: 15,
    startDate: new Date("2025-02-01"),
    endDate: new Date("2025-04-30"),
    applicableRooms: "selected",
    applicableRoomIds: [1, 2, 4, 6],
    minStay: 2,
    status: "active"
  },
  {
    id: 3,
    title: "Honeymoon Package",
    description: "Book our Honeymoon Suite for at least 5 nights and receive a complimentary couple's spa treatment and romantic dinner.",
    discountType: "value_added",
    discountValue: null,
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-12-31"),
    applicableRooms: "selected",
    applicableRoomIds: [6],
    minStay: 5,
    status: "active"
  },
  {
    id: 4,
    title: "Family Fun",
    description: "Book our Family Suite and get 50% off for kids' meals throughout your stay.",
    discountType: "value_added",
    discountValue: null,
    startDate: new Date("2025-04-01"),
    endDate: new Date("2025-09-30"),
    applicableRooms: "selected",
    applicableRoomIds: [4],
    minStay: 4,
    status: "inactive"
  }
];