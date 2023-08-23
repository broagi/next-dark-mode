export default function Page({ params }: { params: { page: string } }) {
  return (
    <>
      <h1 className="mb-8 text-5xl font-bold capitalize">{params.page}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu
        fermentum sem, ac bibendum ligula. Nunc mollis lorem risus, vel faucibus
        nunc venenatis vel. Donec dapibus feugiat elit id sodales. Donec purus
        mauris, iaculis nec finibus at, vulputate ac velit. Nunc porttitor
        rutrum ex, et laoreet purus iaculis sed. Sed sit amet turpis mollis,
        auctor ex eget, dictum ligula. Vestibulum lacinia sollicitudin
        consequat.
      </p>
    </>
  );
}
