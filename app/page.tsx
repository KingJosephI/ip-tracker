import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <section className="search">
        <h1>IP Address Tracker</h1>
        <form>
          <input placeholder="Search for any IP Adress or domain" />
          <button>&gt;</button>
        </form>
        <div>
          <div>
            <h2>IP Adress</h2>
            <p>192.212.174.101</p>
          </div>
          <div>
            <h2>Location</h2>
            <p>Brooklyn, NY 10001</p>
          </div>
          <div>
            <h2>Timezone</h2>
            <p>UTC -05:00</p>
          </div>
          <div>
            <h2>ISP</h2>
            <p>SpaceX Starlink</p>
          </div>
        </div>
      </section>
      <section className="map"></section>
    </main>
  );
}
