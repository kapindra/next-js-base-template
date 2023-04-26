import Image from 'next/image';
import Link from 'next/link';
const Card = ({ slug, date, title, description }: any) => {
  return (
    <>
      <article>
        <Link href={`posts/` + slug} className="group">
          <Image
            alt="Office"
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            className="object-cover w-full h-56 mb-5 bg-center rounded"
            width={300}
            height={300}
          />
          <p className="mb-2 text-xs font-semibold tracking-wider text-gray-400 group-hover:text-gray-500 uppercase">
            Development
          </p>
          <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-300 group-hover:text-cyan-500 dark:group-hover:text-cyan-500">
            {title}
          </h2>
          <p className="mb-3 text-sm font-normal text-gray-500">
            {description}
          </p>
          <p className="mb-3">
            <time dateTime="2022-10-10" className="block text-xs text-gray-400">
              {date}
            </time>
          </p>
        </Link>
      </article>
    </>
  );
};

export default Card;
