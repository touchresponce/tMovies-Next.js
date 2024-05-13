"use client";

import "./MovieTabs.css";
import Slider from "../../Slider/Slider";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function MovieTabs({ data }) {
  const { similarMovies = [], sequelsAndPrequels = [] } = data;

  const filteredSimilar = similarMovies.filter((movie) => movie.poster?.url);
  const filteredSequelsAndPrequels = sequelsAndPrequels.filter(
    (movie) => movie.poster?.url
  );

  const hasFilteredSimilar = filteredSimilar.length > 0;
  const hasFilteredSequelsAndPrequels = filteredSequelsAndPrequels.length > 0;

  if (!hasFilteredSimilar && !hasFilteredSequelsAndPrequels) {
    return null;
  }

  return (
    <section className='tabs'>
      <Tabs
        focusTabOnClick={false}
        selectedTabClassName='tablist__tab-selected'
      >
        <TabList className='tablist'>
          {hasFilteredSimilar && (
            <Tab className='tablist__tab noselect'>Похожие</Tab>
          )}
          {hasFilteredSequelsAndPrequels && (
            <Tab className='tablist__tab noselect'>Сиквелы и приквелы</Tab>
          )}
        </TabList>

        {hasFilteredSimilar && (
          <TabPanel>
            <Slider data={filteredSimilar} />
          </TabPanel>
        )}

        {hasFilteredSequelsAndPrequels && (
          <TabPanel>
            <Slider data={filteredSequelsAndPrequels} />
          </TabPanel>
        )}
      </Tabs>
    </section>
  );
}
