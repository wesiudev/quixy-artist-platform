"use client";
import Link from "next/link";
import {
  FaArrowLeft,
  FaArtstation,
  FaChartLine,
  FaChevronDown,
  FaClipboardList,
  FaCog,
  FaEdit,
  FaHome,
  FaPlus,
  FaRemoveFormat,
  FaShoppingCart,
  FaSignOutAlt,
  FaTags,
  FaUpload,
  FaUsers,
} from "react-icons/fa";

import { useState } from "react";
import Image from "next/image";
export default function Nav({
  isNavOpen,
  setNavOpen,
}: {
  isNavOpen: boolean;
  setNavOpen: Function;
}) {
  const [expandedItems, setExpandedItems] = useState([]);
  const navItems = [
    { title: "Przegląd", href: `/admin`, icon: <FaHome /> },
    {
      title: "Blog",
      href: `/admin/blog`,
      expandable: true,
      icon: <FaArtstation />,
      subItems: [
        {
          title: "Nowy post",
          href: `/admin/blog/new`,
          icon: <FaUpload />,
        },
        {
          title: "Edytuj post",
          href: `/admin/blog/edit`,
          icon: <FaEdit />,
        },
      ],
    },
    {
      title: "Sklep",
      href: `/admin/shop`,
      expandable: true,
      icon: <FaShoppingCart />,
      subItems: [
        {
          title: "Dodaj produkt",
          href: `/admin/shop/add-product`,
          icon: <FaPlus />,
        },
        {
          title: "Edytuj produkt",
          href: `/admin/shop/edit-product`,
          icon: <FaEdit />,
        },
        {
          title: "Usuń produkt",
          href: `/admin/shop/remove-product`,
          icon: <FaRemoveFormat />,
        },
        {
          title: "Zamówienia",
          href: `/admin/shop/orders`,
          icon: <FaClipboardList />,
        },
        {
          title: "Utwórz promocję",
          href: `/admin/shop/create-promo`,
          icon: <FaTags />,
        },
      ],
    },
    { title: "Użytkownicy", href: `/admin/users`, icon: <FaUsers /> },
    {
      title: "Statystyki",
      href: `/admin/analytics`,
      icon: <FaChartLine />,
    },
    {
      title: "Ustawienia",
      href: `/admin/configuration`,
      icon: <FaCog />,
    },
    {
      title: "Logout",
      href: `/admin/logout`,
      icon: <FaSignOutAlt />,
    },
  ];

  return (
    <div
      className={`fixed z-[51] scrollbar font-coco !text-white duration-500 ${
        isNavOpen ? "translate-x-[0]" : "-translate-x-[300px]"
      }`}
    >
      <div className="flex flex-col h-screen w-[300px] border-r-[1px] border-[#303345] bg-[#222430] ">
        <div className="text-white py-4 px-3 relative">
          <h1 className="text-base font-bold  flex flex-row items-center ">
            <Image
              src="/favicons/favicon-32x32.png"
              width={36}
              height={36}
              alt=""
              className="w-8 h-8 mr-2"
            />{" "}
            Panel administracyjny
          </h1>
          <button
            onClick={() => setNavOpen(!isNavOpen)}
            className="absolute -right-[50px] w-[50px] h-[50px] top-0 !z-[9999999] bg-[#222430] text-white flex items-center justify-center"
          >
            <FaArrowLeft
              className={`${isNavOpen ? "rotate-0" : "rotate-180"}`}
            />
          </button>
        </div>
        <div className="mt-12">
          <ul className="flex flex-col flex-wrap justify-between w-full px-2">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`w-full ${item.expandable ? "relative" : ""}  `}
              >
                <Link href={item.href} className="w-full">
                  <button
                    onClick={() => {
                      if (item.expandable) {
                        if (expandedItems.includes(index as never)) {
                          setExpandedItems(
                            expandedItems.filter((i) => i !== index)
                          );
                        } else {
                          setExpandedItems([...expandedItems, index as never]);
                        }
                      }
                    }}
                    className={`${
                      item.expandable ? "cursor-pointer" : ""
                    } flex items-center justify-between py-2 px-4 rounded-md hover:bg-[#2F313C] w-full  ${
                      expandedItems.includes(index as never)
                        ? "bg-[#2F313C]"
                        : "bg-[#222430]"
                    }`}
                  >
                    <span className="flex flex-row items-center">
                      <span className="mr-2">{item.icon}</span>
                      {item.title}
                    </span>
                    {item.expandable && (
                      <div
                        onClick={(event) => {
                          event.preventDefault();
                          event.stopPropagation();
                          if (item.expandable) {
                            if (expandedItems.includes(index as never)) {
                              setExpandedItems(
                                expandedItems.filter((i) => i !== index)
                              );
                            } else {
                              setExpandedItems([
                                ...expandedItems,
                                index as never,
                              ]);
                            }
                          }
                        }}
                        className="hover:bg-[#3B3D47] p-1 lg:p-2 rounded-md"
                      >
                        <FaChevronDown
                          className={`duration-300 ${
                            expandedItems.includes(index as never)
                              ? "rotate-180"
                              : "rotate-0"
                          }`}
                        />
                      </div>
                    )}
                  </button>
                </Link>

                {item.expandable && expandedItems.includes(index as never) && (
                  <ul className=" bg-[#222430]  py-2 px-4 w-full">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link href={subItem.href}>
                          <button className="flex items-center py-2 px-4 rounded-md hover:bg-[#2F313C] w-full">
                            {subItem.icon}
                            <span className="ml-2">{subItem.title}</span>
                          </button>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
