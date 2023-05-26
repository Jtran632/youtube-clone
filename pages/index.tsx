import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faMicrophone,
  faVideo,
  faBell,
  faUser,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
const SignedIn = false;
export default function Home() {
  return (
    <div>
      <Head>
        <title>Youtube NextJs</title>
        <meta name="description" content="Youtube-Landing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="border-2 border-blue-200 text-blue-600 h-20 w-full">
        {/* nav bar */}
        {/* Header Section */}
        <nav className="flex justify-between h-full items-center mx-6">
          <div className="flex">
            <FontAwesomeIcon
              className="mr-6 mt-1"
              size="xl"
              icon={faBars}
              style={{ color: "black" }}
            />
            <FontAwesomeIcon
              icon={faYoutube}
              size="2xl"
              style={{ color: "#ff0000" }}
            />
            <h1 className="font-bold text-2xl text-black">Youtube</h1>
          </div>
          <div className="w-1/3 h-2/4 flex">
            <input
              className="w-full h-full bg-transparent border border-gray-400 rounded-l-full p-4"
              placeholder="Search"
            ></input>
            <button className="bg-gray-200 border border-gray-400 rounded-r-full place-items-center px-6 text-xs">
              <FontAwesomeIcon
                icon={faSearch}
                size="xl"
                style={{ color: "black" }}
              />
            </button>
            <button className="  px-6">
              <FontAwesomeIcon icon={faMicrophone} style={{ color: "black" }} />
            </button>
          </div>
          {SignedIn ? (
            <div className="space-x-8">
              <FontAwesomeIcon icon={faVideo} style={{ color: "black" }} />
              <FontAwesomeIcon icon={faBell} style={{ color: "black" }} />
              <button> S </button>
            </div>
          ) : (
            <div className="h-1/3 space-x-4">
              <FontAwesomeIcon icon={faEllipsisV} style={{ color: "black" }} />
              <button
                className="border border-gray-500 rounded-l-full rounded-r-full text-xs py-2 px-4
              "
              >
                <FontAwesomeIcon
                  className="mr-4"
                  icon={faUser}
                  style={{ color: "blue" }}
                />
                Sign In
              </button>
            </div>
          )}
        </nav>
      </header>
      {/* Items should resize base on screen size */}
      <main className="h-screen w-full flex">
        {/* Sidebar */}
        <div className="w-2/12 border border-red-500 h-screen truncate flex place-content-center">
          Sidebar Content Here
        </div>
        <div className="w-full ">
          {/* Categories */}
          <div className="border border-green-500 p-4">Categories Here</div>
          {/* videos */}
          <div className="h-full border border-orange-500 p-4">Videos Here</div>
        </div>
      </main>
    </div>
  );
}
