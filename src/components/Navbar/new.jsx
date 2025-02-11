// import React from "react";

// const NavbarItems = () => {

 

//   const menuItems = [
//     { title: "Home", fasionType: "SUMMER FASHION", links: [] },
//     {
//       title: "Feature",
//       fasionType: "WINTER FASHION",
//       links: ["Home", "About", "Services", "Contact"],
//     },
//     {
//       title: "Shops",
//       fasionType: "SUMMER FASHION",
//       links: ["Home", "About", "Services", "Contact"],
//     },
//     {
//       title: "Product",
//       fasionType: "SUMMER FASHION",
//       links: ["Home", "About", "Services", "Contact"],
//     },
//     {
//       title: "Pages",
//       fasionType: "WINTER FASHION",
//       links: ["Home", "About", "Services", "Contact"],
//     },
//     {
//       title: "Blogs",
//       fasionType: "WINTER FASHION",
//       links: ["Latest News", "Tech", "Fashion", "Travel"],
//     },
//   ];

//   const FeatureLinks = [
//     "Dresses",
//     "Skirts",
//     "Western Wear",
//     "Sports Wear",
//     "Dresses",
//     "Skirts",
//     "Western Wear",
//     "Sports Wear",
//   ];
//   const ShopsLinks = [
//     "Dresses",
//     "Skirts",
//     "Western Wear",
//     "Sports Wear",
//     "Dresses",
//     "Skirts",
//     "Western Wear",
//     "Sports Wear",
//   ];
//   const ProductLinks = [
//     "Dresses",
//     "Skirts",
//     "Western Wear",
//     "Sports Wear",
//     "Dresses",
//     "Skirts",
//     "Western Wear",
//     "Sports Wear",
//   ];
//   const PagesLinks = [
//     "Dresses",
//     "Skirts",
//     "Western Wear",
//     "Sports Wear",
//     "Dresses",
//     "Skirts",
//     "Western Wear",
//     "Sports Wear",
//   ];

//   const blogsLinks = [
//     "Dresses",
//     "Skirts",
//     "Western Wear",
//     "Sports Wear",
//     "Dresses",
//     "Skirts",
//     "Western Wear",
//     "Sports Wear",
//   ];

//   return (
//     <>
//       <header className="bg-white shadow-sm">
//         <div className="container mx-auto px-8 py-8">
//           <div className="flex justify-center items-center">
//             <nav class="flex min-w-[20px] flex-row gap-0 p-0 font-sans text-base font-normal text-blue-gray-700">
//               {menuItems.map((item, index) => (
//                 <>
//                   <div class="relative w-full mt-2">
//                     <div class="relative flex items-center w-full p-0 text-xl font-semibold text-left select-none text-blue-gray-900">
//                       <span class="relative flex items-center justify-between w-full group cursor-pointer">
//                         <p class="block font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900 ml-4">
//                           {item.title}
//                         </p>

//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           class="w-4 h-4 text-blue-gray-900 transition-transform group-hover:rotate-180 mr-4"
//                           viewBox="0 0 20 20"
//                           fill="currentColor"
//                         >
//                           <path
//                             fill-rule="evenodd"
//                             d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                             clip-rule="evenodd"
//                           />
//                         </svg>

//                         <div class="absolute top-0 left-full h-full w-64"></div>

//                         <div
//                           class="absolute left-5 top-[100%] z-10 p-4 text-sm font-normal bg-white border rounded-lg shadow-lg min-w-max
//                  border-blue-gray-50 text-blue-gray-500 shadow-blue-gray-500/10 opacity-0 scale-95 pointer-events-none 
//                  group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-200 ease-in-out"
//                         >
//                           <footer class="bg-white dark:bg-gray-900">
//                             <div class="mx-auto w-full max-w-screen-xl">
//                               <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-6">
//                                 <div>
//                                   <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
//                                     Women Fasion
//                                   </h2>
//                                   <ul class="text-gray-500 dark:text-gray-400 font-medium">
//                                     {item.links.map((link, idx) => (
//                                       <li key={idx} className="mb-4">
//                                         <a href="#" className="hover:underline">
//                                           {link}
//                                         </a>
//                                       </li>
//                                     ))}
//                                   </ul>
//                                 </div>
//                                 <div>
//                                   <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
//                                     Men Fasion
//                                   </h2>
//                                   <ul class="text-gray-500 dark:text-gray-400 font-medium">
//                                     {item.links.map((link, idx) => (
//                                       <li key={idx} className="mb-4">
//                                         <a href="#" className="hover:underline">
//                                           {link}
//                                         </a>
//                                       </li>
//                                     ))}
//                                   </ul>
//                                 </div>
//                                 <div>
//                                   <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
//                                     Winter Fasion
//                                   </h2>
//                                   <ul class="text-gray-500 dark:text-gray-400 font-medium">
//                                     {item.links.map((link, idx) => (
//                                       <li key={idx} className="mb-4">
//                                         <a href="#" className="hover:underline">
//                                           {link}
//                                         </a>
//                                       </li>
//                                     ))}
//                                   </ul>
//                                 </div>
//                                 <div>
//                                   <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
//                                     {item.fasionType}
//                                   </h2>

