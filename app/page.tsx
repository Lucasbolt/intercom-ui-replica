'use client';

import Image from 'next/image';
import React, { useRef } from 'react';

export default function Home() {
  const chatRef = useRef<HTMLDivElement | null>(null);
  const inboxRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  function toggleChatBox() {
    if (window.innerWidth < 1024) {
      if (chatRef.current && inboxRef.current) {
        chatRef.current.classList.toggle('hidden');
        inboxRef.current.classList.toggle('hidden');
      }
    }
  }

  function getElement(elementId: string): HTMLElement | null {
    return dropdownRef.current?.querySelector(`#${elementId}`)!;
  }

  function toggleDropdown(item: string) {
    if (!item || !dropdownRef.current) return;
    const styles = {
      [`${item}-button`]: 'text-gray-700',
      [`${item}-button`]: 'text-blue-700',
      [`${item}-svg`]: 'transform',
      [`${item}-svg`]: 'rotate-90',
      [`${item}-menu`]: 'hidden',
    };
    for (const elementId in styles) {
      const element = getElement(elementId);
      if (element) element.classList.toggle(styles[elementId]);
    }
  }

  const handleDropdownClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const conversationId = event.currentTarget.dataset.dropdownButton!;
    toggleDropdown(conversationId);
  };

  return (
    <>
      <main className="fixed flex max-h-screen w-full flex-col  bg-gray-100 text-black md:flex-row">
        <nav
          className="hidden h-screen max-h-screen w-full flex-none items-center justify-between overflow-y-auto bg-gray-200 md:flex md:w-16 md:flex-col"
          id="first-division"
        >
          <div className="flex flex-col items-center space-y-4 p-4">
            <button>
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                ></path>
              </svg>
            </button>

            <button className="relative flex flex-col">
              <div className="items absolute right-0 top-0 h-4 w-4 rounded-full bg-red-700 text-xs font-semibold text-white">
                5
              </div>
              <svg
                className="mt-2 h-6 w-6"
                fill="none"
                stroke="blue"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
                ></path>
              </svg>
            </button>

            <button>
              <svg
                className="h-6 w-6 -rotate-45"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                ></path>
              </svg>
            </button>

            <button>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                ></path>
              </svg>
            </button>

            <button>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                ></path>
              </svg>
            </button>

            <button>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                ></path>
              </svg>
            </button>

            <button>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.75 19.5v-.75a7.5 7.5 0 00-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                ></path>
              </svg>
            </button>
          </div>

          <div className="flex flex-col items-center space-y-4 p-4">
            <button>
              <svg
                className="h-6 w-6 scale-x-[-1]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                ></path>
              </svg>
            </button>

            <button>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
                ></path>
              </svg>
            </button>

            <button className="flex flex-col items-end justify-between">
              <div className="h-2 w-2 rounded-full bg-red-700"></div>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                ></path>
              </svg>
            </button>

            <img className="h-8 w-8 rounded-full" src="images/lucas.jpg"></img>
          </div>
        </nav>

        {/* second-division */}
        <div
          className="hidden max-h-screen w-full flex-none border-2 border-l-0 border-solid border-gray-200 bg-gray-100 px-2 md:block md:w-56"
          id="second-division"
        >
          <div className="flex h-16 flex-row items-center justify-between bg-gray-100 py-2">
            <h1 className="flex-auto text-3xl font-bold text-slate-900">Inbox</h1>

            <button className="flex-none cursor-pointer">
              <svg
                className=" h-10 w-8 text-black"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                ></path>
              </svg>
            </button>
          </div>

          {/* dropdown */}
          <div id="drop-down" className="pt-1" ref={dropdownRef}>
            <button
              onClick={handleDropdownClick}
              id="conversation-button"
              type="button"
              className="relative  mb-2 inline-flex w-full items-center pt-2 text-sm font-bold text-gray-700 focus:outline-none"
              data-dropdown-button={'conversation'}
            >
              Conversations
              <svg
                id="conversation-svg"
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
              </svg>
            </button>
            <div
              className="relative right-0 mb-2 hidden origin-top-right"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
              id="conversation-menu"
            >
              <div className="flex items-center py-1" role="none">
                <a
                  href="#"
                  className="inline-flex w-full items-center space-x-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  <img src="images/lucas.jpg" alt="" className="h-6 w-6 rounded-full" />
                  <p className="text-sm font-medium text-gray-900">You</p>
                </a>
                <p className="justify-end text-sm font-medium text-gray-600">5</p>
              </div>

              <div className="flex items-center pb-1" role="none">
                <a
                  href="#"
                  className="inline-flex w-full items-center space-x-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  <svg
                    className="h-5 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                    ></path>
                  </svg>
                  <p className="text-sm font-medium text-gray-900">Mentions</p>
                </a>
                <p className="justify-end text-sm font-medium text-gray-400">0</p>
              </div>

              <div className="flex items-center pb-1" role="none">
                <a
                  href="#"
                  className="inline-flex w-full items-center space-x-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  <svg
                    className="h-5 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                    ></path>
                  </svg>
                  <p className="text-sm font-medium text-gray-900">Premium</p>
                </a>
                <p className="justify-end text-sm font-medium text-gray-600">20</p>
              </div>

              <div className="flex items-center pb-1" role="none">
                <a
                  href="#"
                  className="inline-flex w-full items-center space-x-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  <svg
                    className="h-5 w-6"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    ></path>
                  </svg>
                  <p className="text-sm font-medium text-gray-900">Urgent VIP</p>
                </a>
                <p className="justify-end text-sm font-medium text-gray-600">196</p>
              </div>

              <div className="flex items-center pb-1" role="none">
                <a
                  href="#"
                  className="inline-flex w-full items-center space-x-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  <svg
                    className="h-5 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                    ></path>
                  </svg>
                  <p className="text-sm font-medium text-gray-900">Waiting 20m</p>
                </a>
                <p className="justify-end text-sm font-medium text-gray-400">0</p>
              </div>
              <div className="flex flex-row items-center justify-between px-1">
                <p className="text-sm font-medium text-gray-400">Show 74 hidden</p>
                <svg
                  className="h-5 w-6 justify-end text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                  ></path>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
            </div>

            <button
              type="button"
              className="relative  my-2 inline-flex w-full items-center pt-2 text-sm font-bold text-gray-700 focus:outline-none"
            >
              Automation
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
              </svg>
            </button>

            <button
              type="button"
              className="relative  my-2 inline-flex w-full items-center pt-2 text-sm font-bold text-gray-700 focus:outline-none"
            >
              Your Preferences
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
              </svg>
            </button>

            <button
              type="button"
              className="relative  mb-4 mt-2 inline-flex w-full items-center pt-2 text-sm font-bold text-gray-700 focus:outline-none"
            >
              Reports
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
              </svg>
            </button>
            <a href="#" className="text-sm font-bold text-gray-700">
              Start guide
            </a>
          </div>
        </div>

        {/* third-division */}
        <div
          className="flex max-h-screen flex-auto flex-col overflow-hidden bg-yellow-200 md:flex md:flex-row"
          id="third-divison"
        >
          {/* inbox-messages */}
          <div
            className="relative flex w-screen flex-none flex-col overflow-hidden rounded-r-none  rounded-t bg-white md:w-1/4"
            ref={inboxRef}
          >
            <nav
              id="small-screen-navbar"
              className="justfiy-center fixed bottom-0 flex h-14 w-full flex-row items-center justify-around bg-white  p-6 md:hidden"
            >
              <button>
                <svg
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  ></path>
                </svg>
              </button>

              <button>
                <svg
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  ></path>
                </svg>
              </button>

              <button className="relative flex flex-col">
                <div className="items absolute right-0 top-0 h-4 w-4 rounded-full bg-red-700 text-xs font-semibold text-white">
                  5
                </div>
                <svg
                  className="mt-2 h-7 w-7"
                  fill="none"
                  stroke="blue"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
                  ></path>
                </svg>
              </button>

              <button className="flex flex-col items-end justify-between">
                <div className="h-2 w-2 rounded-full bg-red-700"></div>
                <svg
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  ></path>
                </svg>
              </button>
            </nav>

            <div className="flex flex-col">
              <div className="flex h-16 items-center space-x-4 p-4 py-2">
                <button>
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                    ></path>
                  </svg>
                </button>
                <h1 className=" text-3xl font-bold text-slate-900">You</h1>
              </div>
              <div className="flex h-12 flex-none flex-row items-center justify-between px-4 pt-6">
                <button className="flex flex-row items-center space-x-4">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="black"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    ></path>
                  </svg>
                  <h2 className="txt-2xl font-semibold">5</h2>
                  <svg
                    className="h-6 w-4"
                    fill="black"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                  </svg>
                </button>

                <div className="flex flex-row items-center space-x-4">
                  <button className="flex flex-auto space-x-2">
                    <h2 className="txt-2xl h-6 font-semibold">Newest</h2>
                    <svg
                      className="h-6 w-4"
                      fill="black"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div id="message-nav" className="mt-2 flex h-screen flex-col space-y-1 overflow-y-auto pb-32 pt-4 md:pb-2">
              <a
                id="message-container"
                className="md:message-selected flex flex-col border-b-2 p-4 pb-2 hover:border-l-2 hover:border-l-blue-700 hover:bg-blue-50"
                href="#chat-box"
                onClick={toggleChatBox}
              >
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center space-x-2 overflow-hidden">
                    <div
                      id="circle"
                      className=" flex h-8 w-8 flex-none items-center justify-center rounded-full bg-blue-500 text-sm font-semibold text-white"
                    >
                      <h3>LM</h3>
                    </div>
                    <strong className="overflow-hidden text-clip text-xl text-black">Lucas Mmaduabuchi</strong>
                  </div>

                  <div>
                    <h3 className="flex-none text-sm text-gray-700">5d</h3>
                  </div>
                </div>

                <div className="flex flex-row items-center space-x-2 pt-6">
                  <img className="h-6 w-6 rounded-full bg-blue-500" src="images/lucas.jpg"></img>
                  <h3 className="truncate text-sm text-black">I have some issues sending an email</h3>
                </div>
              </a>

              <div
                id="message-container"
                className="flex flex-col border-b-2 p-4 pb-2 hover:border-l-2 hover:border-l-blue-700 hover:bg-blue-50"
              >
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center space-x-2">
                    <div
                      id="circle"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-sm font-semibold text-white"
                    >
                      <h3>NT</h3>
                    </div>
                    <strong className="text-xl text-black">Nikolas Tesla</strong>
                  </div>

                  <div>
                    <h3 className="text-sm text-gray-700">5d</h3>
                  </div>
                </div>

                <div className="flex flex-row items-center space-x-2 pt-6">
                  <img className="h-6 w-6 rounded-full bg-blue-500" src="images/lucas.jpg"></img>
                  <h3 className="truncate text-sm text-black">I have some issues sending an email</h3>
                </div>
              </div>

              <div
                id="message-container"
                className="flex flex-col border-b-2 p-4 pb-2 hover:border-l-2 hover:border-l-blue-700 hover:bg-blue-50"
              >
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center space-x-2">
                    <div
                      id="circle"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-sm font-semibold text-white"
                    >
                      <h3>TE</h3>
                    </div>
                    <strong className="text-xl text-black">Thomas Edison</strong>
                  </div>

                  <div>
                    <h3 className="text-sm text-gray-700">5d</h3>
                  </div>
                </div>

                <div className="flex flex-row items-center space-x-2 pt-6">
                  <img className="h-6 w-6 rounded-full bg-blue-500" src="images/lucas.jpg"></img>
                  <h3 className="truncate text-sm text-black">I have some issues sending an email</h3>
                </div>
              </div>

              <div
                id="message-container"
                className="flex flex-col border-b-2 p-4 pb-2 hover:border-l-2 hover:border-l-blue-700 hover:bg-blue-50"
              >
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center space-x-2">
                    <div
                      id="circle"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-semibold text-white"
                    >
                      <h3>JB</h3>
                    </div>
                    <strong className="text-xl text-black">Joe Biden</strong>
                  </div>

                  <div>
                    <h3 className="text-sm text-gray-700">5d</h3>
                  </div>
                </div>

                <div className="flex flex-row items-center space-x-2 pt-6">
                  <img className="h-6 w-6 rounded-full bg-blue-500" src="images/lucas.jpg"></img>
                  <h3 className="truncate text-sm text-black">I have some issues sending an email</h3>
                </div>
              </div>

              <div
                id="message-container"
                className="flex flex-col border-b-2 p-4 pb-2 hover:border-l-2 hover:border-l-blue-700 hover:bg-blue-50"
              >
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center space-x-2">
                    <div
                      id="circle"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-500 text-sm font-semibold text-white"
                    >
                      <h3>EM</h3>
                    </div>
                    <strong className="text-xl text-black">Elon Musk</strong>
                  </div>

                  <div>
                    <h3 className="text-sm text-gray-700">5d</h3>
                  </div>
                </div>

                <div className="flex flex-row items-center space-x-2 pt-6">
                  <img className="h-6 w-6 rounded-full bg-blue-500" src="images/lucas.jpg"></img>
                  <h3 className="truncate text-sm text-black">I have some issues sending an email</h3>
                </div>
              </div>

              <div
                id="message-container"
                className="flex flex-col border-b-2 p-4 pb-2 hover:border-l-2 hover:border-l-blue-700 hover:bg-blue-50"
              >
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center space-x-2">
                    <div
                      id="circle"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 text-sm font-semibold text-white"
                    >
                      <h3>AL</h3>
                    </div>
                    <strong className="text-xl text-black">Adam Levine</strong>
                  </div>

                  <div>
                    <h3 className="text-sm text-gray-700">5d</h3>
                  </div>
                </div>

                <div className="flex flex-row items-center space-x-2 pt-6">
                  <img className="h-6 w-6 rounded-full bg-blue-500" src="images/lucas.jpg"></img>
                  <h3 className="truncate text-sm text-black">I have some issues sending an email</h3>
                </div>
              </div>
            </div>
          </div>

          {/* message-chat-inbox-section */}
          <div
            className="hidden h-screen flex-col justify-center bg-gray-200 md:flex md:flex-auto lg:flex-auto"
            id="chat-box"
            ref={chatRef}
          >
            <div className="fixed left-0 right-0 top-0 z-10 flex h-16 w-full flex-none  flex-row items-center justify-evenly self-center bg-white p-4 py-2 sm:justify-between md:static">
              <div className="flex flex-col">
                <strong className="text-sm font-semibold hover:text-blue-700">Lucas Mmaduabuchi</strong>

                <input
                  className="border-dashed bg-transparent text-sm text-black placeholder-gray-500 outline-none focus:border-b"
                  type="text"
                  placeholder="Add Conversation Title"
                ></input>
              </div>

              <div className="flex flex-row items-center space-x-2 rounded-md border-2 p-1 shadow">
                <svg
                  className="h-4 w-4 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>

                <p className="text-sm text-gray-700">Reply in 15m</p>
              </div>
            </div>
            <div className="relative z-0 h-screen flex-auto space-y-4 overflow-y-auto p-4 pb-32">
              <p>hello</p>
              <p>hi</p>
              <p>hey</p>
              <p>hola</p>
              <p>welcome</p>
              <p>hello</p>
              <p>hi</p>
              <p>hey</p>
              <p>hola</p>
              <p>welcome</p>
              <p>hello</p>
              <p>hi</p>
              <p>hey</p>
              <p>hola</p>
              <p>welcome</p>
              <p>hello</p>
              <p>hi</p>
              <p>hey</p>
              <p>hola</p>
              <p>welcome</p>
              <p>hello</p>
              <p>hi</p>
              <p>hey</p>
              <p>hola</p>
              <p>welcome</p>
              <p>hello</p>
              <p>hi</p>
              <p>hey</p>
              <p>hola</p>
              <p>welcome</p>
              <p>hello</p>
              <p>hi</p>
              <p>hey</p>
              <p>hola</p>
              <p>welcome</p>
              <p>hello</p>
              <p>hi</p>
              <p>hey</p>
              <p>hola</p>
              <p>welcome</p>
            </div>

            <div
              className="self-centers relative z-10 mx-2 mb-2 hidden h-40 justify-between rounded-xl border-2 bg-white p-4  md:flex md:flex-col"
              id="message-box"
            >
              <div className="mb-2 flex gap-8">
                <h3 className="text-sm font-semibold decoration-4 hover:text-blue-700 hover:underline hover:underline-offset-8">
                  Reply
                </h3>
                <h3 className="text-sm font-semibold decoration-4 hover:text-blue-700 hover:underline hover:underline-offset-8">
                  Note
                </h3>
              </div>
              <textarea
                className="mt-2 resize-y leading-4 outline-none"
                name="message"
                id="message"
                placeholder="message"
              ></textarea>

              <div className="flex flex-row justify-between">
                <div className="flex flex-row space-x-4 overflow-hidden">
                  <button className="hover:text-blue-600">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                      ></path>
                    </svg>
                  </button>

                  <button className="hover:text-blue-600">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                      ></path>
                    </svg>
                  </button>

                  <button className="hover:text-blue-600">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                      ></path>
                    </svg>
                  </button>

                  <button className="hover:text-blue-600">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12.75 8.25v7.5m6-7.5h-3V12m0 0v3.75m0-3.75H18M9.75 9.348c-1.03-1.464-2.698-1.464-3.728 0-1.03 1.465-1.03 3.84 0 5.304 1.03 1.464 2.699 1.464 3.728 0V12h-1.5M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                      ></path>
                    </svg>
                  </button>

                  <button className="hover:text-blue-600">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      ></path>
                    </svg>
                  </button>

                  <button className="hover:text-blue-600">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
                      ></path>
                    </svg>
                  </button>

                  <button className="hover:text-blue-600">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
                      ></path>
                    </svg>
                  </button>
                </div>

                <button
                  id="send-button"
                  className="h-10 w-24 rounded-full bg-blue-500 text-lg font-medium text-white hover:bg-blue-600 focus:border-blue-300 focus:outline-none focus:ring"
                >
                  Send
                </button>
              </div>
            </div>
            <div
              className="w-84 fixed bottom-0 left-0 right-0 z-10 mx-1 flex h-20 flex-row items-center justify-between bg-transparent px-2 md:hidden"
              id="moble-message-box"
            >
              <div className="relative mr-1 flex h-12 w-[70%] flex-auto flex-row items-center  justify-between space-x-2 rounded-full bg-black px-2 text-white">
                <button>
                  <svg
                    className="h-7 w-7"
                    fill="gray"
                    stroke="black"
                    strokeWidth="1"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                    ></path>
                  </svg>
                </button>

                <textarea
                  className="h-6 resize-none bg-inherit px-2 leading-6 outline-none"
                  name="message"
                  id="message"
                  placeholder="Message"
                  rows={1}
                ></textarea>

                <button>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
                    ></path>
                  </svg>
                </button>

                <button>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                    ></path>
                  </svg>
                </button>
              </div>

              <button
                id="send-button"
                className="relative h-12 w-[20%] flex-none rounded-full bg-blue-500 text-lg font-medium text-white hover:bg-blue-600 focus:border-blue-300 focus:outline-none focus:ring"
              >
                Send
              </button>
            </div>
          </div>

          {/* Conversation details */}
          <div className="relative hidden h-screen w-1/4 flex-none bg-gray-200 lg:block">
            <div className="relative z-10 flex h-16 w-full flex-row items-center justify-between self-center  bg-white p-2 py-2">
              <svg
                className="h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                ></path>
              </svg>

              <div className="flex flex-row items-center space-x-1">
                <img src="images/lucas.jpg" alt="Lucas" className="h-6 w-6 rounded-full" />
                <p className="text-xl font-semibold">You</p>
                <svg
                  className="h-6 w-4"
                  fill="black"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                </svg>
              </div>
              <svg
                className="h-6 w-6 hover:cursor-pointer hover:text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                ></path>
              </svg>
              <svg
                className="h-6 w-6 hover:cursor-pointer hover:text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <svg
                className="h-6 w-6 hover:cursor-pointer hover:text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
              </svg>
            </div>

            <div className="m-1 flex h-1/3 flex-none flex-col justify-center overflow-hidden rounded-lg bg-gray-100 p-4">
              <div className="mb-2 flex flex-row justify-between">
                <p className="h-6 font-semibold">Conversation details</p>

                <button className="hover:text-blue-600">
                  <svg
                    className=" h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                    ></path>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </button>
              </div>

              <p className="text-gray-500">Urgency</p>
              <p className="text-gray-500">
                Product area <span className="ml-2 text-black">Billing</span>
              </p>
              <p className="text-gray-500">
                Next step <span className="ml-2">Add</span>
              </p>
              <p className="text-gray-500">
                Brand <span className="ml-2 text-black">Projectmap</span>
              </p>
              <p className="text-gray-500">
                ID <span className="ml-2 text-black">27285816428</span>
              </p>
            </div>

            <div className="my-2 flex flex-row justify-between px-4">
              <button className="text-sm font-semibold text-black">Related</button>

              <button className="text-sm font-semibold text-gray-500">Customize</button>
            </div>

            <div className="flex h-screen flex-col overflow-y-auto bg-gray-200 px-2 pb-80">
              <div className="m-1 flex flex-none flex-col justify-center rounded-lg bg-gray-100 p-4 px-2">
                <div className="mb-2 flex flex-row items-center space-x-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-center text-sm  font-semibold text-white">
                    LM
                  </div>
                  <p className="text-sm font-semibold">Lucas Mmaduabuchi</p>
                </div>

                <div className="mt-2 flex flex-row items-center space-x-2">
                  <svg
                    className="h-7 w-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    ></path>
                  </svg>

                  <p className="text-gray-500">
                    City <span className="ml-2 text-black">London</span>
                  </p>
                </div>

                <div className="mt-2 flex flex-row items-center space-x-2">
                  <svg
                    className="h-6 w-4 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>

                  <p className="text-gray-500">
                    Local time <span className="ml-2 text-black">10:19PM</span>
                  </p>
                </div>

                <div className="mt-2 flex flex-row items-center space-x-2">
                  <svg
                    className="h-6 w-4 text-gray-700"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    ></path>
                  </svg>

                  <p className="text-gray-500">
                    Type<span className="ml-2 text-black">User</span>
                  </p>
                </div>

                <div className="mt-2 flex flex-row items-center space-x-2 ">
                  <svg
                    className="h-6 w-4 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                    ></path>
                  </svg>

                  <p className="truncate text-gray-500">
                    Email<span className="ml-2 text-black">lucas&#64;email.com</span>
                  </p>
                </div>

                <div className="my-2 flex flex-row items-center space-x-2">
                  <svg
                    className="h-6 w-4 text-gray-700"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    ></path>
                  </svg>

                  <p className="truncate text-gray-500">
                    Phone<span className="ml-2">Unknown</span>
                  </p>
                </div>
                <p className="truncate text-gray-700">Show 29 more</p>
              </div>

              <div className="m-1 flex flex-none flex-col justify-center rounded-lg bg-gray-100 p-4">
                <div className="mb-2 flex flex-row justify-between">
                  <p className="h-6 font-semibold">Latest Conversations</p>
                </div>

                <div className="mb-1 flex flex-row items-center space-x-2">
                  <img src="images/lucas.jpg" alt="" className="h-6 w-6 rounded-full" />
                  <p className="text-sm font-semibold text-black">Open with Nikolas</p>
                </div>
                <div className="flex flex-row justify-between overflow-hidden">
                  <p className="truncate text-sm text-gray-500">I have some issues sending emails</p>
                  <div>
                    <h3 className="text-sm text-gray-700">5d</h3>
                  </div>
                </div>
              </div>

              <div className="m-1 flex flex-none flex-col justify-center rounded-lg bg-gray-100 p-4">
                <div className="mb-2 flex flex-row justify-between">
                  <p className="h-6 font-semibold">User tags</p>
                </div>

                <div className="mb-1 flex flex-row justify-between">
                  <div className="flex items-center justify-around rounded border-2 border-solid px-1 py-1">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="black"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6"></path>
                    </svg>

                    <p className="text-[10px] font-semibold text-gray-500">Add tags</p>
                  </div>

                  <div className="flex items-center space-x-1 rounded border-2 border-solid px-1 py-1">
                    <svg
                      className="h-4 w-4 text-gray-500"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                      ></path>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z"></path>
                    </svg>

                    <p className="text-[10px] font-semibold text-gray-500">VIP SWE</p>

                    <svg
                      className="h-5 w-5 text-gray-500"
                      fill="currentColor"
                      stroke="white"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                </div>

                <div className="mb-1 flex flex-row justify-between">
                  <div className="flex items-center space-x-1 rounded border-2 border-solid px-1 py-1">
                    <svg
                      className="h-4 w-4 text-gray-500"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                      ></path>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z"></path>
                    </svg>

                    <p className="text-[10px] font-semibold text-gray-500">cool</p>

                    <svg
                      className="h-5 w-5 text-gray-500"
                      fill="currentColor"
                      stroke="white"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>

                  <div className="flex items-center space-x-1 rounded border-2 border-solid px-1 py-1">
                    <svg
                      className="h-4 w-4 text-gray-500"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                      ></path>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z"></path>
                    </svg>

                    <p className="text-[10px] font-semibold text-gray-500">feedback</p>

                    <svg
                      className="h-5 w-5 text-gray-500"
                      fill="currentColor"
                      stroke="white"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p className="text-sm font-semibold text-gray-700">Show 5 hidden</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
