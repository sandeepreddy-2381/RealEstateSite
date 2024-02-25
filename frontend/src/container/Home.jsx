import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Listings from "../components/Listings";
import ListingForm from "../components/ListingForm";
import Pagination from "../components/Pagination";

const Home = () => {
  const [listings, setListings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [listingsPerPage, setListingsPerPage] = useState(3);
  const [active, setActive] = useState(1);

  const indexOfLastListing = currentPage * listingsPerPage;
  const indexOfFirstListing = indexOfLastListing - listingsPerPage;
  const currentListings = listings.slice(
    indexOfFirstListing,
    indexOfLastListing
  );

  const visitPage = (page) => {
    setCurrentPage(page);
    setActive(page);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      setActive(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage !== Math.ceil(listings.length / 3)) {
      setCurrentPage(currentPage + 1);
      setActive(currentPage + 1);
    }
  };

  return (
    <main className="home">
      <Helmet>
        <title>Realestate - Home </title>
        <meta name="description" content="Real estate Home page" />
      </Helmet>
      <section className="home__form">
        <ListingForm setListings={setListings} />
      </section>
      <section className="home__listings">
        <Listings listings={currentListings} />
      </section>
      <section className="home__pagination">
        <div className="row">
          {listings.length !== 0 ? (
            <Pagination
              itemsPerPage={listingsPerPage}
              count={listings.length}
              visitPage={visitPage}
              previous={previousPage}
              next={nextPage}
              active={active}
              setActive={setActive}
            />
          ) : null}
        </div>
      </section>
    </main>
  );
};

export default Home;
