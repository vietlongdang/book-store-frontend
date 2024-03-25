import { ExploreTopBooks } from "./components/ExploreTopBooks.tsx";
import { Carousel } from "./components/Carousel.tsx";
import { Heroes } from "./components/Heroes.tsx";
import { LibraryServices } from "./components/LibraryServices.tsx";

export const HomePage = () => {
  return (
    <>
      <ExploreTopBooks />
      <Carousel />
      <Heroes />
      <LibraryServices />
    </>
  );
};
