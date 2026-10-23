"use strict";

const bookingRules = {
  name: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  seats: /^(?:[1-9]|10)$/,
};

function validateBooking(booking) {
  const errors = {};
  if (!bookingRules.name.test(booking.name)) errors.name = "Name must contain alphabets only.";
  if (!bookingRules.email.test(booking.email)) errors.email = "Enter a valid email address.";
  if (!bookingRules.seats.test(String(booking.seats))) errors.seats = "Seats must be between 1 and 10.";
  return errors;
}

function createBooking(name, email, seats) {
  const booking = { name, email, seats: Number(seats) };
  const errors = validateBooking(booking);
  if (Object.keys(errors).length > 0) {
    throw new Error(Object.values(errors).join(" "));
  }
  return booking;
}

if (typeof document !== "undefined") {
  const form = document.createElement("form");
  form.innerHTML = `
    <input name="name" placeholder="Name">
    <input name="email" placeholder="Email">
    <input name="seats" type="number" min="1" max="10" placeholder="Seats">
    <button type="submit">Book Tickets</button>
  `;
  document.body.append(form);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    try {
      const data = Object.fromEntries(new FormData(form));
      console.log("Ticket details:", createBooking(data.name, data.email, data.seats));
    } catch (error) {
      console.log(`Booking error: ${error.message}`);
    }
  });
} else {
  console.log("Sample ticket:", createBooking("Ravi Kumar", "ravi@example.com", 2));
}
