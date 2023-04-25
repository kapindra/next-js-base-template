import Card from '../Shared/Card/Card';

const TopRated = (props: any) => {
  const { homesList } = props;
  return (
    <>
      <h2 className="text-2xl text-center">Top Rated Hotels</h2>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-6 sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
        {homesList.map(
          ({ id, createdAt, title, description }: any, index: any) => (
            <Card
              key={index}
              slug={id}
              date={createdAt}
              title={title}
              description={description}
            />
          )
        )}
      </div>
    </>
  );
};
export default TopRated;
