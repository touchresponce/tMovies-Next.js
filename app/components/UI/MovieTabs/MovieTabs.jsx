"use client";

import "./MovieTabs.css";
import Slider from "../../Slider/Slider";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function MovieTabs({ data }) {
  const sequelsAndPrequels = data.sequelsAndPrequels?.filter(
    (item) => item.poster.url && (item.rating?.kp || item.rating?.imdb)
  );

  return (
    <section className='tabs'>
      <Tabs
        focusTabOnClick={false}
        selectedTabClassName='tablist__tab-selected'
      >
        <TabList className='tablist'>
          {data.similarMovies?.length > 0 && (
            <Tab className='tablist__tab noselect'>Похожие</Tab>
          )}
          {sequelsAndPrequels?.length > 0 && (
            <Tab className='tablist__tab noselect'>Сиквелы и приквелы</Tab>
          )}
        </TabList>

        {data.similarMovies?.length > 0 && (
          <TabPanel>
            <Slider data={data.similarMovies} />
          </TabPanel>
        )}

        {sequelsAndPrequels?.length > 0 && (
          <TabPanel>
            <Slider data={sequelsAndPrequels} />
          </TabPanel>
        )}
      </Tabs>
    </section>
  );
}
