import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard/InfoCard";
const search = ({ searchResult }) => {
  const router = useRouter();

  const { location, startDate, endDate, numberofGuests } = router.query;
  const formatterStartDate =
    format(new Date() || "3 aug 2021"(startDate), "dd MMMM yy") ||
    "21 aug 2021";
  const formatterEndDate =
    format(new Date() || "8 aug  2021"(endDate), "dd MMMM yy") || "30 aug 2021";

  const range = `${formatterStartDate} - ${formatterEndDate}`;

  return (
    <div>
      <Header
        placeholder={`${location} | ${range} | ${numberofGuests} guests`}
      />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays -{range}
            for {numberofGuests} guests
          </p>

          <h1 className="text-4xl font-semibold mb-6">Stays in {location}</h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 to-gray-800 whitespace-nowrap p-4">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
          <div className="flex flex-col">
            {searchResult.map((item) => (
              <InfoCard item={item} key={item.img} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default search;

export async function getServerSideProps() {
  const searchResult = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResult,
    },
  };
}
