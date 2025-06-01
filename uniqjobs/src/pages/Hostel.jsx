import React from "react";
import HouseCard from "../components/facilities/HomeCard";

const mensHostelData = [
  {
    title: "Amma House",
    owner: "Sreedhar",
    price: "₹400",
    priceLabel: "/Day",
    sharingOptions: [
      "Tariff Amount Rs.400 per DAY Accommodation, With FOOD Service",
      "2 Sharing – 7500 + 3 times Food / Month",
      "3 Sharing – 7000 + 3 times Food / Month",
      "4 Sharing – 6500 + 3 times Food / Month",
      "6 Sharing – 6000 + 3 times Food / Month",
    ],
    address: "29/5 Viswanadhapuram Main Road, Kodambakkam",
    phoneNumbers: ["+91 96001 14466", "+91 96001 14466"],
  },
  {
    title: "JM International",
    owner: "Murali",
    priceLabel: "/Day",
    price: "₹250",
    sharingOptions: [
      "Tariff Amount Rs.250 per DAY Accommodation , NO FOOD Service.",
    ],
    address: "Kodambakkam",
    phoneNumbers: ["+91 9952945666"],
  },
  {
    title: "Sri Venkateshwara Men's Hostel",
    owner: "",
    price: "₹6,000",
    priceLabel: "/Month",
    sharingOptions: [
      "1 MONTH with Food 7 Sharing – 6000 + EB 200",
      "1 MONTH with Food 4 Sharing –6200 + EB 200",
      "1 MONTH with Food 7 Sharing 2 Sharing , 1 Share – 7200 + EB 200",
    ],
    address:
      "Nr.Kodambakkam Railway Station,Bharathy Nagar Bus Stop,T Nagar, Chennai - 600 017",
    phoneNumbers: ["+91 9003145058", "+91 7305395941"],
  },
  {
    title: "Malligai PG Hostel",
    owner: "Prem",
    price: "₹5,500",
    priceLabel: "/Month",
    sharingOptions: [
      "Tariff Amount Rs.5,500 per Month Accommodation + 3 Times Food.",
    ],
    address: "Kodambakkam",
    phoneNumbers: ["+91 9003145058"],
  },
  {
    title: "Sri Ragavendra Men's Hostel",
    owner: "",
    price: "₹5,000",
    priceLabel: "/Month",
    sharingOptions: [
      "Tariff Amount Rs.5000 per Month Accommodation + 3 Times Food.",
    ],
    address:
      "No.1/18, Thiruvalluvarpuram First Street, Choolaimedu,Chennai-600 094.",
    phoneNumbers: ["+91 98401597988", "+91 9025756079"],
  },
  {
    title: "J.K. Mansion",
    owner: "",
    price: "₹3,500",
    priceLabel: "/Month",
    sharingOptions: ["1 Month 3500 without food."],
    address: "49, Habibullah Road, T.Nagar, Chennai - 600 017.",
    phoneNumbers: ["+91 9003145058"],
  },
  {
    title: "Venkateswara Men’s Hostel & PG",
    owner: "Not Provided",
    price: "",
    sharingOptions: ["1 Month 3500 without food."],
    address:
      "12, Natesan ST, postal colony, T. Nagar, Chennai, Tamil Nadu 600 017.",
    phoneNumbers: ["044 24311634"],
  },
  {
    title: "Amman Men's PG Hostel",
    owner: "",
    price: "₹6,500",
    priceLabel: "/Month",
    sharingOptions: [
      "Tariff Amount Rs.6,500 per Month Accommodation +3 Times Food.",
    ],
    address:
      "15, Vaathiyar Thottam 1st St, KG NTR Heritage, Nagarjuna Nagar, Kodambakkam, Chennai, Tamil Nadu 600 024.",
    phoneNumbers: ["+91 9003145058"],
  },
  {
    title: "Sk mens hostel",
    owner: "",
    price: "₹3,650",
    priceLabel: "/Month",
    sharingOptions: ["Monthly ₹3,650 without food ₹5,650 with food."],
    address: "6, 11, Damodaran St, T. Nagar, Chennai, Tamil Nadu 600 017.",
    phoneNumbers: ["+91 9176859882"],
  },
  {
    title: "MJM Mansion",
    owner: "",
    price: "₹3,000",
    priceLabel: "/Month",
    sharingOptions: ["Advance-6000/ Monthly-3000/ without foot"],
    address: "5, sampangi st, Reddi kuppam, West mambalam, Chennai -600 033.",
    phoneNumbers: ["044 2474 4990"],
  },
  {
    title: "Femina Men’s Hostel",
    owner: "Not Provided",
    price: "",
    address:
      "No.6/11 , Palat Sankaran St, Mahalingapuram Nungambakkam, Near Iyappan Temple, Chennai -600 034.",
    phoneNumbers: ["+91 94438 16134", "+91 94438 16134"],
  },
];