//                                   <ul class="text-gray-500 dark:text-gray-400 font-medium">
//                                     {item.links.map((link, idx) => (
//                                       <li key={idx} className="mb-4">
//                                         <a href="#" className="hover:underline">
//                                           {link}
//                                         </a>
//                                       </li>
//                                     ))}
//                                   </ul>
//                                 </div>
//                                 <div>
//                                   <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
//                                     {item.fasionType}
//                                   </h2>

//                                   <ul class="text-gray-500 dark:text-gray-400 font-medium">
//                                     {item.links.map((link, idx) => (
//                                       <li key={idx} className="mb-4">
//                                         <a href="#" className="hover:underline">
//                                           {link}
//                                         </a>
//                                       </li>
//                                     ))}
//                                   </ul>
//                                 </div>
//                                 <div>
//                                   <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
//                                     {item.fasionType}
//                                   </h2>

//                                   <ul class="text-gray-500 dark:text-gray-400 font-medium">
//                                     {item.links.map((link, idx) => (
//                                       <li key={idx} className="mb-4">
//                                         <a href="#" className="hover:underline">
//                                           {link}
//                                         </a>
//                                       </li>
//                                     ))}
//                                   </ul>
//                                 </div>
//                               </div>
//                               <div className="w-full mt-4">
//                                 <img
//                                   src="https://themes.pixelstrap.com/multikart/assets/images/menu-banner.jpg"
//                                   alt="Banner"
//                                   className="w-full object-cover"
//                                 />
//                               </div>
//                             </div>
//                           </footer>

//                           {/* <footer class="bg-white dark:bg-gray-900">
//                                                         <div class="mx-auto w-full max-w-screen-xl">

//                                                             <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{item.fasionType}</h2>
//                                                             <ul class="text-gray-500 dark:text-gray-400 font-medium">

//                                                                 {item.links.map((link, idx) => (
//                                                                     <li key={idx} className="mb-4">
//                                                                         <a href="#" className="hover:underline">
//                                                                             {link}
//                                                                         </a>
//                                                                     </li>
//                                                                 ))}

//                                                             </ul>


//                                                         </div>
//                                                     </footer> */}
//                         </div>
//                       </span>
//                     </div>
//                   </div>
//                 </>
//               ))}
//             </nav>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default NavbarItems;




// p:{
//     fontsize: 14PiX,
//     line-height: 28px;
//     letter-spacing: 0.06em;
//     color: #777;
// }
// h1{
//     font-size: 60px;
//     font-weight: 700;
//     line-height: 1.2;
// }
// h2{
//     font-size: 32px;
//     color: #222;
//     font-weight: 700;
//     line-height: 1;
//     letter-spacing: 0.02em;
// }
// h4 {
//     font-size: 18px;
//     font-weight: 400;
//     letter-spacing: 0.03em;
//     line-height: 1;
// }
// h6 {
//     font-size: 16px;
   
// }




// primary-olor:#f7f7f7;

// backgroundImage: {
//     "theme-gradient": "linear-gradient(to right, #5d7227, #203f15)",
//   },


//   font-family Montserrat, sans-serif

//   fontWeight: {
//     normal: "400",
//     medium: "500",
//     bold: "700",
//   },
//   lineHeight: {
//     normal: '1.5',
//     relaxed: '1.75',
//     tight: '1.25',
//   },