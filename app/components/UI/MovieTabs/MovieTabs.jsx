"use client";

import "./MovieTabs.css";
import Slider from "../../Slider/Slider";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function MovieTabs({ data }) {
  const sequelsAndPrequels = data.sequelsAndPrequels?.filter(
    (item) => item.poster.url
  );

  return (
    <section className='tabs'>
      <Tabs
        focusTabOnClick={false}
        selectedTabClassName='tablist__tab-selected'
      >
        <TabList className='tablist'>
          {data.description && (
            <Tab className='tablist__tab noselect'>Описание</Tab>
          )}

          {data.similarMovies?.length > 0 && (
            <Tab className='tablist__tab noselect'>Похожие</Tab>
          )}

          {sequelsAndPrequels?.length > 0 && (
            <Tab className='tablist__tab noselect'>Сиквелы и приквелы</Tab>
          )}

          {/* {images.length > 1 && (
          <Tab className='tablist__tab noselect'>Изображения</Tab>
        )} */}
        </TabList>
        {data.description && (
          <TabPanel>
            <div className='about__description-wrapper'>
              <p className='about__text about__text_type_descriprion'>
                {data.description}
              </p>
            </div>
          </TabPanel>
        )}

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

        {/* {images.length > 1 && (
        <TabPanel>
          <div className='gallery noselect'>
            {images.map((image) => (
              <figure
                className='gallery__item'
                key={image.id}
                onClick={() => openModal("image", image.url)}
              >
                <img className='gallery__image' src={image.previewUrl} alt='' />
              </figure>
            ))}
          </div>
        </TabPanel>
      )} */}
      </Tabs>
    </section>
  );
}