const womensHostelData = [
  {
    title: "Annapoorna Ladies Hostel",
    owner: "",
    price: "₹4,700",
    priceLabel: "/Month",
    sharingOptions: [
      "Per Day Stay – ₹300",
      "1 Month Stay – ₹4700 to ₹6000 (Room cost varies)",
    ],
    address:
      "No 7/21, Parthasarathypuram Main Road, Opp. Reliance Fresh, T Nagar, Chennai – 600017",
    phoneNumbers: ["+91 9566173999", "+91 9940078850"],
  },
  {
    title: "Annai Ladies Hostel",
    owner: "",
    price: "₹5,100",
    priceLabel: "/Month",
    sharingOptions: ["1 Month Stay – ₹5100 with food"],
    address:
      "24/2, Azeez Nagar 1st St, Chinna Raji Thottam, Kodambakkam, Chennai – 600024",
    phoneNumbers: ["+91 6384475757", "+91 7305395941"],
  },
  {
    title: "Sri Sai Lakshmi Women's Hostel",
    owner: "",
    price: "₹4,500",
    priceLabel: "/Month",
    sharingOptions: [
      "Monthly Tariff – ₹4500 including food",
      "10 minutes walkable from office",
    ],
    address:
      "No: 54/2, Giri Road, T.Nagar, Chennai – 600017 (Near Bengal Association Trust)",
    phoneNumbers: [""],
  },
  {
    title: "New Royal Ladies Hostel",
    owner: "",
    price: "₹5,500",
    priceLabel: "/Month",
    sharingOptions: [
      "Monthly Tariff – ₹5500 with food",
      "Per Day Tariff – ₹350 with food",
    ],
    address: "3/34 Dr. Ambedkar Road, Near Power House, Kodambakkam – 600024",
    phoneNumbers: ["+91 7358637592"],
  },
  {
    title: "St. Anne's Girls Hostel",
    owner: "",
    price: "₹350",
    priceLabel: "/Day",
    sharingOptions: ["Rs. 350 per day – Accommodation + 3 Times Food"],
    address: "Rose Marry, Kodambakkam, Chennai",
    phoneNumbers: ["044 - 24833803"],
  },
  {
    title: "Bethel Girls Hostel",
    owner: "",
    price: "₹400",
    priceLabel: "/Day",
    sharingOptions: ["Rs. 400 per day – Accommodation + 3 Times Food"],
    address: "Ruban, Kodambakkam, Chennai",
    phoneNumbers: ["+91 9710444744"],
  },
];

const Hostel = () => {
  return (
    <div>
      <h1 className="mx-auto text-center text-4xl font-primary font-bold py-10">
        Men's<span className="text-red-600">&nbsp;&nbsp;Hostel</span>
      </h1>
      {mensHostelData.map((hostel, index) => (
        <HouseCard key={`men-${index}`} {...hostel} />
      ))}

      <h1 className="mx-auto text-center text-4xl font-primary font-bold py-10">
        Women's<span className="text-red-600">&nbsp;&nbsp;Hostel</span>
      </h1>
      {womensHostelData.map((hostel, index) => (
        <HouseCard key={`women-${index}`} {...hostel} />
      ))}
    </div>
  );
};

export default Hostel;
