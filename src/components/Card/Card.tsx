import Link from 'next/link';

const Card = ({ slug, date, title, description }: any) => {
  return (
    <Link href={`posts/` + slug}>
      <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <img
          alt="Office"
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          className="h-56 w-full object-cover"
        />

        <div className="bg-white p-4 sm:p-6">
          <time dateTime="2022-10-10" className="block text-xs text-gray-500">
            {date}
          </time>

          <h3 className="mt-0.5 text-lg text-gray-900">{title}</h3>

          <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
            {description}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default Card;
